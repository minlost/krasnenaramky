/* =========================================================
   Krásné náramky – skripty webu
   Načítá se z GitHub Pages, odkaz je v zapati.html
   1. Bloky úvodní stránky, Navrhnout náramek v menu a Black Friday (texty a obrázky v RD_CONFIG)
   2. Chat Smartsupp
   3. Náhled písma u gravírování
   4. Druhá fotka produktu po najetí myší
   5. Návrh náramku z korálků (nastavení v KONF)
   6. Návrh simple náramku na provázku (nastavení v KONF)
   ========================================================= */

/* ---------- 1. Bloky úvodní stránky ---------- */
(function () {
    var RD_CONFIG = {
        hero: {
            eyebrow: 'Ruční výroba v České republice',
            lead: 'Náramky z přírodních kamenů, párové náramky i šperky se jménem. Dárek, který má svůj příběh.',
            button: { text: 'Vybrat náramek', url: '/naramky/' },
            link: { text: 'Gravírování', url: '/personalizovane-sperky/' }
        },
        benefits: [
            { icon: 'truck', title: 'Rychlé doručení', text: 'Zásilkovna i na adresu' },
            { icon: 'gift', title: 'Doprava a dárek zdarma', text: 'u objednávek nad 1 000 Kč' },
            { icon: 'box', title: 'Dárkové balení', text: 'ke každému šperku' },
            { icon: 'heart', title: 'Ruční výroba', text: 'vyrobeno v České republice' }
        ],
        categoriesTitle: 'Vyberte si kategorii',
        categories: [
            // zoom přiblíží fotku, aby v kruhu nebyly vidět bílé okraje, které Shoptet doplnil
            { title: 'Náramky', url: '/naramky/', zoom: 1.12, image: 'https://cdn.myshoptet.com/usr/www.krasnenaramky.cz/user/shop/detail/3153-1_letni-laska-set.jpg?ff=1&x=423&y=318&q=85&ts=67438357&sg=2175fb9d' },
            { title: 'Pro páry', url: '/naramky-pro-pary/', zoom: 1.12, image: 'https://cdn.myshoptet.com/usr/www.krasnenaramky.cz/user/shop/detail/3068_naramky-pro-pary-inicialy-stribrne.jpg?ff=1&x=423&y=318&q=85&ts=67438357&sg=2175fb9d' },
            { title: 'Gravírování', url: '/personalizovane-sperky/', image: 'https://cdn.myshoptet.com/usr/www.krasnenaramky.cz/user/shop/detail/1938-1_naramek-obruc-s-vlastnim-textem-zlata-rosegold-stribrna-cerna.png?ff=1&x=423&y=318&q=85&ts=67438357&sg=2175fb9d' },
            { title: 'Náhrdelníky', url: '/nahrdelniky/', image: 'https://cdn.myshoptet.com/usr/www.krasnenaramky.cz/user/shop/detail/2217_nahrdelnik-ametyst.png?ff=1&x=423&y=318&q=85&ts=67438357&sg=2175fb9d' },
            { title: 'Na provázku', url: '/naramky-simple/', image: 'https://cdn.myshoptet.com/usr/www.krasnenaramky.cz/user/shop/detail/3046_naramky-pro-pary-simple-lava-a-howlit--3-mm-.jpg?ff=1&x=423&y=318&q=85&ts=67438357&sg=2175fb9d' },
            { title: 'Zvěrokruh', url: '/magicky-zverokruh/', image: 'https://cdn.myshoptet.com/usr/www.krasnenaramky.cz/user/shop/detail/255-2_naramek-se-znamenim-zverokruhu-cerny-premium--zlata-.jpg?ff=1&x=423&y=318&q=85&ts=67438357&sg=2175fb9d' }
        ],
        // dva bloky „Navrhněte si…" pod kategoriemi: náramek z korálků a náramek na provázku
        promo: {
            eyebrow: 'Novinka',
            title: 'Náramek z korálků podle vás',
            lead: 'Přes 30 druhů korálků, poskládáte si ho přesně podle sebe.',
            button: { text: 'Navrhnout z korálků', url: '/navrh-naramku/' },
            // kategorie v hlavním menu, která se přesune na druhé místo a zvýrazní
            menuItem: 'menu-item-1145',
            // kruh korálků: malé fotky variant produktu Koralek, dokola se opakují
            beadCount: 16,
            beadUrl: 'https://cdn.myshoptet.com/usr/www.krasnenaramky.cz/user/shop/related/{file}?ff=1&x=100&y=100&q=85&sg=8dda0505',
            beads: [
                '3410-72_ametyst--8-mm.png',
                '3410-90_ruzenin--8-mm.png',
                '3410-76_howlit--8-mm.png',
                '3410-79_lapis-lazuli--8-mm.png',
                '3410-97_apatit--do-modra-8-mm.png',
                '3410-101_jadeit-bily--8-mm.png',
                '3410-89_tygri-oko--8-mm.png',
                '3410-93_citrin--8-mm.png',
                '3410-92_cervene-tygri-oko--8-mm.png',
                '3410-88_onyx--8-mm.png',
                '3410-95_praskany-kristal---bily--8-mm.png'
            ]
        },
        // obrázek páru náramků kreslí oddíl 6
        promoSimple: {
            eyebrow: 'Novinka',
            title: 'Náramek na provázku se jménem',
            lead: 'Barva provázku, písmenka, čísla i korálky. Jeden náramek nebo pár.',
            button: { text: 'Navrhnout na provázku', url: '/navrh-simple-naramku/' }
        },
        // Black Friday: lišta nad hlavičkou na všech stránkách a banner nahoře na úvodní stránce.
        // Ukáže se jen od–do (včetně, podle data v počítači návštěvníka). Slevu samotnou počítá Shoptet:
        // Marketing → Slevy X+Y → „Black Friday 2026 – 2+1 zdarma“; data tam a tady musí sedět.
        blackFriday: {
            from: '2026-11-03',
            until: '2026-11-30',
            bar: { title: 'Black Friday', text: '2 + 1 zdarma', more: 'nejlevnější ze tří šperků máte od nás, jen do 30. 11.', cta: 'Vybrat' },
            eyebrow: 'Black Friday · jen do 30. 11.',
            title: '2 + 1',
            titleAccent: 'zdarma',
            lead: 'Vyberte si tři šperky a ten nejlevnější máte od nás zdarma. Sleva se odečte sama v košíku.',
            note: 'Platí na náramky, náhrdelníky i šperky se jménem. Neplatí na dárkové kartičky a náramky z návrhu.',
            button: { text: 'Vybrat šperky', url: '/naramky/' },
            images: [
                'https://cdn.myshoptet.com/usr/www.krasnenaramky.cz/user/shop/detail/3153-1_letni-laska-set.jpg?ff=1&x=423&y=318&q=85&ts=67438357&sg=2175fb9d',
                'https://cdn.myshoptet.com/usr/www.krasnenaramky.cz/user/shop/detail/2217_nahrdelnik-ametyst.png?ff=1&x=423&y=318&q=85&ts=67438357&sg=2175fb9d',
                'https://cdn.myshoptet.com/usr/www.krasnenaramky.cz/user/shop/detail/3068_naramky-pro-pary-inicialy-stribrne.jpg?ff=1&x=423&y=318&q=85&ts=67438357&sg=2175fb9d'
            ]
        }
    };

    var ICONS = {
        truck: '<path d="M2.5 6.5h11v9h-11zM13.5 9.5h4l3 3.2v2.8h-7"/><circle cx="6.5" cy="17.5" r="1.8"/><circle cx="16.5" cy="17.5" r="1.8"/>',
        gift: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M5 12v8h14v-8M12 8v12M12 8C10.5 5 7 4.5 7 6.5S10 8 12 8zm0 0c1.5-3 5-3.5 5-1.5S14 8 12 8z"/>',
        box: '<path d="M3.5 7.5 12 3l8.5 4.5v9L12 21l-8.5-4.5zM3.5 7.5 12 12l8.5-4.5M12 12v9"/>',
        heart: '<path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.2a4.3 4.3 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z"/>'
    };

    function esc(s) {
        return String(s).replace(/[&<>"]/g, function (c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
        });
    }

    function icon(name) {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICONS[name] + '</svg>';
    }

    function buildHomepage() {
        var content = document.getElementById('content');
        var carouselImg = document.querySelector('#carousel .item img');
        if (!content || !carouselImg) {
            document.documentElement.classList.remove('rd-js');
            return;
        }

        var h = RD_CONFIG.hero;
        var hero = document.createElement('section');
        hero.className = 'rd-hero';
        hero.innerHTML =
            '<div class="rd-wrap"><div class="rd-hero__inner">' +
                '<div class="rd-hero__text">' +
                    '<p class="rd-eyebrow">' + esc(h.eyebrow) + '</p>' +
                    '<p class="rd-hero__lead">' + esc(h.lead) + '</p>' +
                    '<div class="rd-hero__actions">' +
                        '<a class="btn btn-conversion" href="' + esc(h.button.url) + '">' + esc(h.button.text) + '</a>' +
                        '<a class="rd-link" href="' + esc(h.link.url) + '">' + esc(h.link.text) + ' →</a>' +
                    '</div>' +
                '</div>' +
                '<div class="rd-hero__media"><img src="' + esc(carouselImg.currentSrc || carouselImg.src) + '" alt="' + esc(carouselImg.alt) + '" fetchpriority="high"></div>' +
            '</div></div>';

        // nadpis H1 (dosud skrytý pro čtečky) se přesune do hero a zviditelní
        var h1 = content.querySelector(':scope > h1');
        if (h1) {
            h1.classList.remove('sr-only');
            h1.classList.add('rd-hero__title');
            hero.querySelector('.rd-hero__text').insertBefore(h1, hero.querySelector('.rd-hero__lead'));
        }

        var benefits = document.createElement('section');
        benefits.className = 'rd-benefits';
        benefits.innerHTML = '<div class="rd-wrap"><ul>' + RD_CONFIG.benefits.map(function (b) {
            return '<li>' + icon(b.icon) + '<span><strong>' + esc(b.title) + '</strong><small>' + esc(b.text) + '</small></span></li>';
        }).join('') + '</ul></div>';

        var cats = document.createElement('section');
        cats.className = 'rd-cats';
        cats.innerHTML = '<div class="rd-wrap"><div class="rd-section-head"><h2>' + esc(RD_CONFIG.categoriesTitle) + '</h2></div><div class="rd-cats__grid">' +
            RD_CONFIG.categories.map(function (c) {
                return '<a class="rd-cat" href="' + esc(c.url) + '"><span class="rd-cat__img"><img src="' + esc(c.image) + '" alt="" loading="lazy"' + (c.zoom ? ' style="--rd-zoom:' + c.zoom + '"' : '') + '></span><span class="rd-cat__label">' + esc(c.title) + '</span></a>';
            }).join('') + '</div></div>';

        var p = RD_CONFIG.promo;
        var ring = '';
        for (var i = 0; i < p.beadCount; i++) {
            var angle = i / p.beadCount * 2 * Math.PI - Math.PI / 2;
            ring += '<img src="' + esc(p.beadUrl.replace('{file}', p.beads[i % p.beads.length])) + '" alt="" loading="lazy" style="left:' +
                (50 + 40 * Math.cos(angle)).toFixed(2) + '%;top:' + (50 + 40 * Math.sin(angle)).toFixed(2) + '%;width:' + (2 * Math.PI * 40 / p.beadCount).toFixed(2) + '%">';
        }
        // celý blok je odkaz; obrázek: kruh korálků, u náramku na provázku ho dokreslí oddíl 6
        function promoCard(c, art, mod) {
            return '<a class="rd-promo__card" href="' + esc(c.button.url) + '">' +
                '<span class="rd-promo__art rd-promo__art--' + mod + '" aria-hidden="true">' + art + '</span>' +
                '<span class="rd-promo__text">' +
                    '<span class="rd-eyebrow">' + esc(c.eyebrow) + '</span>' +
                    '<h2>' + esc(c.title) + '</h2>' +
                    '<span class="rd-promo__lead">' + esc(c.lead) + '</span>' +
                    '<span class="rd-promo__cta">' + esc(c.button.text) + ' →</span>' +
                '</span>' +
            '</a>';
        }
        var promo = document.createElement('section');
        promo.className = 'rd-promo';
        promo.innerHTML = '<div class="rd-wrap"><div class="rd-promo__grid">' +
            promoCard(p, ring, 'beads') + promoCard(RD_CONFIG.promoSimple, '', 'simple') +
        '</div></div>';

        var anchor = content.querySelector('.banners-row') || content.firstChild;
        content.insertBefore(hero, anchor);
        content.insertBefore(benefits, anchor);
        content.insertBefore(cats, anchor);
        content.insertBefore(promo, anchor);

        // úvodní text bez obsahu (jen nadpis a obrázek s ikonkami) se schová
        var welcome = document.querySelector('.welcome');
        if (welcome) {
            var clone = welcome.cloneNode(true);
            Array.prototype.forEach.call(clone.querySelectorAll('.h1, img'), function (el) { el.remove(); });
            if (!clone.textContent.replace(/ /g, ' ').trim()) {
                welcome.closest('.welcome-wrapper').style.display = 'none';
            }
        }
    }

    // Navrhnout náramek na druhé místo v menu (v hlavní liště i v „Více"), aby na počítači nespadl do „Více";
    // které položky se do lišty vejdou, přepočítá skript Shoptetu.
    // Podkategorie Korálky do návrhu je jen pro konfigurátor, z menu se odebere i se šipkou.
    function promoteMenuItem() {
        var moved = false;
        Array.prototype.forEach.call(document.querySelectorAll('ul.menu-level-1'), function (ul) {
            var li = ul.querySelector(':scope > li.' + RD_CONFIG.promo.menuItem);
            if (!li) return;
            li.classList.add('rd-menu-promo');
            li.classList.remove('ext');
            Array.prototype.forEach.call(li.querySelectorAll('.menu-level-2, .submenu-arrow'), function (el) { el.remove(); });
            var link = li.querySelector(':scope > a');
            if (link) link.removeAttribute('aria-haspopup');
            if (ul.children[1] && ul.children[1] !== li) {
                ul.insertBefore(li, ul.children[1]);
                moved = true;
            }
        });
        if (moved && window.shoptet && shoptet.menu && shoptet.menu.splitMenu) {
            shoptet.menu.splitMenu();
        }
    }

    // Black Friday (RD_CONFIG.blackFriday): lišta nad hlavičkou všude, na úvodní stránce banner nad hero
    function buildBlackFriday() {
        var bf = RD_CONFIG.blackFriday;
        var now = new Date();
        var today = now.getFullYear() + '-' + ('0' + (now.getMonth() + 1)).slice(-2) + '-' + ('0' + now.getDate()).slice(-2);
        if (today < bf.from || today > bf.until) return;

        var header = document.getElementById('header');
        var body = document.body.classList;
        // v košíku lišta zůstane, v dalších krocích objednávky by jen odváděla pryč
        if (header && !(body.contains('ordering-process') && !body.contains('in-kosik'))) {
            var bar = document.createElement('a');
            bar.className = 'rd-bf-bar';
            bar.href = bf.button.url;
            bar.innerHTML = '<strong>' + esc(bf.bar.title) + '</strong> <span class="rd-bf-bar__text">' + esc(bf.bar.text) + '</span>' +
                '<span class="rd-bf-bar__more">: ' + esc(bf.bar.more) + '</span> <span class="rd-bf-bar__cta">' + esc(bf.bar.cta) + ' →</span>';
            header.parentNode.insertBefore(bar, header);
        }

        var content = document.getElementById('content');
        if (!content || !body.contains('in-index')) return;
        // tři šperky, třetí (nejlevnější) s visačkou „zdarma"
        var art = bf.images.map(function (src, i) {
            return (i ? '<span class="rd-bf__plus">+</span>' : '') +
                '<span class="rd-bf__item' + (i === bf.images.length - 1 ? ' rd-bf__item--free' : '') + '"><img src="' + esc(src) + '" alt="" loading="lazy">' +
                (i === bf.images.length - 1 ? '<span class="rd-bf__badge">' + esc(bf.titleAccent) + '</span>' : '') + '</span>';
        }).join('');
        var banner = document.createElement('section');
        banner.className = 'rd-bf';
        banner.innerHTML = '<div class="rd-wrap"><a class="rd-bf__card" href="' + esc(bf.button.url) + '">' +
            '<span class="rd-bf__text">' +
                '<span class="rd-eyebrow">' + esc(bf.eyebrow) + '</span>' +
                '<h2 class="rd-bf__title">' + esc(bf.title) + ' <em>' + esc(bf.titleAccent) + '</em></h2>' +
                '<span class="rd-bf__lead">' + esc(bf.lead) + '</span>' +
                '<span class="rd-bf__cta">' + esc(bf.button.text) + ' →</span>' +
                '<small class="rd-bf__note">' + esc(bf.note) + '</small>' +
            '</span>' +
            '<span class="rd-bf__art" aria-hidden="true">' + art + '</span>' +
        '</a></div>';
        content.insertBefore(banner, content.firstChild);
    }

    try {
        promoteMenuItem();
        if (document.body.classList.contains('in-index')) {
            buildHomepage();
        }
    } catch (e) {
        document.documentElement.classList.remove('rd-js');
    }
    // chyba v banneru nesmí zastavit zbytek souboru (chat, gravírování, návrhy)
    try {
        buildBlackFriday();
    } catch (e) {}
})();

