# ChatGPT Repo Commit Promptu

Aşağıdaki komutu, repoya aktarmak istediğin startup konuşmasının sonuna yapıştır.

## Kısa prompt

> GitHub’daki `lightlessy/faruk-knowledge-base` reposunu ve özellikle `mkdocs.yml`, `docs/startup/`, `docs/sablonlar/startup-karar-agaci.md` ile `docs/kullanim/gpt-commit-protokolu.md` dosyalarını önce incele. Bu konuşmada startup için ürettiğimiz planın hiçbir somut bulgusunu, sayısını, kaynağını, gerekçesini, karşı argümanını, varsayımını veya önemli nüansını kaybetmeden cilala ve repoya işle. Planı kronolojik bir yapılacaklar listesi olarak değil; **kuzey yıldızı → kanıtlar/bilinmeyenler → kritik varsayımlar → karar kapıları → farklı sonuçlarda açılan dallar → aktif dal → dondurulan dallar → bu haftanın en fazla üç kritik hareketi** biçiminde ağaçlandır. Ana sayfada hem Mermaid karar akışı hem de açılıp kapanabilen Markmap oluştur. Her hareket için test edilen varsayım, somut çıktı, başarı/başarısızlık eşiği, sahip, son tarih ve sonraki karar dalını yaz. Aynı konu varsa yeni dosya açmak yerine mevcut dosyayı güçlendir; gerekiyorsa `docs/startup/<proje-adi>/index.md` altında katmanlı sayfalar oluştur ve `mkdocs.yml` navigasyonunu güncelle. Güncelliğe bağlı iddiaları webden doğrula ve kaynaklandır. Bağlantıları ve MkDocs yapısını kontrol et; açıklayıcı bir mesajla doğrudan `main` dalına commit et. Sonunda değişen dosyaları, aktif dalı, sıradaki üç hareketi ve commit bağlantısını ver.

## İçerik koruma kuralı

“Cilalamak”, metni kısaltıp bilgi kaybetmek değildir. Model:

- Somut iddiaları, sayıları, örnekleri, karşı argümanları ve koşulları korur.
- Aynı fikrin tekrarlarını tek, güçlü bir ifadede birleştirir.
- Kanıt, varsayım, çıkarım ve kararları birbirinden ayırır.
- Çelişkileri çözer; çözemediğini açık soru olarak bırakır.
- En büyük belirsizliği taşıyan dalı aktif hâle getirir.
- Diğer işleri silmez; “bekleyen/dondurulan dallar” altında tutar.
- Güzel görünen ama karar üretmeyen sahte görevler eklemez.
- Mermaid ve Markmap haritalarını aynı mantıkla günceller.
- Repo yapısını, navigasyonu ve çalışan siteyi bozmaz.

## Beklenen startup sayfa düzeni

1. Yönetici özeti
2. Tek cümlelik startup tezi
3. Kuzey yıldızı
4. Mevcut kanıtlar ve bilinmeyenler
5. Kritik varsayımlar tablosu
6. Mermaid karar ağacı
7. İnteraktif Markmap
8. Problem, ürün, dağıtım, ekonomi, operasyon ve yerelleşme dalları
9. Aktif dal ve dondurulan dallar
10. Bu haftanın en fazla üç kritik hareketi
11. Karar ve öğrenim günlüğü
12. Kaynaklar
