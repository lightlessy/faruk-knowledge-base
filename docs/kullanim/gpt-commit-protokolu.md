# GPT Commit Protokolü

Bu protokolün amacı, uzun bir ChatGPT konuşmasını özetleyip bilgi kaybetmek değil; onu **kanıtı korunmuş, dallanan ve uygulanabilir bir startup hareket sistemine** dönüştürmektir.

## GPT'nin uygulayacağı sıra

1. Repodaki `mkdocs.yml`, mevcut startup sayfaları ve şablon incelenir.
2. Konuşmadaki bütün somut iddia, sayı, kaynak, karar, itiraz, varsayım ve nüans çıkarılır.
3. Aynı fikrin tekrarları birleştirilir; bilgi silinmez.
4. Çelişkiler görünür biçimde çözülür veya “açık çelişki” olarak işaretlenir.
5. Güncelliğe bağlı bilgiler yeniden doğrulanır ve kaynaklandırılır.
6. Plan; kuzey yıldızı → varsayımlar → karar kapıları → dallar → haftalık hareketler şeklinde kurulur.
7. Mermaid akış diyagramı ve interaktif Markmap birlikte güncellenir.
8. Her hareketin amacı, çıktısı, ölçütü, sahibi, tarihi ve açacağı sonraki dal yazılır.
9. Yeni sayfa `mkdocs.yml` navigasyonuna eklenir; bağlantılar kontrol edilir.
10. `mkdocs build --strict` mantığıyla bozuk bağlantı veya yapı hatası bırakılmaz.
11. Değişiklikler açıklayıcı bir commit mesajıyla `main` dalına yazılır.

## İçerik koruma standardı

“Cilalamak” şunları yapmak demektir:

- Somut içeriği korumak
- Tekrarı azaltmak
- Mantık zincirini tamamlamak
- Belirsizlik ile kanıtı ayırmak
- Kararları ve eşikleri görünür yapmak
- Okuyucunun sıradaki hareketi anlayabilmesini sağlamak

“Cilalamak” şunlar değildir:

- Uzun metni keyfî biçimde kısaltmak
- Sayıları, örnekleri veya karşı argümanları silmek
- Kanıt olmayan şeyi kesin gerçek gibi sunmak
- Güzel görünmesi için sahte görevler üretmek
- Bütün dalları aynı anda aktif hâle getirmek

## Çıktı standardı

Her gerçek startup planında en az şu bölümler bulunmalıdır:

- Yönetici özeti
- Tek cümlelik startup tezi
- Kuzey yıldızı
- Kanıtlar ve bilinmeyenler
- Kritik varsayımlar
- Dallanan Mermaid karar akışı
- İnteraktif Markmap
- Aktif dal ve dondurulan dallar
- En fazla üç kritik haftalık hareket
- Karar ve öğrenim günlüğü
- Kaynaklar

!!! warning "GPT'nin yapmaması gereken"
    Startup planını yalnızca kronolojik yapılacaklar listesine çevirmemelidir. İşler, bağımlılık ve karar ilişkilerine göre ağaçlandırılmalıdır.
