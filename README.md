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
- Nabízejí se všechny korálky z kategorie **Korálky** (`KONF.beads` je prázdné). Její podkategorie (např. Kameny, Písmena) se v návrhu ukážou jako záložky. Korálek z kategorie se ukáže, jen když je ve výpisu (skladem nebo objednatelný), vyprodaný se v návrhu neukáže.
- Když se do `KONF.beads` vypíšou adresy korálků (např. `['/koralek-01/']`), nabídnou se jen tyto.
- Průměr korálku se píše do názvu, např. `Ametyst (8 mm)`. Když v názvu chybí, počítá se 8 mm.
- Korálek nesmí mít varianty. Vyprodaný korálek nebo Návrh náramku košík odmítne.
- Fotka korálku: čtvercové PNG s průhledným pozadím, stačí asi 300 × 300 px.
- Do košíku jde Návrh náramku a korálky v potřebném počtu. Pořadí korálků a délka náramku se v objednávce vepíšou do poznámky pro prodejce.
- Texty, rozsah zápěstí a o kolik je náramek delší než zápěstí se mění v `KONF` v oddílu 5 souboru `redesign.js`.
