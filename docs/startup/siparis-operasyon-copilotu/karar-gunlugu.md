# Karar ve Öğrenim Günlüğü

[← Ana karar ağacı](index.md)

## 1. Güncel karar

> **2026-08-05:** Kesin kazanan ilan edilmedi. Sipariş operasyon copilot'u, en büyük belirsizliği yedi gün içinde gerçek dosya ve ödeme ile test edilebildiği için **koşullu ilk pilot lideri** seçildi.

Tahsilat exception desk'in ham puanı daha yüksek olmasına rağmen ilk pilot lideri sipariş girişidir. Çelişki şu şekilde çözülür:

- Tahsilat problemi Türkiye'de daha güçlü ve daha iyi sayısallaştırılmıştır.
- Fakat reminder/ödeme linki/cari takip katmanında yerli rekabet oluşmuştur.
- Tahsilat iletişimi ilişki, ton, KVKK ve satış ekibi engeli taşır.
- Sipariş girişinde gerçek dosya, süre, hata ve ERP çıktısı bir haftada ölçülebilir.
- Kurucunun Python, veri eşleştirme, API ve HVAC/teknik çevresi sipariş pilotuyla daha iyi örtüşür.

Dolayısıyla **pazar acısı skoru** ile **ilk kurucu/pilot sırası** aynı şey değildir.

## 2. Aday puanları

Puan bileşenleri: küresel sinyal 15 / Türkiye problem kanıtı 20 / rekabet boşluğu 10 / mevcut harcama 10 / ilk 30 erişimi 10 / 30–45 gün pilot 10 / kurucu uyumu 10 / yerel savunma 5 / genişleme 5 / düşük risk 5.

| Aday | Bileşenler ve toplam | Güven | En büyük eksik | Öldürecek bilgi | Karar |
|---|---:|---|---|---|---|
| **Tahsilat exception desk** | `15+20+4+10+8+9+9+3+4+3 = 85` | Problem yüksek / fırsat orta | Dispute/promise-to-pay için ödeme isteği | Şirketler ilişki nedeniyle yarı otomatik takibe izin vermiyor | Donduruldu; sipariş tezi ölürse veya müşteride daha acil çıkarsa açılır |
| **Sipariş giriş copilot'u** | `14+17+7+8+8+9+9+4+4+4 = 84` | Orta-yüksek | Gerçek ERP dosyası ve ödeme | Çoğu hedef siparişi EDI/portal alıyor veya veri/para yok | **Aktif** |
| **Marj leakage** | `13+15+7+9+6+9+10+4+4+4 = 81` | Orta | KOBİ pricing bütçesi ve veri kalitesi | Gerçek maliyet/net fiyat verisi güvenilmez | Donduruldu; sipariş verisinde asıl kayıp fiyat çıkarsa açılır |
| **Freight audit** | `14+14+7+8+5+8+8+3+4+3 = 74` | Orta-düşük | Recovery oranı ve alan uzmanı | Sözleşme/referans eşleşmiyor | İzle |
| **İhale QA** | `13+14+4+8+8+8+8+3+4+3 = 73` | Orta | Yerli ürün QA derinliği | Danışman/ürün aynı sonucu düşük bedelle veriyor | İzle |
| **Security questionnaire** | `13+10+7+7+5+8+8+4+4+3 = 69` | Orta-düşük | Yıllık anket sıklığı ve WTP | Çoğu hedef yılda 0–1 anket alıyor | Hazırlan/izle |
| **CBAM evidence ops** | `12+15+3+8+6+6+5+4+4+1 = 64` | Problem orta / kurucu uyumu düşük | Yerli rekabet ve uzmanlık | Yerli ürün/danışman işi düşük marjla çözüyor | Hazırlan/izle |

## 3. Radar kararı

### Şimdi test et

1. Sipariş giriş copilot'u — aktif pilot lideri
2. Tahsilat exception desk — yüksek acı, dondurulmuş alternatif
3. Marj leakage audit — analitik uyum, dondurulmuş alternatif

### Erken ama izle

4. Freight invoice/surcharge audit
5. EKAP kanıt kütüphanesi ve final-QA

