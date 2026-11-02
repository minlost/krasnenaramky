# Krásné náramky – vzhled e-shopu

Vlastní vzhled pro [krasnenaramky.cz](https://www.krasnenaramky.cz/) (Shoptet, šablona Step).

| Soubor | Co dělá |
| --- | --- |
| `redesign.css` | Barvy, písma a vzhled celého webu |
| `redesign.js` | Bloky úvodní stránky (texty a obrázky v `RD_CONFIG`), chat Smartsupp, náhled písma u gravírování, druhá fotka produktu po najetí myší, návrh náramku z korálků a návrh simple náramku (nastavení v `KONF`) |
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

## Návrh simple náramku (`/navrh-simple-naramku/`)

- Stránka je kategorie **Návrh simple náramku**, podkategorie Navrhnout náramek. V menu není, odkazují na ni blok na úvodní stránce a přepínač „Z korálků / Na provázku“ nahoře v obou návrzích. Kategorie musí zůstat viditelná, jinak stránka vrátí 404.
- Zákazník si vybere jeden náramek nebo pár, barvu provázku a na každý náramek až 5 písmenek nebo čísel a až 5 korálků. Každý náramek musí mít aspoň jeden kousek.
- Cena a košík: do košíku jde produkt **Simple náramek na provázku – vlastní návrh** (199 Kč, jedno písmenko v ceně) nebo **Párové simple náramky na provázku – vlastní návrh** (299 Kč, jedno písmenko na každém náramku v ceně), k tomu **Písmenko nebo číslo navíc – simple náramek** (8 Kč) za každé další písmenko nebo číslo a vybrané 6mm korálky v jejich ceně. Ceny se mění v administraci u těchto produktů, konfigurátor si je načte sám. Produkty musí mít sklad. Jejich detail přesměruje na konfigurátor.
- Barvy provázku a písmenka se v košíku neobjevují, prodejce je najde v poznámce k objednávce, např. „Párové simple náramky: horní náramek, provázek černá: A (černé), N (černé), korálek Ametyst; spodní náramek, provázek červená: B (bílé)“.
- Písmenka a čísla se kreslí, nejsou to fotky. 6mm korálky jsou varianty produktu `/koralek-6mm/`, stejně jako v Návrhu náramku.
- Barvy provázku (název a barva v náhledu), počet kousků na náramek a texty se mění v `KONF` v oddílu 6 souboru `redesign.js`. Texty bloků na úvodní stránce jsou v `RD_CONFIG.promo` a `RD_CONFIG.promoSimple`.
