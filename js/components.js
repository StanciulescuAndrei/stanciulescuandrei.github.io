// ============================================================
// Shared sidebar + footer.
// Edit the lists below and every page updates.
//
// This script is loaded right after <div id="nav-placeholder">
// so the sidebar is written before the rest of the page paints
// (no flash, no layout jump). No animations, no dependencies.
// ============================================================

(function () {
    'use strict';

    // Path prefix to the site root, derived from where this script was loaded
    // ('' for top-level pages, '../' for pages inside /artistic/).
    function getBasePath() {
        var scripts = document.getElementsByTagName('script');
        for (var i = 0; i < scripts.length; i++) {
            var src = scripts[i].getAttribute('src') || '';
            var match = src.match(/^(.*?)js\/components\.js/);
            if (match) {
                return match[1];
            }
        }
        return '';
    }

    var navLinks = [
        { href: 'index.html', text: 'home', id: 'home' },
        { href: 'artistic.html', text: 'artistic projects', id: 'artistic' },
        { href: 'projects.html', text: 'technical projects', id: 'projects' },
        { href: 'experience.html', text: 'experience', id: 'experience' },
        { href: 'publications.html', text: 'publications', id: 'publications' }
    ];

    // Shown nested under "artistic projects".
    var artisticLinks = [
        { href: 'artistic/rains_of_the_anthropocene.html', text: 'rains of the anthropocene', id: 'rains' },
        { href: 'artistic/rooted_structures.html', text: 'rooted structures', id: 'rooted' },
        { href: 'artistic/visual_sequencer.html', text: 'visual sequencer', id: 'sequencer' }
    ];

    var elsewhereLinks = [
        { href: 'assets/resume.pdf', text: 'cv (pdf)', local: true },
        { href: 'mailto:stanciulescuandrei99@gmail.com', text: 'email' },
        { href: 'https://github.com/StanciulescuAndrei', text: 'github', external: true },
        { href: 'https://www.linkedin.com/in/stanciulescu-andrei/', text: 'linkedin', external: true }
    ];

    var base = getBasePath();
    var page = document.body.getAttribute('data-page') || 'home';
    var sub = document.body.getAttribute('data-sub') || '';

    function link(href, text, activeClass, extra) {
        var cls = activeClass ? ' class="' + activeClass + '"' + (activeClass === 'is-active' ? ' aria-current="page"' : '') : '';
        return '<a href="' + href + '"' + cls + (extra || '') + '>' + text + '</a>';
    }

    function renderSidebar() {
        var items = navLinks.map(function (l) {
            var activeClass = '';
            if (l.id === page && !sub) {
                activeClass = 'is-active';
            } else if (l.id === page && sub) {
                activeClass = 'is-section';
            }
            var html = '<li>' + link(base + l.href, l.text, activeClass);
            if (l.id === 'artistic') {
                html += '<ul class="side-sub">' + artisticLinks.map(function (a) {
                    return '<li>' + link(base + a.href, a.text, a.id === sub ? 'is-active' : '') + '</li>';
                }).join('') + '</ul>';
            }
            return html + '</li>';
        }).join('');

        var elsewhere = elsewhereLinks.map(function (l) {
            var href = l.local ? base + l.href : l.href;
            var extra = l.external ? ' target="_blank" rel="noopener"' : '';
            return '<li>' + link(href, l.text, '', extra) + '</li>';
        }).join('');

        return '' +
            '<aside class="sidebar">' +
                '<a href="' + base + 'index.html" class="logo">andrei<br>stanciulescu</a>' +
                '<p class="tagline">graphics programmer<br>/ interactive art</p>' +
                '<nav aria-label="Main">' +
                    '<p class="side-head">index</p>' +
                    '<ul class="side-nav">' + items + '</ul>' +
                    '<p class="side-head">elsewhere</p>' +
                    '<ul class="side-nav">' + elsewhere + '</ul>' +
                '</nav>' +
            '</aside>';
    }

    function renderFooter() {
        return '' +
            '<footer class="footer">' +
                '<p>&copy; ' + new Date().getFullYear() + ' Andrei Stanciulescu &middot; ' +
                'hand-written HTML &amp; CSS &middot; no cookies, no tracking</p>' +
            '</footer>';
    }

    var navEl = document.getElementById('nav-placeholder');
    if (navEl) {
        navEl.outerHTML = renderSidebar();
    }

    function injectFooter() {
        var footEl = document.getElementById('footer-placeholder');
        if (footEl) {
            footEl.outerHTML = renderFooter();
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectFooter);
    } else {
        injectFooter();
    }
})();
