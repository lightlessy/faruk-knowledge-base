# Startup Karar Ağacı Şablonu

Bu şablon, uzun bir startup konuşmasını veya raporunu **katmanlı ve dallanan saf hareket planına** dönüştürmek için kullanılır.

## 1. Tek cümlelik tez

> **[Müşteri]**, **[problem]** nedeniyle **[ölçülebilir kayıp]** yaşıyor. Biz **[çözüm mekanizması]** ile **[ölçülebilir sonuç]** sağlayacağız ve müşteriye **[kanal]** üzerinden ulaşacağız.

## 2. Kuzey yıldızı

| Alan | Cevap |
|---|---|
| Hedef insan/kurum |  |
| Değiştirilecek sonuç |  |
| Başarı metriği |  |
| Zaman ufku |  |
| Neden şimdi? |  |

## 3. Kritik varsayımlar

Varsayımları “iyi fikir” biçiminde değil, yanlışlanabilir cümle olarak yaz.

| ID | Varsayım | Risk | Kanıt | Test | Eşik | Durum |
|---|---|---:|---|---|---|---|
| P1 |  | Yüksek |  |  |  | Açık |
| Ü1 |  | Yüksek |  |  |  | Açık |
| D1 |  | Yüksek |  |  |  | Açık |
| E1 |  | Orta |  |  |  | Açık |
| O1 |  | Orta |  |  |  | Açık |

## 4. Dallanan ana harita

Aşağıdaki düğümleri gerçek startup planına göre değiştir.

```mermaid
flowchart TD
    A[Startup tezi] --> B{P1: Problem doğrulandı mı?}
    B -->|Evet| C{Ü1: Çözüm sonuç üretiyor mu?}
    B -->|Hayır| B1[Segment/problem değiştir]
    B1 --> B
    C -->|Evet| D{D1: Ödeme/dağıtım kanıtı var mı?}
    C -->|Hayır| C1[Çözüm mekanizmasını değiştir]
    C1 --> C
    D -->|Evet| E{E1: Birim ekonomi taşınabilir mi?}
    D -->|Hayır| D1[Kanaldan, tekliften veya fiyattan birini değiştir]
    D1 --> D
    E -->|Evet| F[Kontrollü büyüme]
    E -->|Hayır| E1[Kapsamı daralt / fiyatı artır / otomasyon]
    E1 --> E
```

## 5. İnteraktif Markmap kaynağı

<div class="markmap">
<script type="text/template">
# [Startup adı]
## Kuzey Yıldızı
### Hedef müşteri
### Ölçülebilir sonuç
## Problem Kolu
### Varsayım
### Test
### Başarı eşiği
### Evet → Çözüm kolu
### Hayır → Segmenti değiştir
## Çözüm Kolu
### En küçük deney
### Sonuç metriği
### Evet → Ücretli pilot
### Hayır → Mekanizmayı değiştir
## Dağıtım Kolu
### İlk kanal
### Teklif
### Dönüşüm eşiği
## Ekonomi Kolu
### Fiyat
### Brüt katkı
### Geri ödeme süresi
## Operasyon Kolu
### Teslimat
### Destek
### Riskler
## Bu Hafta
### Hareket 1
### Hareket 2
### Hareket 3
</script>
</div>

## 6. Saf hareket planı

Bir haftaya üçten fazla kritik hareket koyma.

| Öncelik | Hareket | Test edilen varsayım | Somut çıktı | Başarı eşiği | Sahip | Son tarih | Sonraki karar |
|---:|---|---|---|---|---|---|---|
| 1 |  |  |  |  |  |  |  |
| 2 |  |  |  |  |  |  |  |
| 3 |  |  |  |  |  |  |  |

## 7. Karar günlüğü

| Tarih | Yeni kanıt | Değişen varsayım | Karar | Açılan dal | Kapanan/dondurulan dal |
|---|---|---|---|---|---|
|  |  |  |  |  |  |

## 8. Son kontrol

- [ ] En riskli varsayım açıkça seçildi.
- [ ] Her hareket bir varsayımı test ediyor.
- [ ] Başarı ve başarısızlık eşikleri deneyden önce yazıldı.
- [ ] “Evet” ve “hayır” sonuçlarının açacağı dallar belli.
- [ ] Bekleyen işler ayrıca işaretlendi; aktif işlerle karışmıyor.
- [ ] Plan, mevcut kanıtlarla çelişmiyor.
- [ ] Kaynaklar ve sayılar korunuyor.
