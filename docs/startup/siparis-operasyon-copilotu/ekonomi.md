# Ekonomi Kolu

> **Kural:** İlk üç ayda sahte CAC, LTV, TAM veya başarı yüzdesi üretilmez. Ekonomi; gerçek işlem, kurucu saati, doğrulanmış hata ve ödeme üzerinden kurulur.

[← Ana karar ağacı](index.md)

## 1. İlk fiyat hipotezleri

Bu rakamlar pazar gerçeği değil, saha testinde yanlışlanacak tekliflerdir.

| Paket | Fiyat hipotezi | Süre/kapsam | Neyi satın alıyor? | Devam kapısı |
|---|---:|---|---|---|
| Diagnostic | **20.000–25.000 TL + KDV** | 3–7 gün; 100 satır, SKU ve import şablonu | Baseline, üç örnek dönüşüm, exception haritası ve pilot kararı | Ölçülen fayda + ücretli shadow pilot |
| Shadow pilot | **45.000 TL + KDV / 14 gün**, %50 peşin | Tek inbox; 100–300+ satır | Günlük paralel işleme, onaylı import ve ölçüm | Ü1 + E1 geçer, ikinci ödeme gelir |
| Devam aboneliği | **20.000–35.000 TL/ay + hacim bandı** | Tek dikey/ERP; destek sınırı | İşlem motoru, kural hafızası, exception ve bakım | İkinci müşteri ve gerçek destek maliyetiyle yeniden fiyatlanır |
| Başarı bonusu | Sabit ücretin üstüne sınırlı pay | Yalnız doğrulanabilen tasarruf/kapasite | Sonuç ortaklığı | Baseline ve hesap yöntemi yazılıysa |

Tamamen başarı bazlı model ilk aşamada kullanılmaz. Ölçüm ihtilafı, tahsilat ve müşteri tarafından değiştirilen süreç ürün riskini yükseltir.

## 2. Müşterinin bugünkü bütçesi

Yeni bir “AI bütçesi” yaratmak yerine şu mevcut bütçelerden pay alınır:

- sipariş/inside-sales personel zamanı,
- fazla mesai,
- yeni çalışan arama ve onboarding,
- yanlış ürün/miktar/birim/fiyat,
- yeniden sevkiyat ve iade,
- yoğun dönemde kaçan sipariş ve müşteri,
- ERP entegratörü/özel yazılım,
- satışçının proaktif satış yerine veri girişi yapması,
- kritik kişiye bağımlılık.

Bir müşteri yalnız “yenilik” bütçesinden ödeme yapacaksa risk yüksektir.

## 3. ROI hesabı

### Basit doğrulanabilir formül

```text
Aylık doğrulanmış fayda =
  (aylık sipariş sayısı × sipariş başına kazanılan dakika / 60 × yüklü saat maliyeti)
+ doğrulanmış yeniden işleme / yanlış sevkiyat azalması
+ yoğun dönemde doğrulanmış ek kapasite katkısı
- yeni kontrol ve exception için harcanan insan zamanı
```

```text
Ekonomik etki oranı =
  12 aylık doğrulanmış fayda / 12 aylık toplam müşteri maliyeti
```

### Karar eşikleri

| Oran | Karar |
|---:|---|
| **≥3,0x** | E1 geçer; tekrarlanabilirlik dalına geç |
| **1,5–3,0x** | Kapsam, fiyat veya daha yüksek hacimli segment patch'i; bir tur daha test |
| **<1,5x** | Ürün ekonomik değil; öldür veya farklı probleme pivot |

“Potansiyel” fayda değil, müşteri tarafından kabul edilen baseline ve gerçekleşen değişim kullanılır.

## 4. Ölçülecek ekonomik alanlar

| Alan | Birim | Kaynak |
|---|---|---|
| Aylık sipariş | adet/satır | ERP veya inbox |
| Mevcut süre | dakika/sipariş | ekran paylaşımı + zaman ölçümü |
| Yeni süre | dakika/sipariş | shadow pilot log'u |
| Kritik hata | adet ve TL | iade/yeniden sevkiyat kayıtları |
| Geri soru | adet/sipariş | e-posta/WhatsApp veya kullanıcı işareti |
| İnsan maliyeti | yüklü TL/saat | müşteri finansı; kaba maaş tahmini değil |
| Onboarding | kurucu saati | zaman kaydı |
| Manuel exception | dakika/satır | ürün audit log'u |
| Model/API | TL/işlem | gerçek fatura/kullanım |
| ERP partneri | kurulum + devam payı | yazılı teklif |
| Destek | saat/ay | ticket/iletişim kaydı |
| İkinci ödeme | evet/hayır, TL | fatura/taahhüt |

## 5. Pilot birim ekonomisi

### Pilot gelir

- 45.000 TL liste hipotezi,
- %50 peşin: 22.500 TL,
- kalan ödeme: başarı kriterleri ve teslim takvimiyle,
- KDV ve tahsilat koşulları ayrıca.

### Pilot maliyetleri

- kurucu keşif ve veri temizliği,
- belge/SKU eşleştirme geliştirmesi,
- müşteri toplantıları,
- model/OCR/API,
- veri güvenliği ve sözleşme,
- ERP bayisi/uzmanı,
- manuel exception operasyonu,
- destek ve düzeltme.

### Pilot marj kapısı

İlk pilot öğrenme amacıyla düşük marjlı olabilir; ancak:

- kurucu saati kaydedilmeli,
- ücretsiz özel geliştirme kapsam dışı olmalı,
- ikinci müşteri için tekrar kullanılabilir varlık tanımlanmalı,
- devam fiyatı gerçek teslim maliyetini karşılamalı.

