# Teslimat, Test ve Karar Kapıları

[← Uygulama planı](uygulama-plani.md) · [Teknik paket](index.md) · [Teknik mimari](mimari.md)

## 5. Teknik iş paketleri ve bağımlılıkları

| Paket | Bağımlılık | Sonuç | Başarısızsa |
|---|---|---|---|
| TP-01 Canonical schema | Gerçek örnek | Sabit order contract | Segment/belge tipini daralt |
| TP-02 Native parsers | TP-01 | Ucuz ve deterministik extraction | OCR/vision fallback |
| TP-03 Structured extraction | TP-01/02 | Eksik alanları katı şemaya getirir | Provider/prompt değiştir; serbest metne dönme |
| TP-04 Master data import | Gerçek ERP export | Customer/SKU source of truth | Diagnostic-only; writeback kilitli |
| TP-05 Candidate matcher | TP-04 | Top-k aday ve açıklama | Ürün ailesine daralt / semantic spike |
| TP-06 Policy gate | TP-03/05 | Green/amber/red | Güven eşiğini yükselt; coverage düşebilir |
| TP-07 Review UI | TP-06 | İnsan onaylı operasyon | Tablo/concierge ile geçici test |
| TP-08 Export | Import şablonu | Gerçek ERP-ready çıktı | ERP partner/import keşfi |
| TP-09 Pilot metrics | Baseline | Ü1/E1 kararı | Ürün sonucu kanıtlanamaz |
| TP-10 Writeback | Ü1+D1+ERP keşfi | Human-approved canlı kayıt | CSV-first üretim |

## 6. Test stratejisi

### Unit test

- normalizasyon,
- unit/package conversions,
- alias scope,
- confidence/policy rules,
- mapping,
- permission checks,
- idempotency.

### Golden regression

Her gerçek belge için:

- expected canonical fields,
- expected customer/SKU,
- expected exception,
- expected source ref,
- expected export.

Değişiklikler:

- critical false-pass artırıyorsa bloklanır,
- coverage artırıp güveni düşürüyorsa bloklanır,
- yeni belge tipini iyileştirirken eski dikeyi bozuyorsa ayrı adapter gerektirir.

### Integration test

- upload → job → extracted order,
- master data import → matching,
- review → audit,
- approval → CSV,
- retry → tek sonuç,
- tenant access boundary.

### Writeback test — kapı sonrası

1. Mock ERP,
2. resmî test/sandbox veya test şirketi,
3. tek order dry-run,
4. insan onaylı canlı düşük hacim,
5. reconciliation,
6. rollback/manuel düzeltme prosedürü.

## 7. Teknik Definition of Done

Bir özellik yalnız şu koşullarda “bitti”dir:

- kullanıcı işi tanımlı,
- source/audit davranışı tanımlı,
- yetki kontrolü var,
- happy path + failure path testli,
- telemetry var,
- tenant sınırı testli,
- veri saklama etkisi biliniyor,
- pilot metriğine bağlanıyor,
- geri alma veya güvenli durma davranışı var.

“Model cevap verdi” veya “ekranda çalıştı” DoD değildir.

## 8. Sahiplik

| Alan | Ana sahip | Müşteri tarafı sahip | Destek |
|---|---|---|---|
| Ürün/teknik mimari | Faruk | Operasyon yöneticisi | Gerekirse senior backend/security review |
| Sipariş gerçeği ve ground truth | Faruk koordinasyon | Sipariş uzmanı | Satış operasyon |
| ERP mapping | Faruk | ERP sorumlusu | Logo/Mikro partneri |
| KVKK/veri sınırı | Faruk bilgi hazırlığı | Veri sorumlusu/hukuk | KVKK uzmanı |
| Pilot ölçümü | Faruk | Süreç sahibi | Finans/GM doğrulaması |
| Writeback onayı | Faruk teknik | ERP sahibi + yönetim | Entegratör |

Faruk tek başına hukuk veya ERP ürün uzmanı gibi davranmaz. Eksik uzmanlık karar kapısında görünür tutulur.

## 9. Kapasite ve operasyon sınırı

İlk pilotta teknik kapsam şu sınırlarla korunur:

- tek müşteri,
- tek tenant,
- tek inbox,
- tek ERP import türü,
- en fazla iki ana belge tipi,
- en fazla bir teknik ürün dikeyi,
- en fazla üç kullanıcı rolü,
- canlı writeback yok,
- mesai içinde destek,
- her gün tek sonuç/exception incelemesi.

Yeni istek yalnız mevcut pilot metriğini doğrudan etkiliyorsa alınır. “İleride lazım olur” backlog'a bile otomatik girmez; karar günlüğüne varsayım olarak yazılır.

## 10. Teknik risk kaydı

