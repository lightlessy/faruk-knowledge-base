# Güvenlik, Kalite ve Teknik Operasyon

[← Teknik mimari](mimari.md) · [Teknik paket](index.md) · [Uygulama planı](uygulama-plani.md)

## 7. Güvenlik ve KVKK mimarisi

### Veri sınıflandırması

- **Ham belge:** en hassas; kısa saklama ve sıkı erişim.
- **Yapılandırılmış sipariş:** ticari veri; tenant izolasyonu.
- **Master data:** ürün, müşteri, fiyat; ayrı izin ve gerekirse maskeleme.
- **Telemetry:** mümkün olduğunca içeriksiz metadata.
- **Model/eval verisi:** açık izin olmadan müşteri belgeleri genel eğitim setine eklenmez.

### Minimum kontroller

- TLS transit ve encryption at rest,
- tenant-scoped authorization,
- DB row-level security veya eşdeğer enforcement,
- tenant bazlı object prefix/bucket policy,
- secret manager,
- rol bazlı belge görünümü,
- audit log,
- retention/delete job,
- backup/restore testi,
- production/test ayrımı,
- dış model sağlayıcısına giden alanların envanteri,
- DPA ve veri aktarım kaydı.

### Prompt injection ve belge içi talimat riski

Sipariş belgesi güvenilmeyen girdidir. Belgedeki “önceki talimatları yok say”, URL, script veya tool çağrısı metni:

- sistem prompt'u sayılmaz,
- araç çağrısı başlatmaz,
- ERP yazma yetkisi vermez,
- yalnız belge içeriği olarak parse edilir.

Kontroller:

- model tool erişimi yok veya allowlist read-only,
- strict schema,
- HTML/script sanitization,
- dosya türü doğrulama,
- URL fetch kapalı,
- writeback ayrı deterministic servis,
- insan onayı,
- cross-tenant retrieval yasağı.

### Dış model sağlayıcısı veri kontrolü

Bir model sağlayıcısının “API verisi eğitimde kullanılmıyor” demesi, otomatik olarak sıfır saklama veya Türkiye/KVKK uyumu anlamına gelmez. Örneğin OpenAI'nin güncel API veri kontrolleri, varsayılan abuse monitoring loglarının müşteri içeriği içerebileceğini ve 30 güne kadar tutulabildiğini; Zero Data Retention veya Modified Abuse Monitoring'in uygunluk/onay gerektirdiğini; bazı endpoint ve özelliklerin farklı application-state davranışı olduğunu belirtiyor.

Bu nedenle provider konfigürasyonunda şunlar zorunludur:

- endpoint bazlı retention tablosu,
- `store=false` ve stateful özelliklerin ayrı kontrolü,
- ZDR/MAM/data residency uygunluğu kanıtı,
- file/vector/assistant benzeri kalıcı nesnelerin varsayılan kapalı olması,
- müşteri sözleşmesinde provider ve bölge kaydı,
- sağlayıcı değişirse yeniden risk değerlendirmesi.

İlk pilotta stateless structured extraction tercih edilir; müşteri belgesi provider üzerinde kalıcı dosya veya vector store'a yüklenmez.

### Veri yerleşimi seçenekleri

| Seçenek | Ne zaman? | Ekonomi etkisi |
|---|---|---|
| Managed SaaS | Varsayılan, müşteri kabul ederse | En iyi marj ve bakım |
| Türkiye/uygun bölge managed deployment | Veri yerleşimi gereksinimi | Ek altyapı maliyeti |
| Customer VPC | Büyük müşteri / güvenlik şartı | Kurulum + bakım ücreti |
| On-prem | Yalnız gerçek zorunluluk | En pahalı; ayrı ürün hattı sayılır |
| Yerinde/anonim diagnostic | Veri paylaşım kapısını test etmek | Tek seferlik hizmet; kalıcı mimari değil |

## 8. Evaluation ve kalite sistemi

### Golden set

