# Katmanlı Startup Hareket Planı

Bu sayfa bütün startup çalışmalarının **kuşbakışı kontrol merkezi**dir. Ayrıntılı aktif plan [Sipariş Operasyon Copilot'u karar ağacında](siparis-operasyon-copilotu/index.md) tutulur.

## 1. İnteraktif zihin haritası

<div class="markmap">
<script type="text/template">
# Startup Hareket Sistemi
## 0. Kuzey Yıldızı
### Gerçek nakit
### Kurucu özerkliği
### Sonraki girişimlere aktarılan teknik ve ticari ustalık
## 1. Aktif Startup
### Sipariş Operasyon Copilot'u
#### Aktif Dal
##### P1: yüksek hacimli gerçek problem
##### P2: gerçek dosya paylaşımı
##### D1: ≥20 bin TL ödeme taahhüdü
#### Başarı → Shadow Pilot
#### Başarısızlık → Güven/Kanal Patch'i
#### Yine başarısız → Pivot veya öldür
## 2. Problem–Müşteri Kolu
### Son olay
### Hacim
### Bugünkü alternatif
### Mevcut bütçe
### Karar Kapısı
#### Güçlü acı + veri → Çözüm
#### İlgi var, ödeme/veri yok → güven/segment
#### Acı zayıf → öldür
## 3. Çözüm–Ürün Kolu
### Concierge
### Shadow mode
### Exception kuyruğu
### İnsan onayı
### Karar Kapısı
#### ≥70 hızlı onay
#### <%2 kritik hata
#### ≥60 süre azalması
## 4. Dağıtım–Satış Kolu
### İlk 30
### ERP bayisi
### Teknik ticaret kümeleri
### Depozito
### Karar Kapısı
#### Ödeme → pilot
#### ROI var ödeme yok → teklif patch'i
#### 10 teklifte sıfır → pivot/öldür
## 5. Ekonomi Kolu
### 20–25 bin diagnostic
### 45 bin shadow pilot
### Fayda ≥3x maliyet
### İkinci müşteri pozitif katkı
## 6. Operasyon–Risk Kolu
### Tek inbox
### KVKK ve veri haritası
### CSV-first
### İkinci müşteride ≥70 tekrar kullanım
## 7. Türkiye'ye Giriş Kolu
### Yerel rakip var
### Kama: dikey + ERP + alias + sonuç
### ArisaiSoft ve entegratör karşılaştırması
### Logo/Mikro partner dalı
## 8. Dondurulan Fırsatlar
### Tahsilat exception desk
### Marj leakage
### Freight audit
### EKAP QA
### Security questionnaire
### CBAM evidence ops
## 9. Bu Hafta
### 30 hedef ve ilk temas
### 8–10 görüşme + iki veri paketi
### Concierge + ≥20 bin TL teklif
</script>
</div>

!!! info "Haritayı kullanma şekli"
    Dalları aynı anda bitirme. En büyük belirsizliği taşıyan yolu **aktif dal** yap; diğer gerekli işler görünür kalır fakat bekler.

## 2. Karar kapılı ana akış

```mermaid
flowchart TD
    S["Başlangıç: Startup tezi"] --> P{"Problem güçlü, sık ve ücretli mi?"}
    P -->|Hayır| P0["Segmenti veya problemi değiştir"]
    P0 --> P
    P -->|Evet| V{"Gerçek veri paylaşılıyor mu?"}
    V -->|Hayır| V0["Güven, yerinde işlem, maskeleme veya read-only patch'i"]
    V0 --> V
    V -->|Evet| W{"Ödeme veya ciddi taahhüt var mı?"}
    W -->|Hayır| W0["Fiyat, güven, teklif, kanal veya segmenti test et"]
    W0 --> W
    W -->|Evet| U{"Çözüm ölçülen sonuç üretiyor mu?"}
    U -->|Hayır| U0["Mekanizmayı değiştir, daralt veya öldür"]
    U0 --> U
    U -->|Evet| E{"Fayda maliyetin ≥3 katı mı?"}
    E -->|Hayır| E0["Kapsamı/fiyatı/hacmi değiştir veya öldür"]
    E0 --> E
    E -->|Evet| R{"İkinci müşteride tekrarlanabilir mi?"}
    R -->|Hayır| R0["Ürünleşmiş hizmet veya ölçek tezini kapat"]
    R -->|Evet| G["Kontrollü büyüme"]
```

## 3. Paralel ama bağımlı iş akışları

=== "Problem–Müşteri"

    - Son 30 gün işlem hacmi görülmeden segment doğrulanmaz.
    - Son olay, kayıp ve bugünkü alternatif kaydedilir.
    - Gerçek dosya paylaşımı problem kanıtının parçasıdır.
    - Başarı sonucu çözüm testini açar.

=== "Çözüm–Ürün"

    - Koddan önce concierge ve shadow mode.
    - En fazla üç teslimat.
    - Human-in-the-loop ve kaynak gösterimi.
    - Ürün kapısı ödeme/veri sonrasında açılır.

=== "Dağıtım–Satış"

    - İlk 30 dar hedef.
    - Tek kanal/tek mesaj değil; kanal sonuçla değerlendirilir.
    - Görüşme → veri → teklif → depozito dönüşümü izlenir.
    - “Güzel fikir” taahhüt değildir.

=== "Ekonomi"

    - Pilot fiyatı hipotezdir.
    - Gerçek insan zamanı, hata ve kurucu saati ölçülür.
    - Fayda ≥3x değilse ölçek açılmaz.
    - İkinci müşteri pozitif katkı sağlamadan CAC/LTV yazılmaz.

=== "Operasyon–Risk"

    - Tek inbox, CSV-first ve shadow mode.
    - KVKK, veri minimizasyonu, tenant izolasyonu ve audit log.
    - Bypass ve destek yükü ölçülür.
    - İkinci müşteride ≥70 tekrar kullanım aranır.

=== "Türkiye'ye Giriş"

    - “Yerel ürün yok” varsayımı yasaktır.
    - Yerli rakip, ERP, entegratör, insan ve WhatsApp gerçek alternatiftir.
    - Yerel kama: dikey veri + ERP + dağıtım + sonuç.
    - Yalnız daha ucuz Türkçe kopya girilmez.

## 4. Aktif dal tablosu

| Alan | Aktif cevap |
|---|---|
| Bu haftanın ana varsayımı | Yüksek hacimli teknik distribütör gerçek dosya paylaşır ve ölçülen değer için ≥20.000 TL taahhüt verir |
| Neden en riskli? | Bu sonuç çıkmadan model, API, UI ve ölçek ekonomisi anlamsız |
| En fazla üç hareket | 30 hedef/ilk temas; 8–10 walkthrough + iki veri paketi; concierge + ücretli teklif |
| Beklenen somut kanıt | Hacim, son olay, 100+ satır, SKU, import şablonu, süre/hata baseline, depozito |
| Başarı eşiği | ≥1 ödeme + ≥2 veri paketi + ≥6 güçlü acı |
| Başarısızlık eşiği | 30 hedeften <3 veri paylaşımı veya 10 nitelikli teklifte sıfır ödeme |
| Sonraki açılacak dal | Shadow benchmark Ü1; sonra ERP writeback Ü2 |
| Dondurulan işler | Tam API, WhatsApp entegrasyonu, UI, marka, stok/fiyat otomasyonu ve diğer fırsat aileleri |

## 5. Aktif dosyaya geçiş

- [Ana karar ağacı](siparis-operasyon-copilotu/index.md)
- [Deneyler ve ölçüm](siparis-operasyon-copilotu/deneyler.md)
- [Karar günlüğü](siparis-operasyon-copilotu/karar-gunlugu.md)

## 6. Planın kalite kontrolü

Bir hareket aşağıdakilerden hiçbirini değiştirmiyorsa muhtemelen gereksizdir:

- müşteri hakkındaki kesinlik,
- problemin şiddeti,
- veri paylaşma isteği,
- çözümün ölçülen sonucu,
- ödeme isteği,
- dağıtım kanalı,
- birim ekonomi,
- operasyon kapasitesi,
- kritik risklerden biri.

!!! danger "Sahte ilerleme sinyalleri"
    İsim bulmak, logo tasarlamak, genel pazar büyüklüğü okumak, kapsamı sürekli büyütmek ve ürün tamamlanmadan aylarca kod yazmak; bir karar kapısını açmıyorsa planın merkezine alınmaz.
