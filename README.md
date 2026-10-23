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
- Korálky jsou varianty produktů v `KONF.beadProducts`. Každý produkt je jedna záložka v návrhu (`{ name: 'Korálky 6 mm', url: '/koralek-6mm/', mm: 6 }`), první je vybraná. `mm` je průměr korálků v záložce. Produkt má jeden parametr variant (např. **Koralek**, **Písmenko**) a každá jeho hodnota je jeden korálek.
- Každá varianta musí mít přiřazenou fotku. Bez fotek Shoptet ukáže varianty jako rozbalovací seznam a návrh je nenajde.
- Když má jeden korálek jiný průměr než zbytek záložky, napiš ho do názvu varianty, např. `Ametyst (10 mm)`. Když na náramku zabere méně, než je jeho průměr (koruna, křížek), přidej to za čárku: `Zlatá koruna (10 mm, na náramku 8 mm)`. V návrhu se kreslí v plném průměru, do délky náramku se počítá jen to, co zabere.
- Fotka korálku: čtvercové PNG s průhledným pozadím, stačí asi 300 × 300 px.
- Vyprodaný korálek nebo Návrh náramku košík odmítne.
- Do košíku jde Návrh náramku a korálky v potřebném počtu. Pořadí korálků a délka náramku se v objednávce vepíšou do poznámky pro prodejce.
- Texty, rozsah zápěstí a o kolik je náramek delší než zápěstí se mění v `KONF` v oddílu 5 souboru `redesign.js`.
