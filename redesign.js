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
            { title: 'Se jménem', url: '/personalizovane-sperky/', image: 'https://cdn.myshoptet.com/usr/www.krasnenaramky.cz/user/shop/detail/1938-1_naramek-obruc-s-vlastnim-textem-zlata-rosegold-stribrna-cerna.png?ff=1&x=423&y=318&q=85&ts=67438357&sg=2175fb9d' },
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
// produkty v kategorii Korálky. Průměr korálku se čte z názvu, např. „Ametyst (8 mm)".
// Složení náramku se uloží do prohlížeče a v objednávce se vepíše do poznámky pro prodejce.
(function () {
    var KONF = {
        page: { bodyClass: 'in-navrhnout-naramek', url: '/navrh-naramku/' },
        beads: [], // vybrané korálky; když je seznam prázdný, berou se všechny z beadsCategory
        beadsCategory: '/koralky/',
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

    // adresa produktu bez domény a lomítek, např. „koralek-02"
    function slug(url) {
        return url.split('/').filter(Boolean).pop();
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

    function makeBead(name, priceText, url, image) {
        var mm = name.match(MM);
        return {
            name: name,
            label: mm ? name.replace(MM, ' ').replace(/\s+/g, ' ').trim() : name,
            mm: mm ? parseFloat(mm[1].replace(',', '.')) : KONF.defaultBeadMm,
            price: parseFloat(priceText),
            url: url,
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

    // karty produktů ve výpisu kategorie
    function readBeads(doc) {
        return Array.prototype.map.call(doc.querySelectorAll('#products .p[data-micro="product"]'), function (p) {
            var offer = p.querySelector('[data-micro-price]');
            return makeBead(
                p.querySelector('[data-micro="name"]').textContent.trim(),
                offer && offer.getAttribute('data-micro-price'),
                p.querySelector('a[data-micro="url"]').getAttribute('href'),
                originalImage(p.querySelector('img').getAttribute('data-micro-image'))
            );
        }).filter(isValid);
    }

    // detail produktu (pro korálky vybrané v KONF.beads)
    function readBeadDetail(doc, url) {
        var priceMeta = doc.querySelector('#product-detail-form meta[itemprop="price"]');
        var image = doc.querySelector('.p-image .p-main-image');
        return makeBead(
            doc.querySelector('.p-detail-inner-header h1').textContent.trim(),
            priceMeta && priceMeta.getAttribute('content'),
            url,
            image && image.getAttribute('data-href')
        );
    }

    // všechny stránky výpisu kategorie
    function loadCategory(url, doc) {
        return (doc ? Promise.resolve(doc) : fetchDoc(url)).then(function (d) {
            var beads = readBeads(d);
            var next = d.querySelector('link[rel="next"]');
            return next ? loadCategory(next.getAttribute('href')).then(function (more) {
                return beads.concat(more);
            }) : beads;
        });
    }

    // podkategorie Korálků jsou skupiny (Kameny, Písmena…); bez podkategorií je jedna skupina
    function loadGroups() {
        if (KONF.beads.length) {
            return Promise.all(KONF.beads.map(function (url) {
                return fetchDoc(url).then(function (doc) {
                    return readBeadDetail(doc, url);
                });
            })).then(function (beads) {
                return [{ name: '', beads: beads.filter(isValid) }];
            });
        }
        return fetchDoc(KONF.beadsCategory).then(function (doc) {
            var subs = Array.prototype.map.call(doc.querySelectorAll('.subcategories li a'), function (a) {
                return { name: a.textContent.trim(), url: a.getAttribute('href') };
            });
            if (!subs.length) {
                subs = [{ name: '', url: KONF.beadsCategory, doc: doc }];
            }
            return Promise.all(subs.map(function (s) {
                return loadCategory(s.url, s.doc).then(function (beads) {
                    return { name: s.name, beads: beads };
                });
            }));
        }).then(function (groups) {
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
            return added.reduce(function (prev, item) {
                return prev.then(function () {
                    var line = cart.filter(function (c) {
                        return String(c.priceId) === String(item.priceId);
                    })[0];
                    if (!line) {
                        return;
                    }
                    var rest = line.quantity - item.amount;
                    return rest > 0
                        ? cartAction('setCartItemAmount', { itemId: line.itemId, priceId: line.priceId, amount: rest })
                        : cartAction('deleteCartItem', { itemId: line.itemId, priceId: line.priceId });
                });
            }, Promise.resolve()).catch(function () {}).then(function () {
                throw err;
            });
        });
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
            var length = lengthMm();
            var scale = 2 * Math.PI * RING / length * 100; // % šířky náhledu na 1 mm
            var pos = 0;
            ring.innerHTML = state.chain.map(function (b, i) {
                var angle = (pos + b.mm / 2) / length * 2 * Math.PI - Math.PI / 2;
                pos += b.mm;
                return '<button type="button" class="rd-konf__bead' + (animateLast && i === state.chain.length - 1 ? ' rd-konf__bead--new' : '') + '" data-index="' + i + '"' +
                    ' style="left:' + (50 + RING * 100 * Math.cos(angle)).toFixed(2) + '%;top:' + (50 + RING * 100 * Math.sin(angle)).toFixed(2) + '%;width:' + (b.mm * scale).toFixed(2) + '%"' +
                    ' aria-label="Odebrat: ' + esc(b.name) + '" title="Odebrat: ' + esc(b.name) + '"><img src="' + esc(b.image) + '" alt=""></button>';
            }).join('');
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

        // odkaz, který náramek znovu poskládá v náhledu, např. …/navrh-naramku/#navrh=16/koralek-02*3/koralek-05
        function shareUrl() {
            return location.origin + KONF.page.url + '#navrh=' + state.wrist + '/' + runs().map(function (r) {
                return slug(r.bead.url) + (r.n > 1 ? '*' + r.n : '');
            }).join('/');
        }

        // složení pro poznámku k objednávce
        function describe() {
            return 'délka ' + cm(lengthMm()) + ', korálky za sebou: ' + runs().map(function (r) {
                return r.n + '× ' + r.bead.name;
            }).join(', ') + '\nNáhled: ' + shareUrl();
        }

        // náramek z odkazu v poznámce k objednávce; vyprodané korálky ve výpisu nejsou, načtou se z detailu
        function loadShared() {
            var m = location.hash.match(/^#navrh=([\d.]+)\/(.+)$/);
            if (!m) {
                return;
            }
            var found = {};
            state.groups.forEach(function (g) {
                g.beads.forEach(function (b) { found[slug(b.url)] = b; });
            });
            var missing = [];
            var items = m[2].split('/').map(function (s) {
                var p = s.split('*');
                if (!found[p[0]] && missing.indexOf(p[0]) === -1) {
                    missing.push(p[0]);
                }
                return { slug: p[0], n: +p[1] || 1 };
            });
            Promise.all(missing.map(function (s) {
                return fetchDoc('/' + s + '/').then(function (doc) {
                    found[s] = readBeadDetail(doc, '/' + s + '/');
                });
            })).then(function () {
                state.wrist = parseFloat(m[1]);
                wristInput.value = state.wrist;
                state.chain = [];
                items.forEach(function (it) {
                    for (var i = 0; i < it.n; i++) {
                        state.chain.push(found[it.slug]);
                    }
                });
                change();
            }).catch(function (err) {
                setMsg('Náramek z odkazu se nepodařilo poskládat. ' + esc(err.message));
            });
        }

        function addToCart() {
            var counts = [];
            state.chain.forEach(function (b) {
                var c = counts.filter(function (x) { return x.bead === b; })[0];
                if (c) {
                    c.amount++;
                } else {
                    counts.push({ bead: b, amount: 1 });
                }
            });

            state.busy = true;
            addBtn.textContent = 'Vkládám do košíku…';
            setMsg('');
            renderState();

            // priceId korálku je jen na jeho detailu, výpis kategorie ho neobsahuje
            Promise.all(counts.map(function (c) {
                return fetchDoc(c.bead.url).then(function (doc) {
                    var input = doc.querySelector('#product-detail-form input[name="priceId"]');
                    if (!input || !doc.querySelector('#product-detail-form .add-to-cart-button')) {
                        throw new Error('Korálek „' + c.bead.name + '“ teď nejde objednat. Vyměňte ho prosím za jiný.');
                    }
                    c.priceId = input.value;
                });
            })).then(function () {
                return addItems([{ priceId: base.priceId, amount: 1 }].concat(counts.map(function (c) {
                    return { priceId: c.priceId, amount: c.amount };
                })));
            }).then(function (payload) {
                var designs = loadDesigns();
                designs.push({ priceId: base.priceId, text: describe() });
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
                throw new Error('V kategorii ' + KONF.beadsCategory + ' zatím nejsou žádné korálky.');
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

    /* ---------- Poznámka k objednávce ---------- */
    // v košíku zůstává tolik návrhů, kolik je v něm kusů produktu Návrh náramku
    function fillOrderNote() {
        var designs = loadDesigns();
        if (!designs.length || !data.cart) {
            return;
        }
        var priceId = String(designs[0].priceId);
        var count = data.cart.reduce(function (n, item) {
            return String(item.priceId) === priceId ? n + item.quantity : n;
        }, 0);
        designs = designs.slice(Math.max(0, designs.length - count));
        saveDesigns(designs);

        var remark = document.getElementById('remark');
        if (!designs.length || data.pageType !== 'customerDetails' || !remark) {
            return;
        }
        var text = designs.map(function (d, i) {
            return 'Návrh náramku' + (designs.length > 1 ? ' ' + (i + 1) : '') + ': ' + d.text;
        }).join('\n\n');
        if (remark.value.indexOf(text) !== -1) {
            return;
        }
        var toggle = document.getElementById('add-note');
        if (toggle && !toggle.checked) {
            toggle.click();
        }
        remark.value = remark.value ? remark.value + '\n\n' + text : text;
    }

    try {
        var body = document.body;
        if (body.classList.contains(KONF.page.bodyClass) && body.classList.contains('type-category')) {
            location.replace(KONF.page.url);
        } else if (body.classList.contains(KONF.page.bodyClass) && body.classList.contains('type-detail')) {
            build();
        } else if (data.pageType === 'cart' || data.pageType === 'customerDetails') {
            // počká na skripty Shoptetu, které ovládají rozbalení poznámky
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', fillOrderNote);
            } else {
                fillOrderNote();
            }
        }
    } catch (e) {
        document.documentElement.classList.remove('rd-js');
    }
})();