Her pilotta müşteri tarafından doğrulanmış örnekler şu katmanlarda saklanır:

- belge tipi,
- alan ground truth,
- doğru customer/SKU,
- unit/package sonucu,
- expected exception,
- expected export.

Ham müşteri verisi eval setine yalnız sözleşmedeki amaç ve saklama sınırıyla girer.

### Metrikler

| Metrik | Neden |
|---|---|
| Field exact match | Extraction kalitesi |
| Critical false-pass | En önemli güven metriği |
| Abstention/exception rate | İnsan maliyeti |
| Fast-approval rate | Operasyon değeri |
| Candidate recall@k | Matching motoru yeterli mi? |
| Review seconds/line | Gerçek insan süresi |
| Alias reuse rate | Hafıza hendeği oluşuyor mu? |
| Duplicate prevention | Idempotency güveni |
| Writeback success/retry | ERP operasyon sağlığı |
| End-to-end cycle time | Müşteri sonucu |
| Human override by reason | Patch'in nerede gerektiği |

Model/parser/prompt/rule değişikliği golden set üzerinde regression geçmeden pilot ortamına çıkmaz.

### Confidence kalibrasyonu

Microsoft'un güncel Document Intelligence rehberi de field/word/table confidence değerlerinin kritik senaryolarda otomatik kabul veya human review kararı için kullanılabileceğini; fakat bütün alanların confidence üretmediğini ve threshold'un gerçek belge seti üzerinde seçilmesi gerektiğini vurguluyor. Bu nedenle tek sağlayıcı skorunu “gerçek olasılık” diye kabul etmeyiz; source grounding, iş kuralı ve golden-set kalibrasyonuyla birleşir.

Başarı yalnız accuracy değildir. İki eğri birlikte izlenir:

- **Coverage:** Satırların ne kadarı hızlı onaya hazır?
- **Precision/safety:** Hızlı onaya çıkanların ne kadarı gerçekten güvenli?

Hedef “her şeyi green yapmak” değil; kritik false-pass'i <%2 tutarken hızlı onayı ≥%70'e çıkarmaktır.

## 9. Observability ve audit

### Teknik telemetry

- `document.ingested`
- `normalization.completed`
- `extraction.completed`
- `matching.completed`
- `review.opened`
- `review.corrected`
- `order.approved`
- `export.created`
- `writeback.attempted/succeeded/failed`

Her trace:

- tenant id'nin güvenli referansı,
- order/document id,
- parser/model/rule version,
- latency,
- retry,
- error class

taşır. Belge içeriği varsayılan log alanı değildir.

### İş telemetry'si

- aktif insan dakikası,
- exception nedeni,
- hızlı onay,
- geri soru,
- bypass,
- ekonomik etki.

Audit log, teknik logdan ayrıdır. Teknik log silinse bile sözleşme ve politika kapsamında gerekli onay/writeback kayıtları korunabilir.

## 10. Dayanıklılık ve hata davranışı

| Hata | Sistem davranışı |
|---|---|
| Aynı e-posta tekrar gelir | Message-id + hash ile duplicate; yeni sipariş yaratma |
| Model timeout | Retry; sonra exception; kullanıcıya sessiz yanlış sonuç verme |
| Şema geçersiz | Extraction failed; review'e “boş ama hazır” gönderme |
| ERP unavailable | Writeback pending; idempotent retry; kullanıcıya durum |
| CSV mapping değişmiş | Mapping version mismatch; export'u durdur |
| Master data eski | Snapshot uyarısı; kritik eşleşmeyi exception'a düşür |
| Kullanıcı eşzamanlı düzenler | Optimistic lock/version conflict |
| Yanlış onay | Yeni order version + düzeltme; audit silinmez |
| Tenant credential sızma şüphesi | Credential revoke, connector stop, incident kaydı |
| Provider veri politikası değişir | Adapter/config ile provider kapat veya local/VPC yolu |