| Risk | Erken sinyal | Patch | Öldürme/yeniden kapsam |
|---|---|---|---|
| Belgeler çok değişken | Parser başına özel kod hızla artar | Belge tipini daralt, layout adapter | İki tipte dahi tekrar yoksa |
| SKU master kirli | Çok sayıda pasif/duplicate aday | Data-quality report, aktif ürün filtresi | Master source of truth yoksa |
| Alias patlaması | Her siparişte yeni alias | Ürün ailesi/müşteri daralt | >%50 kalıcı yorum |
| Model maliyeti yüksek | Satır başı provider çağrısı | Native parse, batching, cache | Fayda/maliyet <3 |
| Review UI yavaş | Kullanıcı Excel'e dönüyor | Klavye akışı, bulk approve | Review süresi düşmüyor |
| ERP mapping kırılgan | Her export manuel düzeltiliyor | Versioned mapping + partner | Standart import yoksa |
| Veri paylaşımı kısıtlı | Ham belge cloud'a çıkamıyor | Yerinde/anonim/dedicated | Fiyat dedicated maliyeti taşımıyor |
| Prompt injection | Belge talimatı çıktıyı etkiliyor | Strict schema, no tools, sanitization | Güvenli izolasyon kurulamazsa |
| Kurucu operasyon yükü | Her gün manuel düzeltme | Exception taxonomy, alias approval | İkinci müşteride tekrar yoksa |
| Kullanıcı bypass | Siparişler inbox dışı | Süreç sahibi, kapsam, teşvik | Ölçüm mümkün değilse |

## 11. Pilot sonrası dallar

### Dal A — CSV-first üretim

Açılırsa:

- CSV/import zaten değer üretir,
- API beklenmeden abonelik başlayabilir,
- ERP partneri opsiyonel hızlandırıcıdır.

### Dal B — Human-approved writeback

Açılma koşulu:

- Ü1 geçer,
- ikinci ödeme,
- test ortamı,
- idempotency/reconciliation,
- yazılı yetki.

### Dal C — Quote/order validation

Extraction güçlü fakat asıl değer:

- fiyat,
- stok,
- kredi limiti,
- teslim tarihi

kontrolündeyse order entry'nin yerine/yanına açılır. Ayrı ekonomik kanıt gerekir.

### Dal D — Premium ürünleşmiş hizmet

Teknik sonuç güçlü fakat onboarding çok özel kalırsa:

- tek dikey,
- yüksek kurulum,
- az müşteri,
- insan destekli premium fiyat

ile devam edilebilir. Bu, ölçeklenebilir SaaS teziyle karıştırılmaz.

### Dal E — Öldür

- 10 nitelikli teklifte ödeme yok,
- kritik false-pass eşiği geçmiyor,
- satırların >%50'si sürekli yorum,
- standart export/import yok,
- ikinci müşteri kod tekrar kullanımı <50,
- doğrulanmış fayda toplam maliyetin <1,5 katı.

## 12. Dondurulan backlog

- Marka/domain/landing page,
- self-service onboarding,
- çoklu ERP,
- çoklu sektör,
- canlı WhatsApp API,
- müşteri otomatik mesajı,
- mobil uygulama,
- fine-tuning,
- ayrı vector database,
- mikroservis/Kubernetes,
- tam on-prem ürün,
- straight-through processing,
- stok optimizasyonu,
- otomatik fiyat/iskonto.

Bu backlog “sonra kesin yapılacaklar” listesi değildir. Her madde kendi karar kapısını geçmek zorundadır.

## 13. Pilot sonunda üretilecek teknik teslim paketi

1. Çalışan shadow workspace,
2. Canonical order schema ve alan sözlüğü,
3. Desteklenen belge matrisi,
4. Customer/SKU matching raporu,
5. Exception taxonomy,
6. Golden regression seti,
7. CSV/import mapping,
8. Pilot metrik raporu,
9. Veri akışı ve retention belgesi,
10. Audit örneği,
11. Operasyon runbook'u,
12. Devam/pivot/öldür teknik kararı,
13. Writeback keşif listesi,
14. İkinci müşteri tekrar kullanım checklist'i.

## Kaynaklar

- [Teknik Sunum ve Kapsam Paketi](index.md)
- [Teknik Mimari](mimari.md)
- [Deneyler ve Ölçüm Planı](../deneyler.md)
- [OpenAI API — Structured Outputs](https://platform.openai.com/docs/guides/structured-outputs)
- [OpenAI API — Data controls](https://platform.openai.com/docs/models/default-usage-policies-by-endpoint)
- [AWS document processing + human review sample](https://github.com/aws-samples/amazon-textract-transformer-pipeline)
- [Microsoft Document Intelligence — confidence and human review](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/concept/accuracy-confidence?view=doc-intel-4.0.0)
- [Mikro API — REST/JSON, version, test and endpoint docs](https://apidocs.mikro.com.tr/)
- [OWASP LLM/GenAI security project](https://github.com/OWASP/www-project-top-10-for-large-language-model-applications)
- [OpenTelemetry specification](https://github.com/open-telemetry/opentelemetry-specification)
