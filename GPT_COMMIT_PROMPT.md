# ChatGPT Repo Commit Promptu

Aşağıdaki kısa komutu, repoya eklemek istediğin eski veya yeni ChatGPT yazısının sonuna yapıştır:

> `lightlessy/faruk-knowledge-base` reposunu önce incele. Bu konuşmadaki ilgili yazıların hiçbir somut bulgusunu, gerekçesini, sayısını, kaynağını veya önemli nüansını kaybetmeden; tekrarları temizleyip çelişkileri çözerek, güncelliğe bağlı iddiaları doğrulayarak ve eksik bağlantıları tamamlayarak cilalı bir karar dosyasına dönüştür. İçeriği mevcut yapıda en uygun dosyaya ekle; aynı konu varsa yeni dosya açmak yerine onu güçlendir. Startup/Türkiye'ye giriş konusundaysa `startup/turkiyeye-giris/_SABLON.md` standardını kullan. Gerekli Markdown dosyalarını ve `content/index.json` menüsünü güncelle, bağlantıları kontrol et ve açıklayıcı bir commit mesajıyla doğrudan `main` dalına commit et. Sonunda değişen dosyaları ve commit bağlantısını yaz.

## İçerik koruma kuralı

“Cilalamak”, metni kısaltıp bilgi kaybetmek değildir. Model:

- Somut iddiaları, sayıları, örnekleri, karşı argümanları ve koşulları korur.
- Aynı fikrin tekrarlarını birleştirir.
- Zayıf veya süslü cümleleri daha açık hâle getirir.
- Güncel bilgi gerektiren noktaları araştırıp kaynaklandırır.
- Sonucu, karar gerekçesini ve sonraki adımı görünür yapar.
- Repo yapısını, siteyi ve mevcut bağlantıları bozmaz.
