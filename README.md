# Faruk Knowledge Base

ChatGPT tarafından güncellenen; **MkDocs Material**, Mermaid ve Markmap üzerinde çalışan kişisel startup ve karar merkezi.

## Ne sağlar?

- Uzun ChatGPT yazılarını okunabilir, aranabilir web sayfalarına dönüştürür.
- Startup planını problem, ürün, satış, ekonomi, operasyon ve Türkiye'ye giriş dallarına ayırır.
- Mermaid ile koşullu karar akışları çizer.
- Markmap ile açılıp kapanabilen interaktif zihin haritaları gösterir.
- Her güncellemenin Git geçmişini saklar.
- `main` dalına commit geldiğinde GitHub Actions siteyi otomatik yeniden yayınlar.

## Siteyi açma

Repo içinde **Settings → Pages** bölümüne girin ve **Source: GitHub Actions** seçin.

Yayın adresi:

`https://lightlessy.github.io/faruk-knowledge-base/`

Site dosyaları doğrudan elle üretilmez. `.github/workflows/deploy-mkdocs.yml` iş akışı `docs/` klasörünü MkDocs ile derleyip GitHub Pages'e gönderir.

## Ana yapı

```text
mkdocs.yml                         # Menü, tema ve site ayarları
docs/
├── index.md                       # Ana panel
├── startup/
│   ├── index.md                   # Startup çalışma sistemi
│   ├── hareket-plani.md           # Dallanan ana hareket haritası
│   └── turkiyeye-giris.md         # Yerel pazar karar ağacı
├── sablonlar/
│   └── startup-karar-agaci.md     # Yeni startup planları için şablon
├── kullanim/
│   └── gpt-commit-protokolu.md    # GPT'nin uyacağı çalışma standardı
└── assets/stylesheets/extra.css   # Harita ve arayüz stilleri
```

## Yeni startup planı ekleme

Kök dizindeki `GPT_COMMIT_PROMPT.md` dosyasındaki kısa promptu, mevcut startup planının konuşmasına gönderin. GPT:

1. Mevcut repoyu inceler.
2. Konuşmadaki bilgileri kaybetmeden cilalar.
3. Planı varsayım ve karar kapılarıyla ağaçlandırır.
4. Mermaid ve Markmap haritalarını oluşturur.
5. MkDocs navigasyonunu günceller.
6. Değişiklikleri doğrudan `main` dalına commit eder.

## Neden Heptabase yerine bu yapı?

Heptabase güçlü bir ayrı uygulamadır; fakat repoya gömülen bir web motoru değildir. Bu repo, aynı görsel düşünme yaklaşımını açık ve taşınabilir biçimde sağlar:

- Markdown dosyaları kalıcıdır.
- Markmap interaktif zihin haritası sağlar.
- Mermaid dallanan karar ve süreç akışlarını gösterir.
- MkDocs bütününü aranabilir ve mobil uyumlu web sitesine dönüştürür.

İstenirse aynı Markdown sayfaları daha sonra Heptabase'e kart olarak da taşınabilir.
