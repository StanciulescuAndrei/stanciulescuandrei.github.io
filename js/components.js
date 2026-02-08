// Shared Navigation Component
// Update the navigation here and it will reflect on all pages

const navLinks = [
    { href: "index.html", text: "Home", id: "home" },
    { href: "artistic.html", text: "Artistic Projects", id: "artistic" },
    { href: "projects.html", text: "Technical Projects", id: "projects" },
    { href: "experience.html", text: "Experience", id: "experience" },
    { href: "publications.html", text: "Publications", id: "publications" }
];

function renderNavigation(activePageId) {
    const navLinksHtml = navLinks.map(link => {
        const isActive = link.id === activePageId;
        const activeClass = isActive ? ' nav__link--active' : '';
        return `<li><a href="${link.href}" class="nav__link${activeClass}">${link.text}</a></li>`;
    }).join('\n                ');

    return `
    <nav class="nav">
        <div class="container nav__inner">
            <a href="index.html" class="nav__logo">A.S.</a>
            <button class="nav__toggle" aria-label="Toggle navigation" onclick="toggleNav()">
                <span class="nav__toggle-bar"></span>
                <span class="nav__toggle-bar"></span>
                <span class="nav__toggle-bar"></span>
            </button>
            <ul class="nav__links" id="nav-links">
                ${navLinksHtml}
            </ul>
        </div>
    </nav>`;
}

function injectNavigation(activePageId) {
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) {
        navPlaceholder.innerHTML = renderNavigation(activePageId);
    }
}

// Navigation toggle function
function toggleNav() {
    document.getElementById('nav-links').classList.toggle('nav__links--open');
}

// ============================================
// Shared Footer Component
// Update the footer here and it will reflect on all pages
// ============================================

const footerNavLinks = [
    { href: "index.html", text: "Home" },
    { href: "artistic.html", text: "Artistic Projects" },
    { href: "projects.html", text: "Technical Projects" },
    { href: "experience.html", text: "Experience" },
    { href: "publications.html", text: "Publications" }
];

const footerConnectLinks = [
    { href: "mailto:stanciulescuandrei99@gmail.com", text: "Email", external: false },
    { href: "https://github.com/StanciulescuAndrei", text: "GitHub", external: true },
    { href: "https://www.linkedin.com/in/stanciulescu-andrei/", text: "LinkedIn", external: true }
];

const footerQuickLinks = [
    { href: "assets/resume.pdf", text: "Download CV", external: false },
    { href: "http://hdl.handle.net/2117/420313", text: "Master's Thesis", external: true }
];

function renderFooter() {
    const navLinksHtml = footerNavLinks.map(link => 
        `<li><a href="${link.href}" class="footer__link">${link.text}</a></li>`
    ).join('\n                        ');
    
    const connectLinksHtml = footerConnectLinks.map(link => {
        const attrs = link.external ? ' target="_blank" rel="noopener"' : '';
        return `<li><a href="${link.href}" class="footer__link"${attrs}>${link.text}</a></li>`;
    }).join('\n                        ');
    
    const quickLinksHtml = footerQuickLinks.map(link => {
        const attrs = link.external ? ' target="_blank" rel="noopener"' : '';
        return `<li><a href="${link.href}" class="footer__link"${attrs}>${link.text}</a></li>`;
    }).join('\n                        ');

    return `
    <footer class="footer">
        <div class="container">
            <p class="footer__copyright">
                © ${new Date().getFullYear()} Andrei Stanciulescu. Built with raw HTML & CSS.
            </p>
        </div>
    </footer>`;
}

function injectFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.outerHTML = renderFooter();
    }
}

// Initialize components when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Get the active page from the data attribute on body
    const activePageId = document.body.dataset.page || 'home';
    injectNavigation(activePageId);
    injectFooter();
});
