# Pazar ve Müşteri Kolu

> **Amaç:** “Türkiye'de yok” anlatısını değil, yüksek hacimli teknik distribütörde tekrarlanan ve para kaybettiren sipariş operasyonunu doğrulamak.

[← Ana karar ağacı](index.md)

## 1. İlk müşteri fenotipi

| Boyut | Dar seçim | Neden |
|---|---|---|
| Sektör | HVAC, elektrik malzemesi veya endüstriyel yedek parça dağıtımı | Çok SKU, müşteri özel kod/fiyat, ölçü ve paket dili; kurucunun erişebildiği çevre |
| Yer | İstanbul; ilk kümeler Perpa, İkitelli, Dudullu ve Karaköy | Yüz yüze güven, dosya erişimi ve hızlı pilot mümkün |
| Şirket | 15–60 çalışan; 2.000+ SKU | Süreç karmaşık ama enterprise satın alma döngüsü kadar ağır değil |
| ERP | Logo veya Mikro | Yerel yaygınlık sinyali, entegrasyon ekosistemi ve somut teknik başlangıç |
| İşlem hacmi | Günde ≥20 manuel sipariş veya ayda ≥500 teklif/satış satırı | Altında insan emeği ürün maliyetinden ucuz kalabilir |
| Kullanıcı | İç satış, sipariş operasyonu, satış destek | Günlük kaybı yaşayan kişi |
| Bütçe/karar | Şirket sahibi, GM, satış veya operasyon müdürü | Türkiye KOBİ'sinde merkezî karar pilotu hızlandırabilir |
| Satın alma anı | Yoğun sezon, gecikme/yanlış sevkiyat, yeni personel arayışı, kritik çalışan ayrılığı | Genel verim değil, mevcut bütçe ve aciliyet |

## 2. Problem zinciri

Sipariş temsilcisi çoğunlukla şu işi tekrarlar:

1. E-posta, WhatsApp, PDF veya Excel'i açar.
2. Müşteri hesabını ve ödeme/kredi durumunu bulur.
3. Müşterinin ürün kodunu şirket SKU'suyla eşleştirir.
4. Koli–adet–paket, ölçü ve varyantı kontrol eder.
5. Müşteri özel fiyatı, iskonto ve stok durumunu kontrol eder.
6. Siparişi ERP'ye yeniden girer.
7. Eksik veya çelişkili satır için müşteriye döner.
8. Hata varsa yeniden sevkiyat, iade, gecikme ve ilişki kaybı oluşur.

Problem “veri girişi sıkıcı” değildir. Ölçülecek ekonomik kayıp:

- sipariş başına insan dakikası,
- yoğun dönemde bekleyen sipariş ve kaçan kapasite,
- yanlış ürün/miktar/birim/fiyat,
- müşteriye geri soru sayısı,
- yeniden sevkiyat/iade,
- kritik çalışana bağımlılık,
- yeni personel onboarding süresi,
- satışçının proaktif satış yerine operasyon yapması.

## 3. Küresel kategori sinyali

### Distribütör order-entry kümesi

| Şirket | Güncel sinyal | Kanıt statüsü | Plan için anlamı |
|---|---|---|---|
| **Comena** | YC S25, aktif, sekiz kişilik ekip; e-posta/PDF/Excel'den SKU matching ve inbox-to-ERP | Şirket/YC doğrulaması; %75–99 tasarruf şirket iddiası | Kategorinin teknik olarak mümkün ve erken olduğunu gösterir; Türkiye talebini kanıtlamaz |
| **Distro** | Endüstriyel toptan distribütör satış temsilcileri için dikey copilot; saha araştırması ve lider distribütörlerle geliştirme anlatısı | Şirket/YC anlatısı | Dikey ürün evreni ve satış akışının genel modelden önemli olduğunu destekler |
| **Ventura** | Distribütör ve üreticilerde teklif ve order entry ile başlayan AI workforce | Şirket/YC anlatısı | Aynı probleme bağımsız girişim yoğunluğu kategori sinyalidir |
| **Mercura** | Distribütör/üretici teklif ve sipariş otomasyonu | Şirket/YC anlatısı | “Tek şirket fikri” değil, oluşan kategori |
| **Whitespace** | Toptan distribütör sistemlerine bağlanan yaşayan iş modeli ve order-processing ajanları | Şirket/YC anlatısı | Entegrasyon ve şirket özelinde öğrenen modelin değerini destekler |