/* ---------- 2. Chat Smartsupp ---------- */
window._smartsupp = window._smartsupp || {};
window._smartsupp.key = '6226ca91cac5fb10e63ca9b88e9ff6c5ec8ee78a';
window.smartsupp || (function (d) {
    var s, c, o = window.smartsupp = function () { o._.push(arguments); }; o._ = [];
    s = d.getElementsByTagName('script')[0]; c = d.createElement('script');
    c.type = 'text/javascript'; c.charset = 'utf-8'; c.async = true;
    c.src = 'https://www.smartsuppchat.com/loader.js?'; s.parentNode.insertBefore(c, s);
})(document);

/* ---------- 3. Náhled písma u gravírování (parametr 171 „Výběr písma") ---------- */
(function () {
    var FONT_TABLE = {
        1257: 'Segoe Script',
        1260: 'Open Sans',
        1263: 'Charmonman',
        1: 'Arial',
        1479: 'Fuggles'
    };

    function arrayFind(array, callback) {
        for (var i = 0; i < array.length; i++) {
            if (callback(array[i])) {
                return array[i];
            }
        }
        return undefined;
    }

    function changeFontFamily() {
        textArea.style.fontFamily = [FONT_TABLE[this.value]] || textArea.style.fontFamily;
    }

    var textArea = null;
    var fontTypeDropdown;
    var repetitionCount = 0;

    function init() {
        textArea = document.querySelector('.dkLabNoteTextArea');

        fontTypeDropdown = arrayFind(document.getElementsByTagName('select'), function (select) {
            return select.getAttribute('data-parameter-id') === '171';
        });

        var prerequisites = fontTypeDropdown !== undefined && textArea !== null;
        if (prerequisites) {
            fontTypeDropdown.addEventListener('change', changeFontFamily);
        }

        if (!prerequisites && ++repetitionCount < 10) {
            setTimeout(init, 1000);
        }
    }

    setTimeout(init, 500);
})();

/* ---------- 4. Druhá fotka produktu po najetí myší (jen na počítači) ---------- */
document.addEventListener("DOMContentLoaded", function () {
    // Kontrola, zda se skript má spustit jen na desktopu
    if (window.innerWidth <= 768) {
        return; // Zastaví vykonávání skriptu na mobilních zařízeních
    }

    // Funkce pro kontrolu existence obrázku
    function checkImageExists(url) {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(true); // Obrázek existuje
            img.onerror = () => resolve(false); // Obrázek neexistuje
            img.src = url.trim(); // Odstraníme mezery
        });
    }

    // Funkce pro analýzu URL obrázku
    function parseImageUrl(url) {
        // Odstraníme mezery
        url = url.trim();
        // Oddělíme URL od query parametrů
        let [urlWithoutQuery, queryParams] = url.split('?');
        queryParams = queryParams ? '?' + queryParams : '';

        // Regulární výraz pro extrakci částí URL
        let regex = /(.*\/\d+)(-\d+)?(_.*\.[a-zA-Z]+)$/;
        let match = urlWithoutQuery.match(regex);

        if (match) {
            let baseUrl = match[1]; // Část URL před suffixem
            let suffix = match[2] || ''; // Suffix '-1', '-2', nebo prázdný
            let restOfFilename = match[3]; // Zbytek názvu souboru (od '_')
            return {
                baseUrl: baseUrl,
                suffix: suffix,
                restOfFilename: restOfFilename,
                queryParams: queryParams
            };
        } else {
            return null;
        }
    }

    // Hlavní funkce
    const productImages = document.querySelectorAll('.product .image img[data-src]');

    productImages.forEach(async (image) => {
        const originalSrc = image.getAttribute('data-src').trim();
        const parsedUrl = parseImageUrl(originalSrc);

        if (!parsedUrl) {
            return;
        }

        const { baseUrl, suffix, restOfFilename, queryParams } = parsedUrl;

        // Vytvoříme seznam možných suffixů
        let possibleSuffixes = [];

        if (suffix === '') {
            // Pokud původní obrázek nemá suffix, zkusíme '-1' a '-2'
            possibleSuffixes.push('-1');
            possibleSuffixes.push('-2');
        } else {
            // Pokud má suffix '-1' nebo '-2', zkusíme ostatní varianty
            possibleSuffixes.push(''); // Varianta bez suffixu
            possibleSuffixes.push(suffix === '-1' ? '-2' : '-1'); // Druhý suffix
        }

        let hoverSrc = null;

        // Najdeme první dostupnou variantu, která je odlišná od původní
        for (let variantSuffix of possibleSuffixes) {
            if (variantSuffix === suffix) continue; // Přeskočíme původní suffix

            let variantUrl = baseUrl + variantSuffix + restOfFilename + queryParams;

            let exists = await checkImageExists(variantUrl);
            if (exists) {
                hoverSrc = variantUrl;
                break;
            }
        }

        if (hoverSrc) {
            image.addEventListener('mouseenter', () => {
                image.src = hoverSrc;
            });

            image.addEventListener('mouseleave', () => {
                image.src = originalSrc;
            });
        }
    });
});