## 11. API yüzeyi — ilk sürüm

```text
POST   /v1/documents
GET    /v1/documents/{id}
POST   /v1/documents/{id}/process
GET    /v1/orders?status=review_required
GET    /v1/orders/{id}
POST   /v1/orders/{id}/corrections
POST   /v1/orders/{id}/approve
POST   /v1/orders/{id}/exports
POST   /v1/orders/{id}/writebacks   # kapı/rol kontrollü
GET    /v1/orders/{id}/audit
GET    /v1/metrics/pilot
POST   /v1/master-data/import
```

API dış müşteriye açılmadan önce aynı contract web uygulaması tarafından kullanılır. OpenAPI şeması client ve integration testleri için kaynak olur.

## 12. Dondurulan teknik kararlar

| İş | Neden şimdi yapılmaz? | Açma koşulu |
|---|---|---|
| Fine-tuning | Etiketli veri ve baseline yok | 1.000+ doğrulanmış örnek ve net hata deseni |
| Ayrı vector DB | Exact/alias/trigram ölçülmedi | Semantic recall açığı |
| Mikroservis | Operasyon ve ekip yükü | Bağımsız ölçek/ekip sınırı |
| Temporal/Kafka | İlk pilot job hacmi düşük | Uzun workflow/replay ihtiyacı ölçülür |
| Kubernetes | 1–2 kişi için aşırı operasyon | Dedicated çoklu deployment zorunluluğu |
| Desktop RPA | Kırılgan ve gözlemlenmesi zor | ERP import/API yok; ekonomi çok güçlü |
| Tam on-prem ürün | Her müşteri özel proje riski | Premium müşteri ve standart IaC paketi |
| Otomatik model öğrenmesi | Veri sızıntısı ve kontrol riski | Onay/versiyon/rollback sistemi kanıtlanır |
| Straight-through ERP | Kritik hata riski | Uzun dönem kalibre güven + müşteri onayı |

## 13. Mimari karar kapıları

| Kapı | Geçerse | Geçmezse |
|---|---|---|
| P2 + D1 | Pilot uygulaması build edilir | Yalnız disposable diagnostic araçları; ürün yok |
| Native parse yeterli | Vision maliyeti azaltılır | Layout/OCR fallback açılır |
| Alias + trigram recall yeterli | Vector katmanı açılmaz | Semantic retrieval spike |
| Ü1 geçer | Writeback adapteri açılır | Extraction/matching patch'i veya tez ölür |
| CSV değer veriyor | API ertelenir | ERP partner/API keşfi |
| O1 geçer | Multi-tenant hardening | Premium ürünleşmiş hizmet veya ölçek tezi kapanır |
| Dedicated talep fiyatı taşır | VPC/on-prem paket | Managed SaaS segmentine daral |

## Teknik kaynaklar

- [OpenAI API — Structured Outputs / strict JSON Schema](https://platform.openai.com/docs/guides/structured-outputs)
- [OpenAI API — Data controls, retention ve residency](https://platform.openai.com/docs/models/default-usage-policies-by-endpoint)
- [AWS document pipeline — OCR, enrichment, rule processing ve düşük güvenli alanlarda human review](https://github.com/aws-samples/amazon-textract-transformer-pipeline)
- [Microsoft Document Intelligence — accuracy/confidence ve human review](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/concept/accuracy-confidence?view=doc-intel-4.0.0)
- [OWASP — GenAI/LLM application security risks](https://github.com/OWASP/www-project-top-10-for-large-language-model-applications)
- [OpenTelemetry specification](https://github.com/open-telemetry/opentelemetry-specification)
- [Mikro API](https://apidocs.mikro.com.tr/)
- [Logo entegrasyon](https://www.logo.com.tr/dijital-donusum-hizmetleri/ozellestirme-ve-entegrasyon)
- [KVKK yurt dışına aktarım](https://www.kvkk.gov.tr/Icerik/2053/Yurtdisina-Aktarim)
