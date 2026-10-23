/* =========================================================
   Krásné náramky – skripty webu
   Načítá se z GitHub Pages, odkaz je v zapati.html
   1. Bloky úvodní stránky (texty a obrázky v RD_CONFIG)
   2. Chat Smartsupp
   3. Náhled písma u gravírování
   4. Druhá fotka produktu po najetí myší
   5. Návrh náramku z korálků (nastavení v KONF)
   ========================================================= */

/* ---------- 1. Bloky úvodní stránky ---------- */
(function () {
    var RD_CONFIG = {
        hero: {
            eyebrow: 'Ruční výroba v České republice',
            lead: 'Náramky z přírodních kamenů, párové náramky i šperky se jménem. Dárek, který má svůj příběh.',
            button: { text: 'Vybrat náramek', url: '/naramky/' },
            link: { text: 'Šperky se jménem', url: '/personalizovane-sperky/' }
        },
        benefits: [
            { icon: 'truck', title: 'Rychlé doručení', text: 'Zásilkovna i na adresu' },
            { icon: 'gift', title: 'Doprava a dárek zdarma', text: 'u objednávek nad 1 000 Kč' },
            { icon: 'box', title: 'Dárkové balení', text: 'ke každému šperku' },
            { icon: 'heart', title: 'Ruční výroba', text: 'vyrobeno v České republice' }
        ],
        categoriesTitle: 'Vyberte si kategorii',
        categories: [
            { title: 'Náramky', url: '/naramky/', image: 'https://cdn.myshoptet.com/usr/www.krasnenaramky.cz/user/shop/detail/3153-1_letni-laska-set.jpg?ff=1&x=423&y=318&q=85&ts=67438357&sg=2175fb9d' },
            { title: 'Pro páry', url: '/naramky-pro-pary/', image: 'https://cdn.myshoptet.com/usr/www.krasnenaramky.cz/user/shop/detail/3068_naramky-pro-pary-inicialy-stribrne.jpg?ff=1&x=423&y=318&q=85&ts=67438357&sg=2175fb9d' },
            { title: 'Gravírování', url: '/personalizovane-sperky/', image: 'https://cdn.myshoptet.com/usr/www.krasnenaramky.cz/user/shop/detail/1938-1_naramek-obruc-s-vlastnim-textem-zlata-rosegold-stribrna-cerna.png?ff=1&x=423&y=318&q=85&ts=67438357&sg=2175fb9d' },
            { title: 'Náhrdelníky', url: '/nahrdelniky/', image: 'https://cdn.myshoptet.com/usr/www.krasnenaramky.cz/user/shop/detail/2217_nahrdelnik-ametyst.png?ff=1&x=423&y=318&q=85&ts=67438357&sg=2175fb9d' },
            { title: 'Na provázku', url: '/naramky-simple/', image: 'https://cdn.myshoptet.com/usr/www.krasnenaramky.cz/user/shop/detail/3046_naramky-pro-pary-simple-lava-a-howlit--3-mm-.jpg?ff=1&x=423&y=318&q=85&ts=67438357&sg=2175fb9d' },
            { title: 'Zvěrokruh', url: '/magicky-zverokruh/', image: 'https://cdn.myshoptet.com/usr/www.krasnenaramky.cz/user/shop/detail/255-2_naramek-se-znamenim-zverokruhu-cerny-premium--zlata-.jpg?ff=1&x=423&y=318&q=85&ts=67438357&sg=2175fb9d' }
        ]
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
                return '<a class="rd-cat" href="' + esc(c.url) + '"><span class="rd-cat__img"><img src="' + esc(c.image) + '" alt="" loading="lazy"></span><span class="rd-cat__label">' + esc(c.title) + '</span></a>';
            }).join('') + '</div></div>';

        var anchor = content.querySelector('.banners-row') || content.firstChild;
        content.insertBefore(hero, anchor);
        content.insertBefore(benefits, anchor);
        content.insertBefore(cats, anchor);

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

    try {
        if (document.body.classList.contains('in-index')) {
            buildHomepage();
        }
    } catch (e) {
        document.documentElement.classList.remove('rd-js');
    }
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
        // záložky s korálky: každá je jeden produkt, korálky jsou jeho varianty; první záložka je vybraná
        // mm je průměr korálků v záložce, průměr v názvu varianty („Ametyst (10 mm)") má přednost
        beadProducts: [
            { name: 'Korálky 8 mm', url: '/koralek/', mm: 8 },
            { name: 'Korálky 6 mm', url: '/koralek-6mm/', mm: 6 },
            { name: 'Bílá písmenka', url: '/pismenko-bile/', mm: 6 },
            { name: 'Černá písmenka', url: '/pismenko-cerne/', mm: 6 },
            { name: 'Ozdoby', url: '/ozdroby/', mm: 8 }
        ],
        defaultBeadMm: 8,
        wrist: { min: 12, max: 24, step: 0.5, value: 16, extraCm: 2 },
        toleranceCm: 0.5, // o kolik může být hotový náramek kratší, než vychází ze zápěstí
        sizeGuideUrl: '/jak-vybrat-velikost-naramku/',
        lead: 'Vyberte si korálky a poskládejte z nich vlastní náramek. Korálek odeberete kliknutím na něj v náhledu.'
    };
    var STORAGE_KEY = 'rd:navrhy';
    var RING = 0.38; // poloměr kruhu jako podíl šířky náhledu, v CSS mu odpovídá inset: 12 %
    var MM = /\s*[(,–-]?\s*(\d+(?:[.,]\d+)?)\s*mm\s*\)?/i;

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

    // v košíku zůstává tolik návrhů, kolik je v něm kusů produktu Návrh náramku
    function keepDesigns(quantityOf) {
        var designs = loadDesigns();
        if (designs.length) {
            designs = designs.slice(Math.max(0, designs.length - quantityOf(String(designs[0].priceId))));
            saveDesigns(designs);
        }
        return designs;
    }

    // korálky rozmístěné po kruhu; length je délka náramku v mm, item(b, i, style) vrátí HTML jednoho korálku
    function ringItems(chain, length, item) {
        var scale = 2 * Math.PI * RING / length * 100; // % šířky náhledu na 1 mm
        var pos = 0;
        return chain.map(function (b, i) {
            var angle = (pos + b.mm / 2) / length * 2 * Math.PI - Math.PI / 2;
            pos += b.mm;
            return item(b, i, 'left:' + (50 + RING * 100 * Math.cos(angle)).toFixed(2) + '%;top:' + (50 + RING * 100 * Math.sin(angle)).toFixed(2) + '%;width:' + (b.mm * scale).toFixed(2) + '%');
        }).join('');
    }

    // malý kruh korálků s odkazem na náhled náramku
    function ringLink(d) {
        return '<a class="rd-navrh__ring" href="' + esc(d.url) + '" target="_blank" rel="noopener" tabindex="-1" aria-hidden="true">' + ringItems(d.beads, d.length, function (b, j, style) {
            return '<img src="' + esc(b.image) + '" alt="" style="' + style + '">';
        }) + '</a>';
    }

    // délka, počet korálků a odkazy pod názvem náramku v košíku a v rekapitulaci objednávky
    function designInfo(d, i, removable) {
        return '<span class="rd-navrh__info">' +
            '<span>' + cm(d.length) + ' · ' + beadCount(d.beads.length) + '</span>' +
            '<a href="' + esc(d.url) + '" target="_blank" rel="noopener">Zobrazit náramek</a>' +
            (removable ? '<button type="button" class="rd-navrh__remove" data-navrh="' + i + '">Odebrat náramek</button>' : '') +
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
                used[item.priceId] = (used[item.priceId] || 0) + item.amount;
            });
        });
        return used;
    }

    // cena náramku: Návrh a jeho korálky; unit je cena za kus podle priceId
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
        var mm = name.match(MM);
        return {
            name: name,
            label: mm ? name.replace(MM, ' ').replace(/\s+/g, ' ').trim() : name,
            mm: mm ? parseFloat(mm[1].replace(',', '.')) : defaultMm || KONF.defaultBeadMm,
            price: parseFloat(priceText),
            priceId: priceId,
            image: image
        };
    }

    function isValid(b) {
        return isFinite(b.price) && b.mm > 0;
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

    // řádek košíku: počet kusů místo +/− a cena; řádek bez +/− a křížku jde odebrat jen celým náramkem
    function lockRow(row, quantity, total, unit) {
        var qty = row.querySelector('.quantity');
        var unitPrice = row.querySelector('.p-price .price-final');
        var totalPrice = row.querySelector('.p-total .price-final');
        row.classList.add('rd-cart-locked');
        if (qty) {
            qty.insertAdjacentHTML('afterend', '<span class="rd-cart-qty">' + quantity + ' ks</span>');
        }
        if (unitPrice && unit !== undefined) {
            unitPrice.textContent = price(unit);
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

        var template = base.row.cloneNode(true);
        var last = base.row;
        designs.forEach(function (d, i) {
            var row = i ? template.cloneNode(true) : base.row;
            var link = row.querySelector('.p-name .main-link');
            var sum = designPrice(d, unit);
            if (i) {
                last.parentNode.insertBefore(row, last.nextSibling);
                last = row;
            }
            row.querySelector('.cart-p-image').innerHTML = ringLink(d);
            link.href = d.url;
            link.target = '_blank';
            link.textContent = designName(designs, i);
            link.insertAdjacentHTML('afterend', designInfo(d, i, true));
            lockRow(row, 1, sum, sum);
        });

        table.addEventListener('click', function (e) {
            var btn = e.target.closest('.rd-navrh__remove');
            if (!btn || table.classList.contains('rd-cart-busy')) {
                return;
            }
            var i = +btn.getAttribute('data-navrh');
            var items = designs[i].items;
            table.classList.add('rd-cart-busy');
            btn.textContent = 'Odebírám…';
            // Návrh až nakonec, aby v košíku nezůstal Návrh bez korálků
            removeItems(items.slice(1).concat(items[0]), cart).then(function () {
                designs.splice(i, 1);
                saveDesigns(designs);
            }).catch(function (err) {
                window.alert(err.message);
            }).then(function () {
                location.reload();
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
            return state.chain.reduce(function (sum, b) { return sum + b.mm; }, 0);
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
                btn.setAttribute('aria-disabled', bead.mm > free + 0.01 || state.busy ? 'true' : 'false');
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
                var designs = loadDesigns();
                designs.push({
                    priceId: base.priceId,
                    text: describe(),
                    url: shareUrl(),
                    length: lengthMm(),
                    beads: state.chain.map(function (b) {
                        return { image: b.image, mm: b.mm };
                    }),
                    items: items
                });
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
                if (bead.mm > lengthMm() - usedMm() + 0.01) {
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
                return Math.min.apply(null, g.beads.map(function (b) { return b.mm; }));
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
                '<a href="' + esc(d.url) + '" target="_blank" rel="noopener">' + designName(designs, i) + '</a>' +
                designInfo(d, i, false) +
            '</span>';
            row.querySelector('[data-testid="recapItemPrice"]').textContent = price(designPrice(d, unit));
        });
    }

    // složení jde prodejci v poznámce, zákazník místo něj vidí náramky v rekapitulaci
    function fillOrderNote() {
        var designs = orderDesigns();
        var remark = document.getElementById('remark');
        var note = document.getElementById('note');
        if (!designs.length || !remark || !note) {
            return;
        }

        // Shoptet při odeslání vymaže pole v #note, když poznámka není zaškrtnutá. Skutečné pole
        // proto jde mimo #note a skryje se; zákazník píše do kopie, ke které se složení připojí.
        var text = designs.map(function (d, i) {
            return 'Návrh náramku' + (designs.length > 1 ? ' ' + (i + 1) : '') + ': ' + d.text;
        }).join('\n\n');
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
            if (init) {
                if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', init);
                } else {
                    init();
                }
            }
        }
    } catch (e) {
        document.documentElement.classList.remove('rd-js');
    }
})();