İkinci müşteride brüt katkı pozitif değilse “SaaS büyümesi” anlatısı durdurulur.

## 6. Kur ve fiyat revizyonu

Gelir TL; model, OCR, hosting ve bazı entegrasyon maliyetleri döviz olabilir.

İlk sözleşmelerde:

- 12 aylık sabit TL fiyat yerine üç aylık revizyon,
- işlem hacmi bandı,
- aşan destek/özel geliştirme için ayrı ücret,
- yabancı API maliyetinde olağanüstü değişim maddesi,
- on-prem/VPC için premium fiyat,
- ERP bayi ücretinin açık kalemi

kullanılmalıdır.

Token maliyeti ilk dönemde ana risk değildir. **Kurucu onboarding'i ve müşteri özelinde veri temizliği** daha büyük maliyet olma ihtimaline sahiptir.

## 7. Duyarlılık tablosu — piyasa gerçeği değil

Aşağıdaki senaryolar yalnız hangi değişkenin kararı bozacağını görmek içindir.

| Senaryo | Sipariş/gün | Kazanılan dakika | Hızlı onay | Onboarding | Ekonomi yorumu |
|---|---:|---:|---:|---:|---|
| Düşük hacim | 8 | 4 | %60 | 8 gün | İnsan emeği ve ürün maliyeti karşı-tezi güçlü; segment dışı |
| Eşik müşteri | 20 | 6 | %70 | 8–10 gün | Hata/kapasite eklenmeden fiyat zorlanabilir; diagnostic gerekir |
| Güçlü ilk müşteri | 40 | 8 | %80 | 7 gün | Pilot ve aylık ücret için daha iyi temel |
| Dağınık veri | 40 | 5 | %45 | 15+ gün | Danışmanlık yükü; kapsam daralt veya öldür |
| Olgun süreç | 60 | 8 | %90 | 5 gün | Ekonomi ve tekrar kullanım güçlü olabilir |

Bu tabloya maaş veya tasarruf rakamı konulmamıştır; müşteri yüklü saat maliyeti ve gerçek hata kaydı gelmeden uydurulmayacaktır.

## 8. Kurucu kapasitesi

Kurucu öğrenci ve tam zamanlı iş bağlamında projeyi yürütüyor. Bu nedenle:

- aynı anda tek pilot,
- tek inbox,
- tek dikey,
- en fazla üç teslimat,
- destek saatleri ve SLA sınırı,
- canlı sistemde insan onayı,
- müşteri başına kurucu saat bütçesi

zorunludur.

### Kapasite öldürme kriterleri

- bir müşteri kurulumu >2 hafta,
- kodun >%50'si müşteri için yeniden yazılıyor,
- kurucu her gün manuel sipariş operatörü oluyor,
- destek ayda planlanan ürün geliştirme süresini aşıyor,
- okul/iş nedeniyle söz verilen SLA sürdürülemiyor.

Bu sonuçta üç seçenek vardır:

1. tek dikey premium ürünleşmiş hizmet,
2. operasyon ortağı/çalışan,
3. startup tezini kapatma.

## 9. Diğer adayların korunmuş fiyat hipotezleri

Aktif olmayan fakat silinmeyen dallar:

| Aday | İlk fiyat hipotezi | Ekonomik kapı | Durum |
|---|---:|---|---|
| Tahsilat exception desk | 25.000 TL kurulum + ilave tahsilatın %0,5–1'i | Kontrol grubuna göre ek tahsilat ve ≥%50 zaman azalması | Donduruldu |
| Marj leakage | 40.000 TL audit; 20–35 bin TL/ay | Ücretin ≥3 katı doğrulanmış brüt kâr | Donduruldu |
| Freight audit | ≥30.000 TL + recovery'nin %10–15'i | Ücretin ≥3 katı recovery/önlenen maliyet | Donduruldu |
| İhale QA | 25–40 bin TL/ihale veya 50–75 bin TL/ay | Yılda 12+ ihale, ≥%40 hazırlık süresi azalması | Donduruldu |
| Security questionnaire | 35–75 bin TL hazırlık; 15–30 bin TL/anket | Sonraki ankette >%50 yeniden kullanım | Donduruldu |

Bunlar da pazar gerçeği değil, eski radar araştırmasındaki test fiyatlarıdır. Kaynak ve karşı-tezler [kanıt radarında](kanit-radari.md) korunur.

## 10. Ekonomi karar kapıları

### E0 — Ödeme

En az bir ≥20.000 TL depozito veya imzalı/tarihli ücretli pilot. Ücretsiz kullanım, sıcak yorum ve veri paylaşımı ödeme kanıtı değildir.

### E1 — Müşteri değeri

Doğrulanmış fayda / toplam maliyet ≥3x.

### E2 — Teslim ekonomisi

İkinci müşteride:

- pozitif brüt katkı,
- onboarding ≤10 iş günü,
- kod/kural tekrar kullanımı ≥%70,
- manuel exception maliyeti kabul edilebilir,
- destek kapsamı fiyat içinde sürdürülebilir.

### E3 — Nakit

- peşin veya kısa vadeli ödeme,
- tahsilat ürün hesabından geçmez,
- model/hosting gideri müşteriden önce finanse edilmez,
- büyüme mevcut nakit kapasitesini aşmaz.

E0 olmadan ürün; E1 olmadan abonelik; E2 olmadan ölçek; E3 olmadan büyüme açılmaz.