/* ---------- 5. Návrh náramku z korálků ---------- */
// Stránka je produkt „Návrh náramku" v kategorii Navrhnout náramek, korálky jsou
// varianty produktů v KONF.beadProducts. Průměr korálku se čte z názvu varianty, např. „Ametyst (8 mm)".
// Složení náramku se uloží do prohlížeče a v objednávce se vepíše do poznámky pro prodejce.
(function () {
    var KONF = {
        page: { bodyClass: 'in-navrhnout-naramek', url: '/navrh-naramku/' },
        // přepínač mezi oběma návrhy nahoře na stránce
        switch: [
            { text: 'Z korálků', url: '/navrh-naramku/' },
            { text: 'Na provázku', url: '/navrh-simple-naramku/' }
        ],
        // záložky s korálky: každá je jeden produkt, korálky jsou jeho varianty; první záložka je vybraná
        // mm je průměr korálků v záložce, průměr v názvu varianty („Ametyst (10 mm)") má přednost;
        // korálek, který na náramku zabere méně, než je jeho průměr: „Zlatá koruna (10 mm, na náramku 8 mm)"
        beadProducts: [
            { name: 'Korálky 8 mm', url: '/koralek/', mm: 8 },
            { name: 'Korálky 6 mm', url: '/koralek-6mm/', mm: 6 },
            { name: 'Bílá písmenka', url: '/pismenko-bile/', mm: 7 },
            { name: 'Černá písmenka', url: '/pismenko-cerne/', mm: 7 },
            { name: 'Ozdoby', url: '/ozdroby/', mm: 8 }
        ],
        defaultBeadMm: 8,
        wrist: { min: 12, max: 24, step: 0.5, value: 16, extraCm: 2 },
        toleranceCm: 0.5, // o kolik může být hotový náramek kratší, než vychází ze zápěstí
        sizeGuideUrl: '/jak-vybrat-velikost-naramku/',
        lead: 'Vyberte si korálky a poskládejte z nich vlastní náramek. Korálek odeberete kliknutím na něj v náhledu.',
        // drobný text pod náhledem náramku
        note: 'Náhled je pouze ilustrativní. Přírodní kameny jsou každý originál, barvou i kresbou se proto mohou od fotografie mírně lišit.'
    };
    var STORAGE_KEY = 'rd:navrhy';
    var RING = 0.38; // poloměr kruhu jako podíl šířky náhledu, v CSS mu odpovídá inset: 12 %
    var MM = /\s*[(,–-]?\s*(\d+(?:[.,]\d+)?)\s*mm\s*\)?/i;
    var ON_BRACELET = /\s*,?\s*na náramku\s*(\d+(?:[.,]\d+)?)\s*mm/i;

    var data = (window.dataLayer && window.dataLayer[0] && window.dataLayer[0].shoptet) || {};

    function esc(s) {
        return String(s).replace(/[&<>"]/g, function (c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
        });
    }

    function price(n) {
        return n.toLocaleString('cs-CZ', { maximumFractionDigits: 2 }) + ' Kč';
    }

    function cm(mm) {
        return (mm / 10).toLocaleString('cs-CZ', { maximumFractionDigits: 1 }) + ' cm';
    }

    function beadCount(n) {
        return n + (n === 1 ? ' korálek' : n >= 2 && n <= 4 ? ' korálky' : ' korálků');
    }

    // přepínač Z korálků / Na provázku
    function switchNav() {
        return '<nav class="rd-konf__switch" aria-label="Druh náramku">' + KONF.switch.map(function (s) {
            return s.url === KONF.page.url
                ? '<span aria-current="page">' + esc(s.text) + '</span>'
                : '<a href="' + esc(s.url) + '">' + esc(s.text) + '</a>';
        }).join('') + '</nav>';
    }

    // návrhy ze starší verze nemají položky košíku ani korálky pro náhled, proto se zahodí
    function loadDesigns() {
        try {
            return (JSON.parse(localStorage.getItem(STORAGE_KEY)) || []).filter(function (d) {
                return d.items;
            });
        } catch (e) {
            return [];
        }
    }

    function saveDesigns(list) {
        try {
            if (list.length) {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
            } else {
                localStorage.removeItem(STORAGE_KEY);
            }
        } catch (e) { /* prohlížeč bez localStorage */ }
    }

    // v košíku zůstává tolik kusů náramků (qty), kolik je v něm kusů produktu Návrh náramku; přednost mají nejnovější
    function keepDesigns(quantityOf) {
        var designs = loadDesigns();
        if (designs.length) {
            var left = quantityOf(String(designs[0].priceId));
            for (var i = designs.length - 1; i >= 0; i--) {
                designs[i].qty = Math.min(designs[i].qty || 1, left);
                left -= designs[i].qty;
            }
            designs = designs.filter(function (d) { return d.qty > 0; });
            saveDesigns(designs);
        }
        return designs;
    }

    // položky náramku pro n kusů
    function itemsTimes(items, n) {
        return items.map(function (item) {
            return { priceId: item.priceId, amount: item.amount * n };
        });
    }

    // korálky rozmístěné po kruhu; length je délka náramku v mm, item(b, i, style) vrátí HTML jednoho korálku
    // korálek se kreslí v plném průměru (mm), na kruhu ale zabere jen len (návrhy ze starší verze len nemají)
    function ringItems(chain, length, item) {
        var scale = 2 * Math.PI * RING / length * 100; // % šířky náhledu na 1 mm
        var pos = 0;
        return chain.map(function (b, i) {
            var len = b.len || b.mm;
            var angle = (pos + len / 2) / length * 2 * Math.PI - Math.PI / 2;
            pos += len;
            return item(b, i, 'left:' + (50 + RING * 100 * Math.cos(angle)).toFixed(2) + '%;top:' + (50 + RING * 100 * Math.sin(angle)).toFixed(2) + '%;width:' + (b.mm * scale).toFixed(2) + '%');
        }).join('');
    }

    // malý kruh korálků s odkazem na náhled náramku
    function ringLink(d) {
        return '<a class="rd-navrh__ring" href="' + esc(d.url) + '" target="_blank" rel="noopener" tabindex="-1" aria-hidden="true">' + ringItems(d.beads, d.length, function (b, j, style) {
            return '<img src="' + esc(b.image) + '" alt="" style="' + style + '">';
        }) + '</a>';
    }

    // délka, počet korálků a odkaz na náhled pod názvem náramku v košíku a v rekapitulaci objednávky
    function designInfo(d) {
        return '<span class="rd-navrh__info">' +
            '<span>' + cm(d.length) + ' · ' + beadCount(d.beads.length) + '</span>' +
            '<a href="' + esc(d.url) + '" target="_blank" rel="noopener">Zobrazit náramek</a>' +
        '</span>';
    }

    function designName(designs, i) {
        return 'Návrh náramku' + (designs.length > 1 ? ' ' + (i + 1) : '');
    }

    // kolik kusů které položky košíku patří náramkům
    function usedByDesigns(designs) {
        var used = {};
        designs.forEach(function (d) {
            d.items.forEach(function (item) {
                used[item.priceId] = (used[item.priceId] || 0) + item.amount * d.qty;
            });
        });
        return used;
    }

    // cena jednoho kusu náramku: Návrh a jeho korálky; unit je cena za kus podle priceId
    function designPrice(d, unit) {
        return d.items.reduce(function (s, item) {
            return s + (unit[item.priceId] || 0) * item.amount;
        }, 0);
    }

    // „1 234,50 Kč" → 1234.5
    function parsePrice(text) {
        return parseFloat(text.replace(/[^\d,]/g, '').replace(',', '.')) || 0;
    }

    /* ---------- Data ze Shoptetu ---------- */
    function fetchDoc(url) {
        return fetch(url, { credentials: 'same-origin' }).then(function (res) {
            if (!res.ok) {
                throw new Error('Stránku ' + url + ' se nepodařilo načíst.');
            }
            return res.text();
        }).then(function (html) {
            return new DOMParser().parseFromString(html, 'text/html');
        });
    }

    function makeBead(name, priceText, priceId, image, defaultMm) {
        var len = name.match(ON_BRACELET);
        var rest = name.replace(ON_BRACELET, '');
        var mm = rest.match(MM);
        var size = mm ? parseFloat(mm[1].replace(',', '.')) : defaultMm || KONF.defaultBeadMm;
        return {
            name: name,
            label: mm ? rest.replace(MM, ' ').replace(/\s+/g, ' ').trim() : rest,
            mm: size,
            len: len ? parseFloat(len[1].replace(',', '.')) : size, // kolik korálek zabere na náramku
            price: parseFloat(priceText),
            priceId: priceId,
            image: image
        };
    }

    function isValid(b) {
        return isFinite(b.price) && b.mm > 0 && b.len > 0;
    }

    // původní fotka (zmenšené verze Shoptet doplní na 4 : 3, malý korálek by se v nich ztratil)
    function originalImage(url) {
        var ts = (url.match(/[?&]ts=([^&]+)/) || [])[1];
        return url.replace('/shop/big/', '/shop/orig/').replace(/\?.*$/, ts ? '?' + ts : '');
    }

    // varianty na detailu produktu; název varianty je „Korálek: Ametyst (8 mm)", korálek se jmenuje „Ametyst (8 mm)"
    function readVariants(doc, mm) {
        return Array.prototype.map.call(doc.querySelectorAll('#simple-variants input[name="priceId"]:not(.variant-default)'), function (input) {
            return makeBead(
                doc.getElementById(input.getAttribute('aria-labelledby')).textContent.replace(/^[^:]*:\s*/, '').trim(),
                input.getAttribute('data-customerprice'),
                input.value,
                originalImage(input.getAttribute('data-big')),
                mm
            );
        }).filter(isValid);
    }

    // každý produkt z KONF.beadProducts je jedna skupina, jeho varianty jsou korálky
    function loadGroups() {
        return Promise.all(KONF.beadProducts.map(function (p) {
            return fetchDoc(p.url).then(function (doc) {
                return { name: p.name, beads: readVariants(doc, p.mm) };
            });
        })).then(function (groups) {
            return groups.filter(function (g) {
                return g.beads.length;
            });
        });
    }

    /* ---------- Košík ---------- */
    function cartAction(action, fields) {
        var body = new URLSearchParams(fields);
        if (window.shoptet && shoptet.csrf && shoptet.csrf.enabled) {
            body.set('__csrf__', shoptet.csrf.token);
        }
        return fetch('/action/Cart/' + action + '/', {
            method: 'POST',
            credentials: 'same-origin',
            headers: { 'X-Requested-With': 'XMLHttpRequest', 'X-Shoptet-XHR': 'Shoptet_Coo7ai' },
            body: body
        }).then(function (res) {
            return res.json().catch(function () {
                throw new Error('Košík teď neodpovídá. Zkuste to prosím za chvíli znovu.');
            });
        }).then(function (json) {
            if (json.code !== 200) {
                throw new Error(String(json.message || 'Košík položku nepřijal.').replace(/<[^>]+>/g, ''));
            }
            return json.payload;
        });
    }

    // ubere položky z košíku; cart jsou řádky košíku { itemId, priceId, quantity }
    function removeItems(items, cart) {
        return items.reduce(function (prev, item) {
            return prev.then(function () {
                var line = cart.filter(function (c) {
                    return String(c.priceId) === String(item.priceId);
                })[0];
                if (!line) {
                    return;
                }
                var rest = line.quantity - item.amount;
                return (rest > 0
                    ? cartAction('setCartItemAmount', { itemId: line.itemId, priceId: line.priceId, amount: rest })
                    : cartAction('deleteCartItem', { itemId: line.itemId, priceId: line.priceId })
                ).then(function (payload) {
                    cart = payload.cartItems || cart;
                });
            });
        }, Promise.resolve());
    }

    // položky jdou do košíku po jedné; když některou košík odmítne, vložené se vrátí zpátky
    function addItems(items) {
        var added = [];
        var cart = [];
        return items.reduce(function (prev, item) {
            return prev.then(function () {
                return cartAction('addCartItem', { priceId: item.priceId, amount: item.amount }).then(function (payload) {
                    added.push(item);
                    cart = payload.cartItems;
                    return payload;
                });
            });
        }, Promise.resolve()).catch(function (err) {
            return removeItems(added, cart).catch(function () {}).then(function () {
                throw err;
            });
        });
    }

    // řádky tabulky košíku (stránka košíku i okno košíku v hlavičce)
    function readCart(table) {
        return Array.prototype.map.call(table.querySelectorAll('form.quantity-form'), function (form) {
            return {
                row: form.closest('tr'),
                itemId: form.elements.itemId.value,
                priceId: form.elements.priceId.value,
                quantity: parseFloat(form.elements.amount.value)
            };
        });
    }

    // řádek korálků koupených navíc vedle náramku: počet kusů místo +/− (mění se celým náramkem) a cena
    function lockRow(row, quantity, total) {
        var qty = row.querySelector('.quantity');
        var totalPrice = row.querySelector('.p-total .price-final');
        row.classList.add('rd-cart-locked');
        if (qty) {
            qty.insertAdjacentHTML('afterend', '<span class="rd-cart-qty">' + quantity + ' ks</span>');
        }
        if (totalPrice) {
            totalPrice.textContent = price(total);
        }
    }

    // Návrh náramku se ukáže jako náramky (řádek za každý návrh) a korálky z návrhů se skryjí
    function enhanceCart(table) {
        if (table.hasAttribute('data-rd-navrhy')) {
            return;
        }
        table.setAttribute('data-rd-navrhy', '');
        var cart = readCart(table);
        var designs = keepDesigns(function (priceId) {
            return cart.reduce(function (n, c) {
                return c.priceId === priceId ? n + c.quantity : n;
            }, 0);
        });
        if (!designs.length) {
            return;
        }

        // cena za kus je Součet řádku / počet
        var used = usedByDesigns(designs);
        var unit = {};
        var base;
        cart.forEach(function (c) {
            var total = c.row.querySelector('.p-total .price-final');
            unit[c.priceId] = total ? parsePrice(total.textContent) / c.quantity : 0;
            if (c.priceId === String(designs[0].priceId)) {
                base = c;
            } else if (used[c.priceId] >= c.quantity) {
                c.row.classList.add('rd-cart-hidden');
            } else if (used[c.priceId]) {
                // zákazník má korálky i mimo náramek, v řádku zůstanou jen ty
                lockRow(c.row, c.quantity - used[c.priceId], (c.quantity - used[c.priceId]) * unit[c.priceId]);
            }
        });

        // řádek za každý náramek; +/−, počet a křížek fungují jako u běžného produktu
        var template = base.row.cloneNode(true);
        var last = base.row;
        designs.forEach(function (d, i) {
            var row = i ? template.cloneNode(true) : base.row;
            var link = row.querySelector('.p-name .main-link');
            var qty = row.querySelector('.quantity');
            var amount = row.querySelector('input.amount');
            var unitPrice = row.querySelector('.p-price .price-final');
            var totalPrice = row.querySelector('.p-total .price-final');
            var sum = designPrice(d, unit);
            if (i) {
                last.parentNode.insertBefore(row, last.nextSibling);
                last = row;
            }
            row.setAttribute('data-rd-navrh', i);
            row.querySelector('.cart-p-image').innerHTML = ringLink(d);
            link.href = d.url;
            link.target = '_blank';
            link.textContent = designName(designs, i);
            link.insertAdjacentHTML('afterend', designInfo(d));
            if (amount) {
                amount.value = d.qty;
            }
            (qty || link.nextElementSibling).insertAdjacentHTML('afterend', '<button type="button" class="rd-navrh__remove">Odebrat náramek</button>');
            if (unitPrice) {
                unitPrice.textContent = price(sum);
            }
            if (totalPrice) {
                totalPrice.textContent = price(sum * d.qty);
            }
        });

        // změní počet kusů náramku; 0 náramek odebere
        function setQty(row, n) {
            var d = designs[+row.getAttribute('data-rd-navrh')];
            var diff = n - d.qty;
            if (!isFinite(n) || n < 0 || !diff || table.classList.contains('rd-cart-busy')) {
                row.querySelector('input.amount').value = d.qty;
                return;
            }
            var items = itemsTimes(d.items, Math.abs(diff));
            table.classList.add('rd-cart-busy');
            // při odebírání jde Návrh až nakonec, aby v košíku nezůstal Návrh bez korálků
            (diff > 0 ? addItems(items) : removeItems(items.slice(1).concat(items[0]), cart)).then(function () {
                d.qty = n;
                saveDesigns(designs.filter(function (x) { return x.qty > 0; }));
            }).catch(function (err) {
                window.alert(err.message);
            }).then(function () {
                location.reload();
            });
        }

        // události z řádků náramků Shoptet nedostane (zastaví se už při zachytávání na tabulce)
        function intercept(type, handle) {
            table.addEventListener(type, function (e) {
                var row = e.target.closest && e.target.closest('tr[data-rd-navrh]');
                if (row && handle(e, row) !== false) {
                    e.stopImmediatePropagation();
                }
            }, true);
        }
        intercept('click', function (e, row) {
            var d = designs[+row.getAttribute('data-rd-navrh')];
            var btn = e.target.closest('.increase, .decrease, .remove-item, .rd-navrh__remove');
            if (!btn) {
                return false;
            }
            e.preventDefault();
            if (btn.classList.contains('increase')) {
                setQty(row, d.qty + 1);
            } else if (btn.classList.contains('decrease')) {
                if (d.qty > 1) {
                    setQty(row, d.qty - 1);
                }
            } else {
                setQty(row, 0);
            }
        });
        intercept('change', function (e, row) {
            if (e.target.matches('input.amount')) {
                setQty(row, parseInt(e.target.value, 10));
            }
        });
        intercept('keydown', function (e) {
            if (e.key !== 'Enter') {
                return false;
            }
            e.preventDefault();
            e.target.blur();
        });
        ['mousedown', 'mouseup', 'keyup', 'input', 'focusout', 'blur', 'submit'].forEach(function (type) {
            intercept(type, function (e) {
                if (type === 'submit') {
                    e.preventDefault();
                }
            });
        });
    }

    function enhanceCarts() {
        Array.prototype.forEach.call(document.querySelectorAll('.cart-table'), enhanceCart);
    }

    /* ---------- Konfigurátor ---------- */
    function build() {
        var content = document.getElementById('content');
        var detail = content && content.querySelector('.p-detail');
        var priceIdInput = detail && detail.querySelector('#product-detail-form input[name="priceId"]');
        if (!priceIdInput) {
            document.documentElement.classList.remove('rd-js');
            return;
        }

        var product = data.product || {};
        var base = { priceId: priceIdInput.value, name: product.name || 'Návrh náramku', price: product.priceWithVat || 0 };
        var w = KONF.wrist;
        var state = { wrist: w.value, chain: [], groups: [], group: 0, minMm: Infinity, busy: false };

        // na mobilu se bloky řadí jinak (zápěstí, náhled, korálky, cena), viz CSS
        var root = document.createElement('section');
        root.className = 'rd-konf';
        root.innerHTML =
            '<header class="rd-konf__head">' +
                switchNav() +
                '<p class="rd-eyebrow">Vlastní náramek</p>' +
                '<p class="rd-konf__lead">' + esc(KONF.lead) + '</p>' +
            '</header>' +
            '<div class="rd-konf__layout">' +
                '<div class="rd-konf__side">' +
                    '<div class="rd-konf__preview">' +
                        '<div class="rd-konf__ring" role="group" aria-label="Náhled náramku">' +
                            '<div class="rd-konf__beads-on"></div>' +
                            '<p class="rd-konf__center"><strong class="rd-konf__filled"></strong><span class="rd-konf__count"></span></p>' +
                        '</div>' +
                        '<div class="rd-konf__tools">' +
                            '<button type="button" class="rd-konf__undo">Vrátit poslední</button>' +
                            '<button type="button" class="rd-konf__clear">Začít znovu</button>' +
                        '</div>' +
                        '<p class="rd-konf__note">' + esc(KONF.note) + '</p>' +
                    '</div>' +
                    '<div class="rd-konf__summary">' +
                        '<div class="rd-konf__bar"><span></span></div>' +
                        '<p class="rd-konf__status" aria-live="polite"></p>' +
                        '<div class="rd-konf__buy">' +
                            '<p class="rd-konf__price"><strong></strong><small></small></p>' +
                            '<button type="button" class="btn btn-conversion rd-konf__add">Vložit do košíku</button>' +
                        '</div>' +
                        '<div class="rd-konf__msg" role="status"></div>' +
                    '</div>' +
                '</div>' +
                '<div class="rd-konf__panel">' +
                    '<div class="rd-konf__wrist">' +
                        '<label for="rd-konf-wrist">Obvod zápěstí</label>' +
                        '<span class="rd-konf__wrist-input"><input id="rd-konf-wrist" type="number" inputmode="decimal" min="' + w.min + '" max="' + w.max + '" step="' + w.step + '" value="' + w.value + '"> cm</span>' +
                        '<p class="rd-konf__hint"></p>' +
                    '</div>' +
                    '<div class="rd-konf__picker">' +
                        '<div class="rd-konf__tabs" hidden></div>' +
                        '<div class="rd-konf__grid-wrap"><p class="rd-konf__loading">Načítám korálky…</p></div>' +
                    '</div>' +
                '</div>' +
            '</div>';

        var el = function (cls) { return root.querySelector('.rd-konf__' + cls); };
        var ring = el('beads-on');
        var tabs = el('tabs');
        var gridWrap = el('grid-wrap');
        var wristInput = root.querySelector('#rd-konf-wrist');
        var addBtn = el('add');
        var msg = el('msg');

        // nadpis produktu se přesune do konfigurátoru
        var h1 = detail.querySelector('h1');
        if (h1) {
            root.querySelector('.rd-konf__head').insertBefore(h1, el('lead'));
        }
        content.insertBefore(root, detail);

        function lengthMm() {
            return (state.wrist + w.extraCm) * 10;
        }

        function usedMm() {
            return state.chain.reduce(function (sum, b) { return sum + b.len; }, 0);
        }

        function setMsg(html, ok) {
            msg.innerHTML = html;
            msg.classList.toggle('rd-konf__msg--ok', !!ok);
        }

        function renderRing(animateLast) {
            ring.innerHTML = ringItems(state.chain, lengthMm(), function (b, i, style) {
                return '<button type="button" class="rd-konf__bead' + (animateLast && i === state.chain.length - 1 ? ' rd-konf__bead--new' : '') + '" data-index="' + i + '"' +
                    ' style="' + style + '"' +
                    ' aria-label="Odebrat: ' + esc(b.name) + '" title="Odebrat: ' + esc(b.name) + '"><img src="' + esc(b.image) + '" alt=""></button>';
            });
        }

        function renderPicker() {
            tabs.hidden = state.groups.length < 2;
            tabs.innerHTML = state.groups.map(function (g, i) {
                return '<button type="button" class="rd-konf__tab" data-group="' + i + '" aria-pressed="' + (i === state.group) + '">' + esc(g.name) + '</button>';
            }).join('');
            gridWrap.innerHTML = '<ul class="rd-konf__grid">' + state.groups[state.group].beads.map(function (b, i) {
                return '<li><button type="button" class="rd-konf__item" data-bead="' + i + '">' +
                    '<span class="rd-konf__item-img"><img src="' + esc(b.image) + '" alt="" loading="lazy"></span>' +
                    '<span class="rd-konf__item-name">' + esc(b.label) + '</span>' +
                    '<span class="rd-konf__item-meta">' + String(b.mm).replace('.', ',') + ' mm · ' + price(b.price) + '</span>' +
                '</button></li>';
            }).join('') + '</ul>';
        }

        function renderState() {
            var length = lengthMm();
            var used = usedMm();
            var free = length - used;
            var full = state.chain.length > 0 && (free < state.minMm || free <= KONF.toleranceCm * 10);
            var beadsPrice = state.chain.reduce(function (sum, b) { return sum + b.price; }, 0);

            el('filled').textContent = cm(used);
            el('count').textContent = 'z ' + cm(length) + ' · ' + beadCount(state.chain.length);
            el('hint').innerHTML = 'Náramek bude dlouhý ' + cm(length) + ' (o ' + String(w.extraCm).replace('.', ',') + ' cm víc než zápěstí). ' +
                '<a href="' + esc(KONF.sizeGuideUrl) + '" target="_blank">Jak změřit zápěstí</a>';
            el('bar').firstChild.style.width = Math.min(100, used / length * 100) + '%';
            el('bar').classList.toggle('rd-konf__bar--full', full);
            el('status').textContent = !state.chain.length ? 'Korálek přidáte kliknutím na něj v nabídce.'
                : full ? 'Náramek je hotový.'
                : 'Zbývá doplnit ' + cm(free) + '.';
            el('price').firstChild.textContent = price(base.price + beadsPrice);
            el('price').lastChild.textContent = base.price ? 'korálky ' + price(beadsPrice) + ' + ' + base.name.toLowerCase() + ' ' + price(base.price) : '';
            el('undo').disabled = el('clear').disabled = !state.chain.length || state.busy;
            addBtn.disabled = !full || state.busy;

            Array.prototype.forEach.call(gridWrap.querySelectorAll('.rd-konf__item'), function (btn) {
                var bead = state.groups[state.group].beads[btn.getAttribute('data-bead')];
                btn.setAttribute('aria-disabled', bead.len > free + 0.01 || state.busy ? 'true' : 'false');
            });
        }

        function change(animateLast) {
            setMsg('');
            renderRing(animateLast);
            renderState();
        }

        // stejné korálky za sebou se sečtou
        function runs() {
            var list = [];
            state.chain.forEach(function (b) {
                var last = list[list.length - 1];
                if (last && last.bead === b) {
                    last.n++;
                } else {
                    list.push({ bead: b, n: 1 });
                }
            });
            return list;
        }

        // odkaz, který náramek znovu poskládá v náhledu, např. …/navrh-naramku/#navrh=16/5512*3/5515 (priceId korálků)
        function shareUrl() {
            return location.origin + KONF.page.url + '#navrh=' + state.wrist + '/' + runs().map(function (r) {
                return r.bead.priceId + (r.n > 1 ? '*' + r.n : '');
            }).join('/');
        }

        // složení pro poznámku k objednávce
        function describe() {
            return 'délka ' + cm(lengthMm()) + ', korálky za sebou: ' + runs().map(function (r) {
                return r.n + '× ' + r.bead.name;
            }).join(', ') + '\nNáhled: ' + shareUrl();
        }

        // náramek z odkazu v poznámce k objednávce
        function loadShared() {
            var m = location.hash.match(/^#navrh=([\d.]+)\/(.+)$/);
            if (!m) {
                return;
            }
            var found = {};
            state.groups.forEach(function (g) {
                g.beads.forEach(function (b) { found[b.priceId] = b; });
            });
            var chain = [];
            var complete = m[2].split('/').every(function (s) {
                var p = s.match(/^(\d+)(?:\*(\d+))?$/);
                var bead = p && found[p[1]];
                for (var i = 0; bead && i < (+p[2] || 1); i++) {
                    chain.push(bead);
                }
                return !!bead;
            });
            if (!complete) {
                setMsg('Náramek z odkazu se nepodařilo poskládat, některé korálky už v nabídce nejsou.');
                return;
            }
            state.wrist = parseFloat(m[1]);
            wristInput.value = state.wrist;
            state.chain = chain;
            change();
        }

        function addToCart() {
            // Návrh náramku musí být první, při odebírání z košíku se bere jako poslední
            var items = [{ priceId: base.priceId, amount: 1 }];
            state.chain.forEach(function (b) {
                var item = items.filter(function (x) { return x.priceId === b.priceId; })[0];
                if (item) {
                    item.amount++;
                } else {
                    items.push({ priceId: b.priceId, amount: 1 });
                }
            });

            state.busy = true;
            addBtn.textContent = 'Vkládám do košíku…';
            setMsg('');
            renderState();

            addItems(items).then(function (payload) {
                // stejný náramek podruhé přidá kus, jako u běžného produktu
                var designs = loadDesigns();
                var same = designs.filter(function (d) { return d.url === shareUrl(); })[0];
                if (same) {
                    same.qty = (same.qty || 1) + 1;
                } else {
                    designs.push({
                        priceId: base.priceId,
                        qty: 1,
                        text: describe(),
                        url: shareUrl(),
                        length: lengthMm(),
                        beads: state.chain.map(function (b) {
                            return { image: b.image, mm: b.mm, len: b.len };
                        }),
                        items: items
                    });
                }
                saveDesigns(designs);
                try {
                    shoptet.cart.updateCartButton(payload.count, payload.price);
                } catch (e) { /* počet v hlavičce se obnoví při dalším načtení stránky */ }
                setMsg('Náramek je v košíku. <a href="/kosik/">Přejít do košíku</a> nebo <button type="button" class="rd-konf__again">navrhnout další</button>.', true);
            }).catch(function (err) {
                setMsg(esc(err.message));
            }).then(function () {
                state.busy = false;
                addBtn.textContent = 'Vložit do košíku';
                renderState();
            });
        }

        root.addEventListener('click', function (e) {
            var t = e.target.closest('button');
            if (!t || state.busy) {
                return;
            }
            if (t.classList.contains('rd-konf__item')) {
                var bead = state.groups[state.group].beads[t.getAttribute('data-bead')];
                if (bead.len > lengthMm() - usedMm() + 0.01) {
                    setMsg('Korálek „' + esc(bead.name) + '“ se už nevejde. Zbývá ' + cm(lengthMm() - usedMm()) + '.');
                    return;
                }
                state.chain.push(bead);
                change(true);
            } else if (t.classList.contains('rd-konf__bead')) {
                state.chain.splice(+t.getAttribute('data-index'), 1);
                change();
            } else if (t.classList.contains('rd-konf__tab')) {
                state.group = +t.getAttribute('data-group');
                renderPicker();
                renderState();
            } else if (t.classList.contains('rd-konf__undo')) {
                state.chain.pop();
                change();
            } else if (t.classList.contains('rd-konf__clear') || t.classList.contains('rd-konf__again')) {
                state.chain = [];
                change();
            } else if (t === addBtn) {
                addToCart();
            }
        });

        wristInput.addEventListener('change', function () {
            var value = parseFloat(wristInput.value.replace(',', '.'));
            value = Math.min(w.max, Math.max(w.min, isFinite(value) ? value : w.value));
            if ((value + w.extraCm) * 10 < usedMm()) {
                setMsg('Korálky by se na náramek dlouhý ' + cm((value + w.extraCm) * 10) + ' nevešly. Nejdřív některé odeberte.');
                wristInput.value = state.wrist;
                return;
            }
            state.wrist = value;
            wristInput.value = value;
            change();
        });

        renderState();

        loadGroups().then(function (groups) {
            if (!groups.length) {
                throw new Error('Zatím tu nejsou žádné korálky.');
            }
            state.groups = groups;
            state.minMm = Math.min.apply(null, groups.map(function (g) {
                return Math.min.apply(null, g.beads.map(function (b) { return b.len; }));
            }));
            renderPicker();
            renderState();
            loadShared();
        }).catch(function (err) {
            gridWrap.innerHTML = '<p class="rd-konf__loading">Korálky se nepodařilo načíst. ' + esc(err.message) + '</p>';
        });
        window.addEventListener('hashchange', loadShared);
    }

    /* ---------- Objednávka ---------- */
    // náramky podle košíku, se kterým se stránka objednávky načetla
    function orderDesigns() {
        return keepDesigns(function (priceId) {
            return (data.cart || []).reduce(function (n, item) {
                return String(item.priceId) === priceId ? n + item.quantity : n;
            }, 0);
        });
    }

    // rekapitulace (krok 1 a 2): místo Návrhu náramku a jeho korálků řádek za každý náramek
    function enhanceRecap() {
        var designs = orderDesigns();
        var used = usedByDesigns(designs);
        var unit = {};
        var base;
        (designs.length ? data.cart : []).forEach(function (item) {
            var priceId = String(item.priceId);
            var row = document.querySelector('.order-summary-item[data-micro-sku="' + item.code + '"]');
            var total = row && row.querySelector('[data-testid="recapItemPrice"]');
            if (!total) {
                return;
            }
            unit[priceId] = parsePrice(total.textContent) / item.quantity;
            if (priceId === String(designs[0].priceId)) {
                base = row;
            } else if (used[priceId] >= item.quantity) {
                row.classList.add('rd-cart-hidden');
            } else if (used[priceId]) {
                // zákazník má korálky i mimo náramek, v řádku zůstanou jen ty
                row.querySelector('[data-testid="recapItemAmount"]').textContent = (item.quantity - used[priceId]) + 'x';
                total.textContent = price((item.quantity - used[priceId]) * unit[priceId]);
            }
        });
        if (!base) {
            return;
        }

        var template = base.cloneNode(true);
        var last = base;
        designs.forEach(function (d, i) {
            var row = i ? template.cloneNode(true) : base;
            if (i) {
                last.parentNode.insertBefore(row, last.nextSibling);
                last = row;
            }
            row.classList.add('rd-recap-navrh');
            row.firstElementChild.innerHTML = ringLink(d) + '<span>' +
                '<a href="' + esc(d.url) + '" target="_blank" rel="noopener">' + d.qty + 'x ' + designName(designs, i) + '</a>' +
                designInfo(d) +
            '</span>';
            row.querySelector('[data-testid="recapItemPrice"]').textContent = price(designPrice(d, unit) * d.qty);
        });
    }

    // složení jde prodejci v poznámce, zákazník místo něj vidí náramky v rekapitulaci
    function fillOrderNote() {
        var designs = orderDesigns();
        var remark = document.getElementById('remark');
        var note = document.getElementById('note');
        // složení simple náramků přidává oddíl 6 do window.rdNavrh.notes
        var text = designs.map(function (d, i) {
            return 'Návrh náramku' + (designs.length > 1 ? ' ' + (i + 1) : '') + (d.qty > 1 ? ' (' + d.qty + ' ks)' : '') + ': ' + d.text;
        }).concat(window.rdNavrh.notes).join('\n\n');
        if (!text || !remark || !note) {
            return;
        }

        // Shoptet při odeslání vymaže pole v #note, když poznámka není zaškrtnutá. Skutečné pole
        // proto jde mimo #note a skryje se; zákazník píše do kopie, ke které se složení připojí.
        var own = remark.cloneNode();
        own.id = 'rd-remark';
        own.removeAttribute('name');
        own.value = remark.value.replace(text, '').trim();
        remark.parentNode.insertBefore(own, remark);
        note.parentNode.insertBefore(remark, note);
        remark.style.display = 'none';
        var label = note.querySelector('label[for="remark"]');
        if (label) {
            label.htmlFor = own.id;
        }
        var toggle = document.getElementById('add-note');
        function sync() {
            remark.value = [toggle && !toggle.checked ? '' : own.value.trim(), text].filter(Boolean).join('\n\n');
        }
        own.addEventListener('input', sync);
        if (toggle) {
            toggle.addEventListener('change', sync);
        }
        sync();
    }

    // oddíl 6 (simple náramek) vkládá do košíku stejně a přidává svou část poznámky k objednávce
    window.rdNavrh = { addItems: addItems, notes: [] };

    try {
        var body = document.body;
        if (body.classList.contains(KONF.page.bodyClass) && body.classList.contains('type-category')) {
            location.replace(KONF.page.url);
        } else {
            if (body.classList.contains(KONF.page.bodyClass) && body.classList.contains('type-detail')) {
                build();
            }
            // okno košíku v hlavičce se načítá dodatečně, stránka košíku se po změně načte znovu
            document.addEventListener('ShoptetDOMCartContentLoaded', enhanceCarts);
            var init = {
                cart: enhanceCarts,
                billingAndShipping: enhanceRecap,
                customerDetails: function () {
                    enhanceRecap();
                    fillOrderNote();
                }
            }[data.pageType];
            // až po oddílu 6, který mezitím přidá složení simple náramků do poznámky
            if (init) {
                if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', init);
                } else {
                    setTimeout(init);
                }
            }
        }
    } catch (e) {
        document.documentElement.classList.remove('rd-js');
    }
})();

