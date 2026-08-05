# Dağınık sohbetlerden yaşayan bir bilgi sistemine

Bu site, uzun ChatGPT cevaplarını kaybolan sohbet mesajları olmaktan çıkarıp **okunabilir, aranabilir ve güncellenebilir karar dosyalarına** dönüştürmek için kuruldu.

> Ana ilke: Her yeni mesaj yeni bir belge üretmek zorunda değildir. Aynı konu varsa mevcut sayfa güçlendirilir; tekrarlar ayıklanır, yeni bulgular doğru yere eklenir.

## Sistem nasıl çalışıyor?

1. Bir konu ChatGPT ile araştırılır veya geliştirilir.
2. Model repodaki mevcut yapıyı inceler.
3. İçeriği uygun klasöre yerleştirir.
4. Ham sohbet dilini korumak yerine metni okunabilir bir dosya hâline getirir.
5. Menü dosyasını günceller ve değişiklikleri GitHub'a commit eder.
6. GitHub Pages birkaç dakika içinde bu web görünümünü yeniler.

## Bir yazının ideal yapısı

Her uzun analiz aynı kalıba zorlanmaz; yine de çoğu güçlü dosyada şu katmanlar bulunur:

- **30 saniyelik sonuç:** Konunun özeti ve ana karar.
- **Ana soru:** Tam olarak neyi çözmeye çalışıyoruz?
- **Bağlam:** Neden önemli, hangi kısıtlar var?
- **Harita:** Aktörler, değişkenler ve ilişkiler.
- **Derin analiz:** Kanıt, karşılaştırma ve neden-sonuç zinciri.
- **Seçenekler:** Alternatifler, maliyetler ve trade-off'lar.
- **Karar:** Şu anki en güçlü sonuç.
- **Eylem listesi:** Bundan sonra ne yapılacak?
- **Kaynaklar:** İddiaların dayanakları.

## Şu anki ana alanlar

| Alan | Amaç | Durum |
|---|---|---|
| Startup | İş fikirleri, süreç problemleri ve pazar girişleri | Başlatıldı |
| Türkiye'ye giriş | Bir ürün veya şirketin Türkiye pazarına giriş dosyaları | Klasör hazır |
| Kariyer | İlan, beceri ve başvuru analizleri | Sonraki aşama |
| Yapay zekâ | Öğrenme yolu, entegrasyon ve ürün fikirleri | Sonraki aşama |
| Finans | Portföy ve piyasa araştırmaları | Sonraki aşama |
| Matematik | Ders ve çalışma haritaları | Sonraki aşama |

## Kullanım kuralı

Repo, cevap çöplüğüne dönüşmemeli. Yeni bir yazı eklenirken şu soru sorulmalı:

> Bu içerik bağımsız bir karar dosyası mı, yoksa mevcut bir dosyanın daha iyi bir sürümü mü?

İkinci durumdaysa mevcut dosya güncellenir. Böylece bilgi merkezi zamanla büyürken dağılmaz.
