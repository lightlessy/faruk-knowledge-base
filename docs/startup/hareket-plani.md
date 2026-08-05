# Katmanlı Startup Hareket Planı

Bu sayfa startup planının **kuşbakışı kontrol merkezi**dir. Aşağıdaki yapı bilinçli olarak genel bırakıldı: mevcut ChatGPT konuşmasındaki gerçek startup planı işlendiğinde dallar, deneyler, tarihler ve eşikler somutlaştırılacak.

## 1. İnteraktif zihin haritası

<div class="markmap">
<script type="text/template">
# Startup Hareket Sistemi
## 0. Kuzey Yıldızı
### Hangi insan için?
### Hangi ölçülebilir değişim?
### Neden şimdi?
## 1. Problem–Müşteri Kolu
### İlk müşteri segmentini seç
### 10–20 problem görüşmesi yap
### Mevcut çözüm ve kaybı ölç
### Karar Kapısı P1
#### Güçlü ve tekrarlanan acı → Çözüm testine geç
#### İlgi var, ödeme yok → Segment veya problem daralt
#### Acı zayıf → Yeni problem kolu aç
## 2. Çözüm–Ürün Kolu
### Tek cümlelik değer önerisi
### En ucuz doğrulama biçimini seç
#### Manuel hizmet
#### Concierge MVP
#### Tıklanabilir prototip
#### Dar teknik prototip
### Kullanım testi
### Karar Kapısı Ü1
#### Kullanıcı sonucu alıyor → Ücretli pilot
#### Kullanıyor ama sonuç yok → Çözümü değiştir
#### Kullanmıyor → Onboarding veya problem uyumunu yeniden incele
## 3. Dağıtım–Satış Kolu
### İlk 10 müşterinin bulunduğu kanal
### Mesaj ve teklif deneyi
### Satış görüşmeleri
### Karar Kapısı D1
#### Tekrarlanabilir görüşme ve dönüşüm → Kanalı ölçekle
#### Görüşme var, satış yok → Teklif veya güven sorununu çöz
#### Görüşme yok → Kanalı değiştir
## 4. Ekonomi Kolu
### Fiyat testi
### Teslim maliyeti
### Brüt marj
### Tahsilat ve nakit döngüsü
### Karar Kapısı E1
#### Pozitif birim ekonomi → Kontrollü büyüme
#### Marj zayıf → Fiyat, kapsam veya otomasyon değişikliği
#### Nakit açığı → Büyümeyi durdur, finansman planı
## 5. Operasyon–Risk Kolu
### Şirket ve sözleşmeler
### Veri ve mevzuat
### Teknik güvenilirlik
### Destek ve teslimat
### Kritik risk kapısı
#### Yönetilebilir → Pilot
#### Engelleyici → Tasarım veya pazar değişikliği
## 6. Türkiye'ye Giriş Kolu
### Yerel segment
### TL fiyatlama ve kur riski
### Yerel dağıtım
### Güven ve destek
### Mevzuat
### Giriş kararı
#### Doğrudan satış
#### Yerel partner
#### Distribütör
#### Bekle
## 7. Haftalık Yürütme
### Bu haftanın tek ana varsayımı
### En fazla üç kritik hareket
### Cuma kanıt incelemesi
### Devam / Pivot / Durdur / Bekle
</script>
</div>

!!! info "Haritayı kullanma şekli"
    Dalları aynı anda bitirmeye çalışma. En büyük riski taşıyan varsayımı seç; o varsayımı test eden yolu **aktif dal** yap. Diğer dallar görünür kalır ama bekler.

## 2. Karar kapılı ana akış