/* ---------- 6. Návrh simple náramku na provázku ---------- */
// Stránka je kategorie Návrh simple náramku (podkategorie Navrhnout náramek, v menu není).
// Jeden náramek nebo pár, barva provázku, písmenka, čísla a 6mm korálky (varianty produktu KONF.beadProduct).
// Do košíku jde produkt jednoho náramku nebo páru, písmenka navíc a korálky; složení jde do poznámky k objednávce.
(function () {
    var KONF = {
        bodyClass: 'in-navrh-simple-naramku',
        url: '/navrh-simple-naramku/',
        // přepínač mezi oběma návrhy nahoře na stránce
        switch: [
            { text: 'Z korálků', url: '/navrh-naramku/' },
            { text: 'Na provázku', url: '/navrh-simple-naramku/' }
        ],
        // produkty v kategorii Návrh simple náramku (viditelné jen na detailu, detail přesměruje sem):
        // jeden náramek a pár s jedním písmenkem na každém náramku v ceně, každé další písmenko nebo číslo
        products: {
            single: '/simple-naramek-vlastni-navrh/',
            pair: '/parove-simple-naramky-vlastni-navrh/',
            letter: '/pismenko-navic-simple-naramek/'
        },
        // barvy provázku; hex je jen barva v náhledu
        colors: [
            { name: 'Růžová', hex: '#E9A2B6' },
            { name: 'Žlutá', hex: '#EFC53F' },
            { name: 'Zlatá', hex: '#C49A45' },
            { name: 'Zelená', hex: '#3E7A4A' },
            { name: 'Šedá', hex: '#8C8B88' },
            { name: 'Červená', hex: '#B8262C' },
            { name: 'Světle modrá', hex: '#8DC0E3' },
            { name: 'Tmavě modrá', hex: '#1E2C55' },
            { name: 'Fialová', hex: '#6A4796' },
            { name: 'Hnědá', hex: '#6A4128' },
            { name: 'Černá', hex: '#1C1A19' }
        ],
        defaultColor: 'Černá',
        letters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
        // nejvíc kusů na jeden náramek
        maxLetters: 5,
        maxBeads: 5,
        beadProduct: '/koralek-6mm/',
        lead: 'Vyberte barvu provázku a navlékněte na něj písmenka, čísla nebo korálky. Kousek odeberete kliknutím na něj v náhledu.',
        note: 'Náhled je pouze ilustrativní. Každý náramek vážeme ručně, skutečný se proto může mírně lišit.'
    };
    var STORAGE_KEY = 'rd:simple';
    var data = (window.dataLayer && window.dataLayer[0] && window.dataLayer[0].shoptet) || {};
    var TABS = [
        { name: 'Černá písmenka', tone: 'black' },
        { name: 'Bílá písmenka', tone: 'white' },
        { name: 'Korálky 6 mm', beads: true }
    ];

    // náhled má 400 × 400 jednotek, 1 mm ≈ 3,4 jednotky
    var CORD = 3.4; // provázek 1 mm
    var LETTER = 24; // písmenko 7 mm
    var BEAD = 21; // korálek 6 mm
    var GAP = 0.8; // mezera mezi kousky na provázku
    var KNOT_ANGLE = 64 * Math.PI / 180; // posuvné uzly: úhel od vrcholu náramku na obě strany
    var TAIL = 26; // délka konce provázku za posuvným uzlem
    var STEPS = 240;
    // tvar a poloha náramků; wobble dělá tvar mírně nepravidelný jako u provázku položeného na stole
    var LAYOUT = {
        single: [{ cx: 200, cy: 205, rx: 150, ry: 130, tilt: -3, wobble: [0.035, 0.6, 0.02, 2.2] }],
        pair: [
            { cx: 194, cy: 148, rx: 150, ry: 106, tilt: -4, wobble: [0.035, 0.6, 0.02, 2.2] },
            { cx: 210, cy: 262, rx: 132, ry: 112, tilt: 3, wobble: [0.03, 2.4, 0.022, 0.7] }
        ]
    };

    function esc(s) {
        return String(s).replace(/[&<>"]/g, function (c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
        });
    }

    function price(n) {
        return n.toLocaleString('cs-CZ', { maximumFractionDigits: 2 }) + ' Kč';
    }

    function letterCount(n) {
        return n + (n === 1 ? ' písmenko' : n >= 2 && n <= 4 ? ' písmenka' : ' písmenek');
    }

    function colorOf(name) {
        return KONF.colors.filter(function (c) { return c.name === name; })[0] || KONF.colors[0];
    }

    function charmLabel(c) {
        return c.bead ? c.name : (/\d/.test(c.char) ? 'Číslo ' : 'Písmenko ') + c.char;
    }

    // kousek v poznámce k objednávce, např. „A (černé)", „korálek Ametyst"
    function charmText(c) {
        return c.bead ? 'korálek ' + c.name : c.char + (c.tone === 'black' ? ' (černé)' : ' (bílé)');
    }

    function loadDesigns() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        } catch (e) {
            return [];
        }
    }

    function saveDesigns(list) {
        try {
            if (list.length) {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
            } else {
                localStorage.removeItem(STORAGE_KEY);
            }
        } catch (e) { /* prohlížeč bez localStorage */ }
    }

    // přepínač Z korálků / Na provázku
    function switchNav() {
        return '<nav class="rd-konf__switch" aria-label="Druh náramku">' + KONF.switch.map(function (s) {
            return s.url === KONF.url
                ? '<span aria-current="page">' + esc(s.text) + '</span>'
                : '<a href="' + esc(s.url) + '">' + esc(s.text) + '</a>';
        }).join('') + '</nav>';
    }

    // původní fotka korálku (zmenšené verze Shoptet doplní na 4 : 3, malý korálek by se v nich ztratil)
    function originalImage(url) {
        var ts = (url.match(/[?&]ts=([^&]+)/) || [])[1];
        return url.replace('/shop/big/', '/shop/orig/').replace(/\?.*$/, ts ? '?' + ts : '');
    }

    function fetchDoc(url) {
        return fetch(url, { credentials: 'same-origin' }).then(function (res) {
            if (!res.ok) {
                throw new Error('Stránku ' + url + ' se nepodařilo načíst.');
            }
            return res.text();
        }).then(function (html) {
            return new DOMParser().parseFromString(html, 'text/html');
        });
    }

    // varianty produktu s 6mm korálky; název varianty je „Korálek: Ametyst (6 mm)", korálek se jmenuje „Ametyst"
    function loadBeads() {
        return fetchDoc(KONF.beadProduct).then(function (doc) {
            return Array.prototype.map.call(doc.querySelectorAll('#simple-variants input[name="priceId"]:not(.variant-default)'), function (input) {
                return {
                    bead: true,
                    name: doc.getElementById(input.getAttribute('aria-labelledby')).textContent.replace(/^[^:]*:\s*/, '').replace(/\s*\([^)]*\)\s*$/, '').trim(),
                    image: originalImage(input.getAttribute('data-big')),
                    priceId: input.value,
                    price: parseFloat(input.getAttribute('data-customerprice'))
                };
            }).filter(function (b) { return isFinite(b.price); });
        });
    }

    // priceId a cena produktů z KONF.products
    function loadProducts() {
        var keys = Object.keys(KONF.products);
        return Promise.all(keys.map(function (k) {
            return fetchDoc(KONF.products[k]).then(function (doc) {
                var input = doc.querySelector('#product-detail-form input[name="priceId"]');
                var meta = doc.querySelector('[itemprop="price"]');
                if (!input || !meta) {
                    throw new Error('Produkt ' + KONF.products[k] + ' se nepodařilo načíst.');
                }
                return { priceId: input.value, price: parseFloat(meta.getAttribute('content')) };
            });
        })).then(function (list) {
            var products = {};
            keys.forEach(function (k, i) { products[k] = list[i]; });
            return products;
        });
    }

    /* ---------- Kreslení ---------- */
    // bod náramku v úhlu a (0 = nahoře, po směru hodinových ručiček)
    function point(o, a) {
        var r = 1 + o.wobble[0] * Math.sin(2 * a + o.wobble[1]) + o.wobble[2] * Math.sin(3 * a + o.wobble[3]);
        return [o.cx + o.rx * r * Math.sin(a), o.cy - o.ry * r * Math.cos(a)];
    }

    // směr provázku, kolmice ven z náramku a natočení ve stupních
    function frame(o, a) {
        var p = point(o, a - 0.001);
        var q = point(o, a + 0.001);
        var l = Math.hypot(q[0] - p[0], q[1] - p[1]);
        var t = [(q[0] - p[0]) / l, (q[1] - p[1]) / l];
        return { n: [t[1], -t[0]], deg: Math.atan2(t[1], t[0]) * 180 / Math.PI };
    }

    // body po obvodu a jejich vzdálenost od vrcholu
    function sample(o) {
        var pts = [];
        var len = [0];
        for (var i = 0; i <= STEPS; i++) {
            pts.push(point(o, i / STEPS * 2 * Math.PI));
            if (i) {
                len.push(len[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
            }
        }
        return { pts: pts, len: len };
    }

    // bod na provázku ve vzdálenosti s od vrcholu; natočení je takové, aby písmenko na spodku stálo rovně
    function along(sm, s) {
        var i = 1;
        while (i < STEPS && sm.len[i] < s) {
            i++;
        }
        var p = sm.pts[i - 1];
        var q = sm.pts[i];
        var k = (s - sm.len[i - 1]) / (sm.len[i] - sm.len[i - 1]);
        return { x: p[0] + (q[0] - p[0]) * k, y: p[1] + (q[1] - p[1]) * k, deg: Math.atan2(p[1] - q[1], p[0] - q[0]) * 180 / Math.PI };
    }

    function pathOf(pts, closed) {
        return 'M' + pts.map(function (p) { return p[0].toFixed(1) + ' ' + p[1].toFixed(1); }).join('L') + (closed ? 'Z' : '');
    }

    // provázek: barva, jemné kroucení a lesk voskované šňůrky
    function cord(d, hex) {
        return '<path d="' + d + '" stroke="' + hex + '" stroke-width="' + CORD + '"/>' +
            '<path d="' + d + '" stroke="#000" stroke-opacity=".16" stroke-width="' + (CORD * 0.7) + '" stroke-dasharray="1.6 1.9"/>' +
            '<path d="' + d + '" stroke="#fff" stroke-opacity=".3" stroke-width="' + (CORD * 0.3) + '" transform="translate(-.5 -.6)"/>';
    }

    // zatavený konec provázku
    function tip(p, hex) {
        var r = (CORD * 0.62).toFixed(2);
        return '<circle cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="' + r + '" fill="' + hex + '"/>' +
            '<circle cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="' + r + '" fill="#000" fill-opacity=".3"/>';
    }

    // uzel: ovál ve směru provázku se stínováním a dvěma závity
    function knot(x, y, deg, rx, ry, hex) {
        return '<g transform="translate(' + x.toFixed(1) + ' ' + y.toFixed(1) + ') rotate(' + deg.toFixed(1) + ')">' +
            '<ellipse rx="' + rx + '" ry="' + ry + '" fill="' + hex + '"/>' +
            '<ellipse rx="' + rx + '" ry="' + ry + '" fill="url(#rd-simple-knot)"/>' +
            '<path d="M' + (-rx * 0.3) + ' ' + (-ry * 0.9) + 'q' + (rx * 0.35) + ' ' + (ry * 0.9) + ' 0 ' + (ry * 1.8) +
                'M' + (rx * 0.25) + ' ' + (-ry * 0.9) + 'q' + (rx * 0.35) + ' ' + (ry * 0.9) + ' 0 ' + (ry * 1.8) + '" stroke="#000" stroke-opacity=".28" stroke-width=".8"/>' +
            '<ellipse cx="' + (-rx * 0.25) + '" cy="' + (-ry * 0.4) + '" rx="' + (rx * 0.4) + '" ry="' + (ry * 0.22) + '" fill="#fff" fill-opacity=".3"/>' +
        '</g>';
    }

    // lesklé kulaté písmenko (jako na fotkách písmenek v e-shopu)
    function letterBead(ch, tone, d) {
        var r = d / 2;
        var black = tone === 'black';
        var size = d * 0.56;
        return '<circle r="' + r + '" fill="url(#rd-simple-' + tone + ')"' + (black ? '' : ' stroke="#2F2621" stroke-opacity=".3" stroke-width=".6"') + '/>' +
            '<ellipse cy="' + (-r * 0.72) + '" rx="' + (r * 0.46) + '" ry="' + (r * 0.13) + '" fill="#fff" fill-opacity="' + (black ? 0.45 : 0.9) + '"/>' +
            '<text class="rd-simple__char" y="' + (size * 0.36).toFixed(2) + '" font-size="' + size.toFixed(2) + '" fill="' + (black ? '#fff' : '#1D1A18') + '">' + esc(ch) + '</text>';
    }

    function charmSvg(c, d) {
        return c.bead
            ? '<image href="' + esc(c.image) + '" x="' + (-d / 2) + '" y="' + (-d / 2) + '" width="' + d + '" height="' + d + '"/>'
            : letterBead(c.char, c.tone, d);
    }

    // jeden náramek: provázek dokola, nahoře dvojitý s posuvnými uzly a konci, dole kousky mezi dvěma uzlíky
    // zoom zvětší kousky (malá ukázka na úvodní stránce)
    function bracelet(o, br, b, animateLast, zoom) {
        var hex = colorOf(br.color).hex;
        var sm = sample(o);
        var tailA = TAIL / ((o.rx + o.ry) / 2);
        var outer = [];
        for (var i = 0; i <= 60; i++) {
            var a = -(KNOT_ANGLE + tailA) + i / 30 * (KNOT_ANGLE + tailA);
            var over = Math.max(0, (Math.abs(a) - KNOT_ANGLE) / tailA);
            var f = frame(o, a);
            var p = point(o, a);
            var d = CORD * 1.05 + 15 * Math.pow(over, 1.6);
            outer.push([p[0] + f.n[0] * d, p[1] + f.n[1] * d]);
        }

        var svg = cord(pathOf(sm.pts, true), hex) + cord(pathOf(outer), hex) + tip(outer[0], hex) + tip(outer[60], hex);
        [-KNOT_ANGLE, KNOT_ANGLE].forEach(function (a) {
            var f = frame(o, a);
            var p = point(o, a);
            svg += knot(p[0] + f.n[0] * CORD * 0.55, p[1] + f.n[1] * CORD * 0.55, f.deg, 8.5, 6.4, hex);
        });

        // kousky jdou zleva doprava, uprostřed spodní části náramku
        if (br.charms.length) {
            var sizes = br.charms.map(function (c) { return (c.bead ? BEAD : LETTER) * (zoom || 1); });
            var group = sizes.reduce(function (s, x) { return s + x + GAP; }, -GAP);
            var bottom = sm.len[STEPS / 2];
            var s = bottom + group / 2;
            [s + 5, bottom - group / 2 - 5].forEach(function (at) {
                var k = along(sm, at);
                svg += knot(k.x, k.y, k.deg, 4, 3.4, hex);
            });
            br.charms.forEach(function (c, j) {
                var pos = along(sm, s - sizes[j] / 2);
                var label = 'Odebrat: ' + charmLabel(c);
                s -= sizes[j] + GAP;
                svg += '<g class="rd-simple__charm" transform="translate(' + pos.x.toFixed(1) + ' ' + pos.y.toFixed(1) + ') rotate(' + pos.deg.toFixed(1) + ')"' +
                    ' data-b="' + b + '" data-i="' + j + '" role="button" tabindex="0" aria-label="' + esc(label) + '">' +
                    '<title>' + esc(label) + '</title>' +
                    '<g' + (animateLast && j === br.charms.length - 1 ? ' class="rd-simple__new"' : '') + '>' + charmSvg(c, sizes[j]) + '</g>' +
                '</g>';
            });
        }
        return '<g filter="url(#rd-simple-shadow)"><g transform="rotate(' + o.tilt + ' ' + o.cx + ' ' + o.cy + ')" fill="none" stroke-linecap="round" stroke-linejoin="round">' + svg + '</g></g>';
    }

    var DEFS = '<defs>' +
        '<filter id="rd-simple-shadow" x="-10%" y="-10%" width="120%" height="125%"><feDropShadow dx="1.2" dy="2.6" stdDeviation="1.6" flood-color="#2F2621" flood-opacity=".3"/></filter>' +
        '<radialGradient id="rd-simple-knot" cx="40%" cy="35%" r="70%"><stop offset="0" stop-color="#fff" stop-opacity=".18"/><stop offset=".45" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".45"/></radialGradient>' +
        '<radialGradient id="rd-simple-black" cx="40%" cy="35%" r="70%"><stop offset="0" stop-color="#4A4846"/><stop offset=".55" stop-color="#161514"/><stop offset="1" stop-color="#000"/></radialGradient>' +
        '<radialGradient id="rd-simple-white" cx="40%" cy="35%" r="70%"><stop offset="0" stop-color="#fff"/><stop offset=".7" stop-color="#F4F1EC"/><stop offset="1" stop-color="#D6CFC6"/></radialGradient>' +
    '</defs>';

    /* ---------- Konfigurátor ---------- */
    function build() {
        var content = document.getElementById('content');
        if (!content) {
            document.documentElement.classList.remove('rd-js');
            return;
        }

        var state = {
            pair: false,
            active: 0,
            tab: 0,
            beads: null,
            beadsError: '',
            products: null,
            busy: false,
            bracelets: [{ color: KONF.defaultColor, charms: [] }, { color: KONF.defaultColor, charms: [] }]
        };

        // na mobilu se bloky řadí jinak (počet náramků, náhled, barva, kousky), viz CSS
        var root = document.createElement('section');
        root.className = 'rd-konf rd-simple';
        root.innerHTML =
            '<header class="rd-konf__head">' +
                switchNav() +
                '<p class="rd-eyebrow">Náramek na provázku</p>' +
                '<p class="rd-konf__lead">' + esc(KONF.lead) + '</p>' +
            '</header>' +
            '<div class="rd-konf__layout">' +
                '<div class="rd-konf__side">' +
                    '<div class="rd-konf__preview">' +
                        '<svg class="rd-simple__svg" viewBox="0 0 400 400" role="group" aria-label="Náhled náramku">' + DEFS + '<g class="rd-simple__stage"></g></svg>' +
                        '<div class="rd-konf__tools">' +
                            '<button type="button" class="rd-konf__undo">Vrátit poslední</button>' +
                            '<button type="button" class="rd-konf__clear">Začít znovu</button>' +
                        '</div>' +
                        '<p class="rd-konf__note">' + esc(KONF.note) + '</p>' +
                    '</div>' +
                    '<div class="rd-konf__summary">' +
                        '<p class="rd-konf__status" aria-live="polite"></p>' +
                        '<div class="rd-konf__buy">' +
                            '<p class="rd-konf__price"><strong></strong><small></small></p>' +
                            '<button type="button" class="btn btn-conversion rd-konf__add">Vložit do košíku</button>' +
                        '</div>' +
                        '<div class="rd-konf__msg" role="status"></div>' +
                    '</div>' +
                '</div>' +
                '<div class="rd-konf__panel">' +
                    '<div class="rd-simple__mode">' +
                        '<p class="rd-simple__label">Kolik náramků</p>' +
                        '<div class="rd-konf__tabs">' +
                            '<button type="button" class="rd-konf__tab" data-pair="0">Jeden náramek</button>' +
                            '<button type="button" class="rd-konf__tab" data-pair="1">Pár náramků</button>' +
                        '</div>' +
                        '<div class="rd-simple__which" hidden>' +
                            '<p class="rd-simple__label">Upravujete</p>' +
                            '<div class="rd-konf__tabs">' +
                                '<button type="button" class="rd-konf__tab" data-which="0">Horní náramek</button>' +
                                '<button type="button" class="rd-konf__tab" data-which="1">Spodní náramek</button>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="rd-simple__color-field">' +
                        '<p class="rd-simple__label">Barva provázku: <span class="rd-simple__color-name"></span></p>' +
                        '<div class="rd-simple__colors">' + KONF.colors.map(function (c) {
                            return '<button type="button" class="rd-simple__color" data-color="' + esc(c.name) + '" style="--rd-cord:' + c.hex + '" title="' + esc(c.name) + '" aria-label="' + esc(c.name) + '"></button>';
                        }).join('') + '</div>' +
                    '</div>' +
                    '<div class="rd-konf__picker">' +
                        '<p class="rd-simple__label">Písmenka, čísla a korálky <small class="rd-simple__limits"></small></p>' +
                        '<div class="rd-konf__tabs rd-simple__tabs"></div>' +
                        '<div class="rd-konf__grid-wrap"></div>' +
                    '</div>' +
                '</div>' +
            '</div>';

        var el = function (cls) { return root.querySelector('.rd-' + cls); };
        var stage = el('simple__stage');
        var gridWrap = el('konf__grid-wrap');
        var msg = el('konf__msg');
        var addBtn = el('konf__add');

        // nadpis kategorie se přesune do konfigurátoru
        var h1 = content.querySelector('.category-top h1');
        if (h1) {
            el('konf__head').insertBefore(h1, el('konf__lead'));
        }
        content.insertBefore(root, content.firstChild);

        function current() {
            return state.bracelets[state.active];
        }

        function counts(br) {
            var beads = br.charms.filter(function (c) { return c.bead; }).length;
            return { letters: br.charms.length - beads, beads: beads };
        }

        function used() {
            return state.bracelets.slice(0, state.pair ? 2 : 1);
        }

        function setMsg(html, ok) {
            msg.innerHTML = html;
            msg.classList.toggle('rd-konf__msg--ok', !!ok);
        }

        // cena a položky košíku: náramek nebo pár (jedno písmenko na každém náramku v ceně), písmenka navíc, korálky
        function quote() {
            var p = state.products;
            var base = state.pair ? p.pair : p.single;
            var extra = 0;
            var beads = [];
            used().forEach(function (br) {
                extra += Math.max(0, counts(br).letters - 1);
                beads = beads.concat(br.charms.filter(function (c) { return c.bead; }));
            });
            var items = [{ priceId: base.priceId, amount: 1 }];
            if (extra) {
                items.push({ priceId: p.letter.priceId, amount: extra });
            }
            beads.forEach(function (b) {
                var item = items.filter(function (x) { return x.priceId === b.priceId; })[0];
                if (item) {
                    item.amount++;
                } else {
                    items.push({ priceId: b.priceId, amount: 1 });
                }
            });
            var beadsPrice = beads.reduce(function (sum, b) { return sum + b.price; }, 0);
            return {
                items: items,
                total: base.price + extra * p.letter.price + beadsPrice,
                parts: [(state.pair ? 'pár s písmenkem na každém ' : 'náramek s písmenkem ') + price(base.price)]
                    .concat(extra ? [letterCount(extra) + ' navíc ' + price(extra * p.letter.price)] : [])
                    .concat(beads.length ? ['korálky ' + price(beadsPrice)] : [])
            };
        }

        // složení pro poznámku k objednávce
        function describe() {
            return used().map(function (br, i) {
                return (state.pair ? (i ? 'spodní' : 'horní') + ' náramek, ' : '') + 'provázek ' + br.color.toLowerCase() + ': ' +
                    br.charms.map(charmText).join(', ');
            }).join('; ');
        }

        function renderPreview(animateLast) {
            var layout = state.pair ? LAYOUT.pair : LAYOUT.single;
            var svg = '';
            // horní náramek páru leží navrchu
            for (var b = layout.length - 1; b >= 0; b--) {
                svg += bracelet(layout[b], state.bracelets[b], b, animateLast && b === state.active);
            }
            stage.innerHTML = svg;
        }

        function renderPicker() {
            var tab = TABS[state.tab];
            el('simple__tabs').innerHTML = TABS.map(function (t, i) {
                return '<button type="button" class="rd-konf__tab" data-tab="' + i + '" aria-pressed="' + (i === state.tab) + '">' + esc(t.name) + '</button>';
            }).join('');
            if (!tab.beads) {
                gridWrap.innerHTML = '<ul class="rd-simple__letters">' + KONF.letters.split('').map(function (ch) {
                    return '<li><button type="button" class="rd-simple__letter" data-char="' + esc(ch) + '" aria-label="' + esc(charmLabel({ char: ch })) + '">' +
                        '<svg viewBox="-13 -13 26 26" aria-hidden="true">' + letterBead(ch, tab.tone, 24) + '</svg></button></li>';
                }).join('') + '</ul>';
            } else if (state.beads) {
                gridWrap.innerHTML = '<ul class="rd-konf__grid">' + state.beads.map(function (c, i) {
                    return '<li><button type="button" class="rd-konf__item" data-bead="' + i + '">' +
                        '<span class="rd-konf__item-img"><img src="' + esc(c.image) + '" alt="" loading="lazy"></span>' +
                        '<span class="rd-konf__item-name">' + esc(c.name) + '</span>' +
                    '</button></li>';
                }).join('') + '</ul>';
            } else {
                gridWrap.innerHTML = '<p class="rd-konf__loading">' + esc(state.beadsError || 'Načítám korálky…') + '</p>';
            }
            renderState();
        }

        // přepínače, vybraná barva, počty a co ještě jde přidat
        function renderState() {
            var br = current();
            var n = counts(br);
            Array.prototype.forEach.call(root.querySelectorAll('[data-pair]'), function (btn) {
                btn.setAttribute('aria-pressed', String(btn.getAttribute('data-pair') === (state.pair ? '1' : '0')));
            });
            Array.prototype.forEach.call(root.querySelectorAll('[data-which]'), function (btn) {
                btn.setAttribute('aria-pressed', String(+btn.getAttribute('data-which') === state.active));
            });
            Array.prototype.forEach.call(root.querySelectorAll('[data-color]'), function (btn) {
                btn.setAttribute('aria-pressed', String(btn.getAttribute('data-color') === br.color));
            });
            el('simple__which').hidden = !state.pair;
            el('simple__color-name').textContent = br.color;
            el('simple__limits').textContent = 'písmenka a čísla ' + n.letters + '/' + KONF.maxLetters + ' · korálky ' + n.beads + '/' + KONF.maxBeads;
            Array.prototype.forEach.call(gridWrap.querySelectorAll('.rd-simple__letter'), function (btn) {
                btn.setAttribute('aria-disabled', String(n.letters >= KONF.maxLetters));
            });
            Array.prototype.forEach.call(gridWrap.querySelectorAll('.rd-konf__item'), function (btn) {
                btn.setAttribute('aria-disabled', String(n.beads >= KONF.maxBeads));
            });
            el('konf__undo').disabled = !br.charms.length || state.busy;
            el('konf__clear').disabled = !used().some(function (x) { return x.charms.length; }) || state.busy;

            // každý náramek musí mít aspoň jeden kousek
            var ready = used().every(function (x) { return x.charms.length; });
            var p = state.products;
            var q = p && quote();
            el('konf__status').textContent = !ready
                ? (state.pair ? 'Na každý náramek přidejte aspoň jedno písmenko nebo korálek.' : 'Přidejte aspoň jedno písmenko nebo korálek.')
                : p ? 'Jedno písmenko ' + (state.pair ? 'na každém náramku ' : '') + 'je v ceně, každé další stojí ' + price(p.letter.price) + '.' : '';
            el('konf__price').firstChild.textContent = q ? price(q.total) : '';
            el('konf__price').lastChild.textContent = q ? q.parts.join(' + ') : '';
            addBtn.disabled = !ready || !p || state.busy;
        }

        function change(animateLast) {
            setMsg('');
            renderPreview(animateLast);
            renderState();
        }

        function addCharm(c) {
            var n = counts(current());
            if (c.bead ? n.beads >= KONF.maxBeads : n.letters >= KONF.maxLetters) {
                setMsg(c.bead
                    ? 'Na jeden náramek se vejde nejvýš ' + KONF.maxBeads + ' korálků.'
                    : 'Na jeden náramek se vejde nejvýš ' + KONF.maxLetters + ' písmenek a čísel.');
                return;
            }
            current().charms.push(c);
            change(true);
        }

        function removeCharm(g) {
            state.bracelets[+g.getAttribute('data-b')].charms.splice(+g.getAttribute('data-i'), 1);
            change();
        }

        function addToCart() {
            var q = quote();
            state.busy = true;
            addBtn.textContent = 'Vkládám do košíku…';
            setMsg('');
            renderState();

            window.rdNavrh.addItems(q.items).then(function (payload) {
                var designs = loadDesigns();
                designs.push({
                    priceId: q.items[0].priceId,
                    name: state.pair ? 'Párové simple náramky' : 'Simple náramek',
                    text: describe()
                });
                saveDesigns(designs);
                try {
                    shoptet.cart.updateCartButton(payload.count, payload.price);
                } catch (e) { /* počet v hlavičce se obnoví při dalším načtení stránky */ }
                setMsg((state.pair ? 'Náramky jsou' : 'Náramek je') + ' v košíku. <a href="/kosik/">Přejít do košíku</a> nebo <button type="button" class="rd-simple__again">navrhnout další</button>.', true);
            }).catch(function (err) {
                setMsg(esc(err.message));
            }).then(function () {
                state.busy = false;
                addBtn.textContent = 'Vložit do košíku';
                renderState();
            });
        }

        root.addEventListener('click', function (e) {
            if (state.busy) {
                return;
            }
            var charm = e.target.closest('.rd-simple__charm');
            if (charm) {
                removeCharm(charm);
                return;
            }
            var t = e.target.closest('button');
            if (!t) {
                return;
            }
            if (t.hasAttribute('data-pair')) {
                state.pair = t.getAttribute('data-pair') === '1';
                state.active = 0;
                change();
            } else if (t.hasAttribute('data-which')) {
                state.active = +t.getAttribute('data-which');
                renderState();
            } else if (t.hasAttribute('data-color')) {
                current().color = t.getAttribute('data-color');
                change();
            } else if (t.hasAttribute('data-tab')) {
                state.tab = +t.getAttribute('data-tab');
                renderPicker();
            } else if (t.hasAttribute('data-char')) {
                addCharm({ char: t.getAttribute('data-char'), tone: TABS[state.tab].tone });
            } else if (t.hasAttribute('data-bead')) {
                addCharm(state.beads[t.getAttribute('data-bead')]);
            } else if (t.classList.contains('rd-konf__undo')) {
                current().charms.pop();
                change();
            } else if (t.classList.contains('rd-konf__clear') || t.classList.contains('rd-simple__again')) {
                state.bracelets.forEach(function (x) { x.charms = []; });
                change();
            } else if (t === addBtn) {
                addToCart();
            }
        });

        // kousky v náhledu jdou odebrat i z klávesnice
        stage.addEventListener('keydown', function (e) {
            var charm = e.target.closest('.rd-simple__charm');
            if (charm && (e.key === 'Enter' || e.key === ' ')) {
                e.preventDefault();
                removeCharm(charm);
            }
        });

        change();
        renderPicker();

        loadProducts().then(function (products) {
            state.products = products;
            renderState();
        }).catch(function (err) {
            setMsg('Do košíku teď vkládat nejde. ' + esc(err.message));
        });

        loadBeads().then(function (beads) {
            if (!beads.length) {
                throw new Error('Zatím tu nejsou žádné korálky.');
            }
            state.beads = beads;
        }).catch(function (err) {
            state.beadsError = 'Korálky se nepodařilo načíst. ' + err.message;
        }).then(function () {
            if (TABS[state.tab].beads) {
                renderPicker();
            }
        });
    }

    // malá ukázka páru náramků v bloku na úvodní stránce (blok vytváří oddíl 1)
    function promoArt(box) {
        box.innerHTML = '<svg class="rd-simple__svg" viewBox="0 16 400 400" aria-hidden="true">' + DEFS +
            bracelet(LAYOUT.pair[1], { color: 'Růžová', charms: [{ char: 'B', tone: 'white' }] }, 1, false, 2) +
            bracelet(LAYOUT.pair[0], { color: 'Černá', charms: [{ char: 'A', tone: 'black' }] }, 0, false, 2) +
        '</svg>';
        Array.prototype.forEach.call(box.querySelectorAll('[role="button"]'), function (g) {
            g.removeAttribute('role');
            g.removeAttribute('tabindex');
        });
    }

    // v objednávce zůstanou návrhy podle počtu kusů produktů náramků v košíku, přednost mají nejnovější
    function orderNotes() {
        var left = {};
        (data.cart || []).forEach(function (item) {
            left[item.priceId] = (left[item.priceId] || 0) + item.quantity;
        });
        var designs = loadDesigns().reverse().filter(function (d) {
            return left[d.priceId]-- > 0;
        }).reverse();
        saveDesigns(designs);
        return designs.map(function (d) {
            return d.name + ': ' + d.text;
        });
    }

    try {
        var body = document.body;
        var art = document.querySelector('.rd-promo__art--simple');
        if (body.classList.contains(KONF.bodyClass) && body.classList.contains('type-detail')) {
            location.replace(KONF.url);
        } else if (body.classList.contains(KONF.bodyClass) && body.classList.contains('type-category')) {
            build();
        } else if (art) {
            promoArt(art);
        } else if (data.pageType === 'customerDetails' && window.rdNavrh) {
            // oddíl 5 vepíše poznámku k objednávce až po načtení stránky
            Array.prototype.push.apply(window.rdNavrh.notes, orderNotes());
        }
    } catch (e) {
        document.documentElement.classList.remove('rd-js');
    }
})();