### Yerel oyuncu çıkmadan önce hazırlan

6. İhracatçı SaaS security questionnaire desk
7. Tek alt sektörde CBAM supplier-data/evidence operasyonu

### Hype veya yanlış transfer — öldürüldü

- Generic Türkçe voice agent
- Genel pazaryeri kârlılık/mutabakat paneli
- Genel CBAM SaaS
- Genel ihale arama motoru
- AI sağlık scribe
- Genel AI ERP
- Türkiye'ye özel yatay developer tool
- Lisans gerektiren kurumsal kart/spend platformu

## 4. Tarihli karar günlüğü

| Tarih | Yeni kanıt / olay | Çözülen çelişki veya değişen varsayım | Karar | Açılan dal | Dondurulan/kapanan dal |
|---|---|---|---|---|---|
| 2026-08-05 | Küresel radar: 25+ yabancı şirket/kategori, 14 bağımsız fırsat ailesi, Türkiye rakip ve workaround taraması | Funding traction sayılmadı; “Türkiye'de yok” boşluk sayılmadı | Altı güçlü aday ve sekiz öldürülen aday ayrıldı | Aday puanlama | Genel fikir listesi yaklaşımı kapandı |
| 2026-08-05 | Tahsilat 85, sipariş 84 puan | En yüksek pazar skoru ile en iyi ilk pilot aynı değildir | Sipariş copilot'u koşullu lider | P1/P2/D1 aktif | Tahsilat alternatif dalı donduruldu |
| 2026-08-05 | ArisaiSoft PDF/e-posta/Excel/WhatsApp → ERP ve exception yaklaşımını güncel olarak sunuyor | “Türkiye'de order-entry AI yok” yanlış | Boşluk A değil B/E; dikey sonuç ve dağıtım şart | T1 yerel kama testi | Genel Türkçe order-entry kopyası kapandı |
| 2026-08-05 | Mikro resmî REST API ve kayıt endpoint'leri; Logo üçüncü taraf entegrasyon/çift yönlü veri paylaşımı | ERP writeback teorik olarak mümkün, fakat ürün/sürüm/lisans bilinmiyor | CSV-first; API Ü1/D1 sonrası | Ü2 teknik keşif beklemede | Erken tam entegrasyon donduruldu |
| 2026-08-05 | KVKK yurt dışı aktarım rejimi ve 21 Temmuz 2026 standart sözleşme duyurusu doğrulandı | Yabancı LLM kullanımı varsayılan serbest değildir | Veri haritası, minimizasyon ve aktarım mekanizması R1 kapısı | Yerel/VPC/anonim diagnostic seçenekleri | Kontrolsüz bulut işleme kapandı |
| 2026-08-05 | Atradius 2026: Türkiye şirketlerinin %86'sı ödeme gecikmesi; faturaların üçte birinden fazlası vadesi geçmiş | Tahsilat probleminin gücü doğrulandı; ürün boşluğu değil | Tahsilat dalı korunur fakat reminder ürünü yapılmaz | Dispute/promise-to-pay alt tezi | Genel reminder kapandı |
| 2026-08-05 | Tahsilera güncel olarak WhatsApp/SMS/e-posta, yaşlandırma ve düşük fiyatlı planlar sunuyor | Basit tahsilat otomasyonu yerel olarak kalabalık | Tahsilat yalnız exception/uyuşmazlık olarak yaşayabilir | Sonuç/operasyon alt dalı | Reminder kopyası öldürüldü |
| 2026-08-05 | HappyRobot hakkında 4 Ağustos 2026 bağımsız basın: $150M Series C, $1,2B değerleme, 150+ müşteri; şirket kaynaklı büyüme rakamları | Agentic operation sinyali güncellendi; şirket rakamları denetimli gelir sayılmadı | Dikey entegrasyon + deployment tezi güçlendi | Operatör yazılım modeli | Funding'i talep kanıtı sayma kapandı |
| 2026-08-05 | MkDocs karar ağacı yapısı oluşturuldu | Kronolojik görev listesi yerine bağımlı kapılar gerekli | P1/P2/D1 aktif dal; üç haftalık hareket | Dosya + ödeme testi | Logo/site/tam ürün işleri donduruldu |

