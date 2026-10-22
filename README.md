# Krásné náramky – vzhled e-shopu

Vlastní vzhled pro [krasnenaramky.cz](https://www.krasnenaramky.cz/) (Shoptet, šablona Step).

| Soubor | Co dělá |
| --- | --- |
| `redesign.css` | Barvy, písma a vzhled celého webu |
| `redesign.js` | Bloky úvodní stránky (úvodní blok, výhody, kategorie). Texty a obrázky se mění v `RD_CONFIG` na začátku souboru. |
| `hlavicka.html` | Kód do Shoptetu: Vzhled a obsah → Editor → HTML kód → **Hlavička** |
| `zapati.html` | **Celý** obsah pole v Shoptetu: Vzhled a obsah → Editor → HTML kód → **Zápatí** (chat Smartsupp, náhled písma u gravírování, druhá fotka po najetí myší a odkaz na `redesign.js`) |

Soubory běží přes GitHub Pages:

- https://minlost.github.io/krasnenaramky/redesign.css
- https://minlost.github.io/krasnenaramky/redesign.js

## Nasazení změny

1. Upravit `redesign.css` nebo `redesign.js`.
2. `git commit` a `git push` do větve `main`.
3. GitHub Pages změnu zveřejní asi do minuty. Prohlížeče návštěvníků drží starou verzi nejvýš 10 minut.

V administraci Shoptetu se při změně nic neupravuje.
