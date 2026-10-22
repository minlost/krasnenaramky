/* =========================================================
   Krásné náramky – redesign: bloky úvodní stránky
   Načítá se z GitHub Pages, odkaz je v zapati.html
   Texty a obrázky upravíte v RD_CONFIG níže.
   ========================================================= */
(function () {
    var RD_CONFIG = {
        hero: {
            eyebrow: 'Ruční výroba v České republice',
            lead: 'Náramky z přírodních kamenů, párové náramky i šperky se jménem. Dárek, který má svůj příběh.',
            button: { text: 'Vybrat náramek', url: '/naramky/' },
            link: { text: 'Šperky se jménem', url: '/personalizovane-sperky/' }
        },
        benefits: [
            { icon: 'truck', title: 'Doručení do druhého dne', text: 'Zásilkovna i na adresu' },
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