## 5. Aktif varsayım günlüğü

| ID | Başlangıç durumu | Beklenen kanıt | Sonuç | Yeni durum | Sonraki karar |
|---|---|---|---|---|---|
| P1 | Açık | 10 görüşmede ≥6 yüksek hacim + somut olay |  |  |  |
| P2 | Açık | 30 hedeften ≥3 veri; ilk hafta ≥2 |  |  |  |
| D1 | Açık | ≥20 bin TL depozito veya tarihli ücretli pilot |  |  |  |
| T1 | Açık | ≥5 görüşmede aynı yerel çözüm açığı |  |  |  |
| R1 | Açık | Yazılı veri sınırı ve uygulanabilir işleme yolu |  |  |  |
| Ü1 | Kilitli | ≥70 hızlı onay, <%2 hata, ≥60 süre |  |  | P2+D1 sonrası |
| E1 | Kilitli | Doğrulanmış fayda ≥3x |  |  | Ü1 sonrası |
| O1 | Kilitli | İkinci müşteri ≥70 tekrar kullanım |  |  | İlk pilot sonrası |

## 6. Dondurulan ürün işleri

| İş | Neden donduruldu? | Açma koşulu |
|---|---|---|
| Ürün adı/logo/domain | Hiçbir karar kapısını açmıyor | En az bir ücretli pilot ve devam niyeti |
| Genel landing page | Dar outbound için şart değil | Mesaj tekrarlanabilir ve vaka çalışması var |
| Tam UI/panel | Concierge ve tablo Ü1'i test eder | Günlük kullanıcı akışı doğrulanır |
| Canlı WhatsApp API | Export ile ilk kanıt mümkün | Sipariş payı yüksek ve export darboğaz olur |
| Tam Logo/Mikro writeback | Sistem riski ve özel proje | Ü1+D1 geçer, sürüm/lisans doğrulanır |
| Otomatik fiyat/iskonto | Etik ve hata riski | Ayrı fiyat doğrulama tezi, insan onayı ve müşteri talebi |
| Çoklu sektör | Dikey hafızayı ve satış mesajını bozar | Aynı dikeyde O1 geçer |
| Çoklu ERP | Entegrasyon maliyeti | Tek ERP çiftinde tekrarlanabilirlik |
| Genel AI agent platformu | Yerel hendek ve dağıtım kaybolur | Açılmayacak; yeni bağımsız tez gerekir |

## 7. Kanıt eksikleri

Minimum kanıt eşiğinin tamamı henüz geçilmedi:

- en az beş organik kullanıcı problemi/dosya örneği saha düzeyinde toplanmadı,
- Türkiye'de gerçek günlük hacim dağılımı bilinmiyor,
- ödeme görüşmesi yapılmadı,
- müşteri verisi paylaşım isteği bilinmiyor,
- gerçek Logo/Mikro sürüm ve import yöntemi görülmedi,
- ikinci müşteri tekrar kullanımı yok,
- yerli rakiplerin gerçek müşteri/traction ve fiyatı tam bilinmiyor,
- doğrulanmış yerel hata/rework oranı yok.

Bu boşluklar varsayım, TAM veya başarı yüzdesiyle doldurulmayacaktır.

## 8. Bir sonraki karar kaydı

**Tarih:** 2026-08-09

Şunlardan biri yazılmalıdır:

1. **Devam:** ≥1 ödeme + ≥2 veri paketi + güçlü problem → shadow pilot.
2. **Güven patch'i:** Problem güçlü, veri yok → yerinde/maskeleme ile tek tekrar.
3. **Teklif patch'i:** Veri ve ROI güçlü, ödeme yok → karar verici/fiyat/kapsamı bir kez değiştir.
4. **Pivot:** Asıl acı fiyat/stok veya marj kaçağı → ilgili dal.
5. **Öldür:** Hacim, veri ve ödeme kapıları temel olarak geçmiyor.

Aynı dalda üçten fazla büyük patch yapılamaz.
