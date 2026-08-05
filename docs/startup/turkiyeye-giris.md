# Türkiye'ye Giriş

Bu dal, startup'ın Türkiye pazarına giriş biçimini seçmek için kullanılır. Genel “Türkiye büyük pazar mı?” sorusu yerine şu soruya cevap verir:

> Belirli bir müşteri segmentine, belirli bir teklif ve dağıtım kanalıyla, sürdürülebilir ekonomi içinde girebilir miyiz?

## Giriş karar ağacı

```mermaid
flowchart TD
    A[Yabancı veya yeni iş modeli] --> B{Türkiye'de aynı problem<br/>yeterince güçlü mü?}
    B -->|Hayır| X[Girilmez veya farklı segment]
    B -->|Evet| C{Yerel ödeme isteği<br/>maliyeti karşılıyor mu?}
    C -->|Hayır| C1[Kapsam, fiyat veya segmenti değiştir]
    C1 --> C
    C -->|Evet| D{Müşteriye ulaşan<br/>tekrarlanabilir kanal var mı?}
    D -->|Hayır| D1[Partner / outbound / topluluk / distribütör pilotu]
    D1 --> D
    D -->|Evet| E{Güven, destek ve mevzuat<br/>yerel varlık gerektiriyor mu?}
    E -->|Hayır| F[Uzaktan doğrudan satış]
    E -->|Evet| G{Hangi yerelleşme biçimi?}
    G --> H[Yerel partner]
    G --> I[Distribütör]
    G --> J[Yerel şirket ve ekip]
    H --> K[Dar ücretli pilot]
    I --> K
    J --> K
    F --> K
    K --> L{Pilot eşikleri geçti mi?}
    L -->|Evet| M[Kontrollü genişleme]
    L -->|Hayır| N[Pivot / bekle / çık]
```

## İncelenecek katmanlar

| Katman | Cevaplanacak pratik soru |
|---|---|
| Müşteri | İlk ödeme yapacak dar segment kim? |
| Problem | Bugünkü çözümün para, zaman veya risk maliyeti ne? |
| Fiyat | TL fiyatı, kur ve vergi sonrası hâlâ cazip mi? |
| Dağıtım | İlk 10 ve ilk 100 müşteriye hangi kanalla ulaşılır? |
| Güven | Yerel marka, referans, destek veya yüz yüze satış gerekiyor mu? |
| Mevzuat | Lisans, veri, tüketici, sektör ve vergi engelleri neler? |
| Operasyon | Teslimat, tahsilat ve destek kimin üzerinden yürür? |
| Ekonomi | Müşteri edinme, teslim ve destek sonrası brüt katkı pozitif mi? |

## Karar çıktısı

Her Türkiye'ye giriş analizi dört karardan **yalnızca biriyle** kapanmalıdır:

- **Girilir:** Dar segment, kanal, teklif ve pilot planı bellidir.
- **Koşullu girilir:** Tek bir kritik varsayım önce test edilmelidir.
- **Beklenir:** Potansiyel vardır; fakat zamanlama, mevzuat veya ekonomi uygun değildir.
- **Girilmez:** Ödeme isteği, dağıtım veya yerel avantaj sürdürülebilir değildir.

## Ücretli pilot standardı

!!! success "Pilot, deneme değil karar aracıdır"
    Pilotun başlangıcında süre, müşteri sayısı, fiyat, başarı metriği, operasyon maliyeti ve devam kararı yazılmalıdır.

| Alan | Değer |
|---|---|
| Hedef segment | _Doldurulacak_ |
| Teklif | _Doldurulacak_ |
| Kanal | _Doldurulacak_ |
| Pilot süresi | _Doldurulacak_ |
| Başarı metriği | _Doldurulacak_ |
| Minimum eşik | _Doldurulacak_ |
| Pilot maliyeti | _Doldurulacak_ |
| Devam kararı | _Doldurulacak_ |
