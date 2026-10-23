# Krásné náramky – vzhled e-shopu

Vlastní vzhled pro [krasnenaramky.cz](https://www.krasnenaramky.cz/) (Shoptet, šablona Step).

| Soubor | Co dělá |
| --- | --- |
| `redesign.css` | Barvy, písma a vzhled celého webu |
| `redesign.js` | Bloky úvodní stránky (texty a obrázky v `RD_CONFIG`), chat Smartsupp, náhled písma u gravírování, druhá fotka produktu po najetí myší a návrh náramku z korálků (nastavení v `KONF`) |
| `hlavicka.html` | Kód do Shoptetu: Vzhled a obsah → Editor → HTML kód → **Hlavička** |
| `zapati.html` | **Celý** obsah pole v Shoptetu: Vzhled a obsah → Editor → HTML kód → **Zápatí** (jen odkaz na `redesign.js`) |

Soubory běží přes GitHub Pages:

- https://minlost.github.io/krasnenaramky/redesign.css
- https://minlost.github.io/krasnenaramky/redesign.js

## Nasazení změny

1. Upravit `redesign.css` nebo `redesign.js`.
2. `git commit` a `git push` do větve `main`.
3. GitHub Pages změnu zveřejní asi do minuty. Prohlížeče návštěvníků drží starou verzi nejvýš 10 minut.

V administraci Shoptetu se při změně nic neupravuje.

## Návrh náramku (`/navrh-naramku/`)

- Stránka je produkt **Návrh náramku** v kategorii **Navrhnout náramek**. Jeho cena se připočte ke každému navrženému náramku. Kategorie Navrhnout náramek přesměruje rovnou na produkt.
- Korálky jsou varianty produktu, jehož adresa je v `KONF.beadProducts` (např. `['/koralky-2/']`). Produkt má jeden parametr variant (např. **Korálek**) a každá jeho hodnota je jeden korálek. Když je v `KONF.beadProducts` víc produktů (např. Kameny, Písmena), ukážou se v návrhu jako záložky s názvem produktu.
- Průměr korálku se píše do názvu varianty, např. `Ametyst (8 mm)`. Když v názvu chybí, počítá se 8 mm.
- Fotka korálku je obrázek přiřazený variantě. Čtvercové PNG s průhledným pozadím, stačí asi 300 × 300 px.
- Vyprodaný korálek nebo Návrh náramku košík odmítne.
- Do košíku jde Návrh náramku a korálky v potřebném počtu. Pořadí korálků a délka náramku se v objednávce vepíšou do poznámky pro prodejce.
- Texty, rozsah zápěstí a o kolik je náramek delší než zápěstí se mění v `KONF` v oddílu 5 souboru `redesign.js`.