```mermaid
flowchart TD
    S[Başlangıç: Startup tezi] --> P{Problem güçlü ve sık mı?}
    P -->|Hayır| P0[Segmenti veya problemi değiştir]
    P0 --> P
    P -->|Evet| V{Müşteri çözümü deniyor mu?}
    V -->|Hayır| V0[Değer önerisi / çözüm biçimi / onboarding değiştir]
    V0 --> V
    V -->|Evet| W{Ödeme veya ciddi taahhüt var mı?}
    W -->|Hayır| W0[Fiyat, güven, teklif veya müşteri segmentini test et]
    W0 --> W
    W -->|Evet| R{Tekrarlanabilir dağıtım kanalı var mı?}
    R -->|Hayır| R0[Dar kanal deneyleri: outbound, partner, topluluk, içerik]
    R0 --> R
    R -->|Evet| U{Birim ekonomi ve operasyon taşınabilir mi?}
    U -->|Hayır| U0[Kapsamı daralt, fiyatı artır, otomasyonu geliştir]
    U0 --> U
    U -->|Evet| G[Kontrollü büyüme]
    G --> T{Türkiye pazarı için yerel uyum gerekli mi?}
    T -->|Evet| TL[Yerel fiyatlama + dağıtım + mevzuat pilotu]
    T -->|Hayır| GL[Mevcut modeli ölçekle]
```

## 3. Paralel ama bağımlı iş akışları

=== "Keşif"

    - [ ] İlk ödeme ihtimali en yüksek segmenti seç
    - [ ] Görüşme sorularını hazırla
    - [ ] Problem sıklığı, şiddeti ve bugünkü maliyetini ölç
    - [ ] Karar eşiğini görüşmeler başlamadan yaz

=== "Ürün"

    - [ ] Sonucu sağlayan en küçük çözümü tanımla
    - [ ] Kod yazmadan test edilebilen kısmı ayır
    - [ ] Kullanıcı davranışı ve sonuç metriğini belirle
    - [ ] Başarısız deney sonrası hangi bileşenin değişeceğini yaz

=== "Satış"

    - [ ] İlk 100 müşteri adayının nerede olduğunu belirle
    - [ ] Tek bir kanal ve tek bir teklif ile başla
    - [ ] Görüşme → pilot → ödeme dönüşümünü izle
    - [ ] İtirazları kategori hâlinde kaydet

=== "Operasyon"

    - [ ] Pilot teslimatının gerçek maliyetini çıkar
    - [ ] Manuel iş yükünü ve darboğazı kaydet
    - [ ] Hukuk, veri, tahsilat ve destek risklerini sırala
    - [ ] Ölçeklemeden önce kırılacak ilk noktayı tahmin et

## 4. Aktif dal tablosu

GPT, gerçek planı işlerken bu tabloyu somut bilgilerle doldurmalıdır.

| Alan | Aktif cevap |
|---|---|
| Bu haftanın ana varsayımı | _Henüz işlenmedi_ |
| Neden en riskli varsayım bu? | _Henüz işlenmedi_ |
| En fazla üç hareket | _Henüz işlenmedi_ |
| Beklenen somut kanıt | _Henüz işlenmedi_ |
| Başarı eşiği | _Henüz işlenmedi_ |
| Başarısızlık eşiği | _Henüz işlenmedi_ |
| Sonraki açılacak dal | _Henüz işlenmedi_ |
| Dondurulan işler | _Henüz işlenmedi_ |

## 5. Planın kalite kontrolü

Bir hareket aşağıdakilerden hiçbirini değiştirmiyorsa muhtemelen gereksizdir:

- Müşteri hakkındaki kesinlik
- Problemin şiddeti hakkındaki kesinlik
- Çözümün işe yaradığına dair kanıt
- Ödeme isteğine dair kanıt
- Dağıtım kanalına dair kanıt
- Birim ekonomi veya operasyon kapasitesi
- Kritik risklerden birinin azalması

!!! danger "Sahte ilerleme sinyalleri"
    İsim bulmak, logo tasarlamak, genel pazar büyüklüğü okumak, kapsamı sürekli büyütmek ve ürün tamamlanmadan aylarca kod yazmak; bir karar kapısını açmıyorsa planın merkezine alınmamalıdır.