Kaynaklar: [YC — Comena](https://www.ycombinator.com/companies/comena), [Comena](https://comena.ai/en/), [YC — Distro](https://www.ycombinator.com/companies/distro), [YC — Ventura](https://www.ycombinator.com/companies/ventura), [YC — Mercura](https://www.ycombinator.com/companies/mercura), [YC — Whitespace](https://www.ycombinator.com/companies/whitespace).

### Daha geniş “operatör yazılım” sinyali

GovDash kamu teklifini; Fazeshift/Kolleno tahsilatı; Loop/Raft/HappyRobot lojistik operasyonlarını yalnızca raporlamak yerine yürütmeye yöneliyor. HappyRobot hakkında 4 Ağustos 2026 tarihli bağımsız basın haberi $150 milyon Series C, $1,2 milyar değerleme, 150+ büyük müşteri ve önceki tura göre beş kat iş büyümesi aktarıyor; rakamlar şirket açıklamasına dayalı olduğu için denetimli gelir değildir. Bu sinyal, özelliğin değil **entegrasyon + dikey süreç + uygulama mühendisliği** bileşiminin yatırım ve kullanım çektiğini gösterir. [Cinco Días — HappyRobot, 2026-08-04](https://cincodias.elpais.com/companias/2026-08-04/happyrobot-cierra-una-ronda-de-130-millones-liderada-por-prysm-capital-y-eurazeo.html)

## 4. Türkiye problem kanıtı

### Bugünkü bütçe

Türkiye'deki güncel sipariş/operasyon iş ilanları, müşteri siparişlerini kontrol etme, farklı kanallardan gelen siparişi ERP'ye aktarma, fiyat–stok–kredi bloklarını inceleme ve operasyon takibi için çalışan istihdam edildiğini gösteriyor. İlanlar pazarın yaygınlık oranını kanıtlamaz; fakat işin hayalî olmadığını ve şirketlerin bugün personel bütçesi ayırdığını gösterir.

Kaynak örnekleri:

- [Merze Mobilya — Sipariş Kontrol Personeli](https://tr.linkedin.com/jobs/view/sipari%C5%9F-kontrol-personeli-at-merze-mobilya-a-%C5%9F-4247694178)
- [Engin Grup — Müşteri Operasyonları Uzmanı](https://tr.linkedin.com/jobs/view/m%C3%BC%C5%9Fteri-operasyonlar%C4%B1-uzman%C4%B1-at-engin-grup-4352712372)
- [Tunaylar Baskül — Satış Operasyon Sorumlusu](https://tr.linkedin.com/jobs/view/sat%C4%B1%C5%9F-operasyon-sorumlusu-at-tunaylar-bask%C3%BCl-a-%C5%9F-4431068451)
- [Coca-Cola CCI — Bayi Sipariş Operasyonları](https://tr.linkedin.com/jobs/view/bayi-sipari%C5%9F-operasyonlar%C4%B1-yetkilisi-bursa-at-coca-cola-cci-4198185762)
- [Elitra — Sipariş ve Operasyon Uzmanı](https://tr.linkedin.com/jobs/view/sipari%C5%9F-ve-operasyon-uzman%C4%B1-at-elitra-mobilya-4220824944)

### Organik süreç anlatısı

YK Yazılım'ın sağlayıcı içeriği, üretici ve toptancıların siparişi telefon/WhatsApp üzerinden alıp fiyat kontrolünden sonra Excel veya ERP'ye elle girdiğini; “20 koli”nin “20 adet” olarak girilmesi gibi birim hatalarını anlatıyor. Bu bağımsız araştırma değildir, fakat hedef iş akışını yerel dilde doğrulayan birinci el ticari sinyaldir. [YK Yazılım — Bayi sipariş sistemi rehberi, 2026-07-11](https://www.ykyazilim.com.tr/blog/bayi-siparis-sistemi-rehberi)

## 5. Türkiye'deki gerçek rekabet

| Rakip/ikame | Gücü | Açığı veya test edilmesi gereken nokta |
|---|---|---|
| **İç satış/sipariş çalışanı** | Esnek, ilişkiyi bilir, istisnayı çözer | Kapasite, hata, kritik kişi bağımlılığı ve onboarding maliyeti |
| **WhatsApp/e-posta/Excel** | Müşteri davranışını değiştirmez, ucuz | Veri tekrar girilir; görünürlük ve audit zayıf |
| **Bayi portalı/B2B sitesi** | Yapılandırılmış sipariş ve stok/fiyat sunar | Müşterinin portal kullanması gerekir; düşük bayi sayısında yatırım gereksiz olabilir |
| **Logo/Mikro/ERP modülü** | Kayıt sistemi ve şirket verisi | Yapılandırılmamış giriş kanalını ve müşteri özel dilini çözmeyebilir |
| **ERP entegratörü/bayi** | Güven, kurulum ve yerel sistem bilgisi | Proje bazlı olabilir; ürünleşmiş alias/exception motoru olmayabilir |
| **ArisaiSoft** | PDF/e-posta/Excel/WhatsApp → ERP; OCR+LLM, alan eşleştirme ve exception yaklaşımı | Doğrudan güçlü yerli rakip. Dikey odak, ölçülmüş sonuç, ürünleştirme ve dağıtım farkı gerçek görüşmede kanıtlanmalı |
| **Hiçbir şey yapmamak** | Yeni bütçe yaratmaz | Ancak hata ve kapasite kaybı yeterince büyükse yenilir |

ArisaiSoft'un güncel sitesi, ham verinin AI tarafından okunup doğrulandığını, ERP/CRM alanlarıyla eşleştirildiğini ve insanın yalnızca istisnada devreye girdiğini açıkça söylüyor. Bu nedenle boşluk sınıfı **A — gerçek boşluk değil; B/E — mevcut çözüm var ama dar kategori/sonuç katmanı farklı konumlandırılabilir** olarak tutulur. [ArisaiSoft](https://arisaisoft.com/)

## 6. Kör kopya testi

Comena'nın arayüzünü kopyalamak şu yerel sorunları çözmez:

- Türkçe marka, ölçü ve sektör kısaltmaları,
- müşteri ürün kodu ↔ şirket SKU ilişkisi,
- koli–adet–paket dönüşümü,
- müşteri özel fiyat/iskonto,
- Logo/Mikro ürün ve sürüm farkı,
- WhatsApp ve telefon ağırlıklı iş akışı,
- şirket sahibinin güven ve yüz yüze referans ihtiyacı,
- çalışan bypass'ı,
- KVKK ve yurt dışı model kullanımı,
- yerel entegratör/bayi teşviki.

Yerel kama yalnızca “Türkçe ve ucuz” değildir. En az şu üçü birlikte çıkmalıdır:

1. **Daha hızlı değer:** üç gerçek sipariş aynı gün ERP importuna dönüşür.
2. **Yerel veri hendeği:** müşteri–SKU alias, paket ve exception düzeltmeleri tekrar kullanılır.
3. **Daha iyi dağıtım:** ERP bayisi veya teknik ticaret ağı üzerinden güvenle satılır.

## 7. “Türkiye'de yok çünkü gereksiz” karşı-tezi

| Karşı-tez | Nasıl falsifiye edilir? | Öldürme sonucu |
|---|---|---|
| İnsan emeği yazılımdan ucuz | Yalnız maaşı değil kapasite, hata, yeniden sevkiyat ve gecikmeyi ölç | Fayda toplam maliyetin <1,5 katıysa öldür |
| Sipariş hacmi düşük | Son 30 gün işlem sayısını gör | <20/gün şirketler segment dışı |
| Süreç standart değil | 100–300 satırda exception dağılımını ölç | >%50 sürekli insan yorumu ise öldür/pivot |
| Müşteri veri paylaşmaz | Maskeleme, yerinde çalışma, DPA ve read-only diagnostic dene | İki güven patch'inden sonra veri yoksa öldür |
| Portal zaten yeterli | Portal dışı sipariş yüzdesini ve nedenini sor | Yapılandırılmamış kanal payı düşükse öldür |
| ERP kolayca özellik ekler | Yerel alias, çoklu ERP ve exception hizmetinin değerini ölç | Müşteri mevcut ERP özelliğiyle aynı sonucu alıyorsa dondur |
| Yerli entegratör işi çözüyor | Son 12 ay çözüm alımı, fiyatı ve kalan açığı sor | Açık kalmamışsa girilmez |
| Global ürün doğrudan gelir | Logo/Mikro, KVKK, yerel kanal ve veri birikimi avantajını test et | Yerel avantaj yalnız fiyat ise savunma zayıf |

Bir sağlayıcı görüşü, aktif bayi sayısı 10'un altındaysa portal yatırımının gereksiz olabileceğini savunuyor. Bu pazar ölçümü değildir; fakat segment eşiği koymak için ciddi karşı sinyaldir. [Engin Tasarım — B2B sipariş sistemi](https://www.engintasarim.com/b2b-siparis-sistemi)

## 8. Güç ve teşvik haritası

| Rol | Teşvik | Riski | Görüşmede aranacak davranış |
|---|---|---|---|
| Şirket sahibi/GM | Daha fazla kapasite, düşük hata, daha az kritik kişi bağımlılığı | Yeni yazılım bütçesi ve güven | Son yanlış sipariş, yeni işe alım, yoğun sezon kaybı |
| Satış/operasyon müdürü | Sipariş SLA ve ekip verimi | Süreç değişimi ve entegrasyon yükü | Geciken kuyruk, günlük rapor, bypass |
| İç satış/sipariş çalışanı | Tekrar işi azalır | Güç/iş kaybı veya görünür performans korkusu | Kendi Excel'i, takma ad listesi, manuel workaround |
| ERP sorumlusu/bayi | Yeni entegrasyon geliri ve müşteri bağlılığı | Sistem riski, destek yükü, müşteri kontrolü | İzin verilen import/API, sürüm, lisans ve destek modeli |
| Müşteri satın almacısı | Mevcut kanalını değiştirmeden doğru teslimat | Yeni portal ve format zorunluluğu | Neden PDF/Excel/WhatsApp gönderdiği |

## 9. Aktif pazar kapıları

1. **Hacim kapısı:** 10 nitelikli görüşmenin en az altısında ≥20 manuel sipariş/gün veya eşdeğer yüksek iş yükü.
2. **Son olay kapısı:** En az beş şirkette son 90 günden yanlış sevkiyat, gecikme, kaçan sipariş veya yeni çalışan ihtiyacı.
3. **Dosya kapısı:** 30 hedeften en az üçü 100+ satır/SKU/import şablonu paylaşır; bu hafta en az ikisi.
4. **Rakip açığı kapısı:** En az beş görüşmede mevcut portal/ERP/entegratörün aynı dar açığı bırakması.
5. **Ödeme kapısı:** En az bir ≥20.000 TL depozito veya imzalı/tarihli ücretli pilot.

## 10. Kaynak ve güven notları

- Bütün 25+ yabancı şirket/kategori, 14 Türkiye fırsat ailesi, aday skorları ve kaynaklar [kanıt radarında](kanit-radari.md) tutulur.
- Şirketlerin kendi zaman tasarrufu ve ROI rakamları traction yönü verir; bağımsız denetimli sonuç sayılmaz.
- İş ilanı bir görevin varlığını ve çalışan bütçesini gösterir; tüm sektörün yaygınlığını göstermez.
- Sağlayıcı blogu iş akışını gösterir; ödeme isteğini kanıtlamaz.
- Saha kararı ancak geçmiş davranış, gerçek dosya, ölçüm ve ödeme birleşimiyle değişir.
