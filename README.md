# Andrei Stanciulescu - Portfolio Website

A brutalist-inspired static portfolio website built with pure HTML and CSS. Modular, maintainable, and easy to extend.

## 📁 Structure

```
new-site/
├── index.html          # Home page
├── projects.html       # Technical projects
├── publications.html   # Academic publications
├── experience.html     # Work experience & education
├── artistic.html       # Artistic/creative projects
├── css/
│   ├── base.css        # Reset, typography, variables
│   ├── layout.css      # Grid, containers, spacing
│   ├── components.css  # Nav, cards, buttons, footer
│   └── artistic.css    # Brutalist & artistic effects
├── assets/
│   ├── resume.pdf      # CV download
│   ├── images/         # General images
│   └── artistic/       # Artistic project images
└── artistic/           # Individual artistic project pages
```

## 🎨 Design System

### CSS Variables

All colors, fonts, and spacing are controlled via CSS custom properties in `base.css`:

```css
:root {
    /* Colors */
    --color-bg: #f5f5f0;
    --color-accent: #ff3300;
    --color-accent-secondary: #0066ff;
    
    /* Fonts */
    --font-mono: 'JetBrains Mono', monospace;
    --font-display: 'Space Grotesk', sans-serif;
    
    /* Spacing */
    --space-md: 1rem;
    --space-lg: 2rem;
    --space-xl: 4rem;
}
```

### Component Classes

#### Cards
```html
<article class="card">
    <div class="card__content">
        <span class="card__tag">Category</span>
        <h3 class="card__title">Title</h3>
        <p class="card__description">Description</p>
    </div>
</article>
```

#### Buttons
```html
<a href="#" class="btn">Default</a>
<a href="#" class="btn btn--primary">Primary</a>
<a href="#" class="btn btn--small">Small</a>
```

#### Tags
```html
<span class="tag">Default</span>
<span class="tag tag--accent">Accent</span>
```

#### Grid Layouts
```html
<div class="grid grid--2">...</div>  <!-- 2 columns -->
<div class="grid grid--3">...</div>  <!-- 3 columns -->
<div class="grid grid--asym">...</div>  <!-- 2:1 ratio -->
```

## ➕ Adding Content

### Adding a Technical Project

1. Open `projects.html`
2. Copy an existing project `<section>` block
3. Update the content, ID, and links
4. Alternate between `grid--asym` and `grid--asym-reverse` for visual variety

### Adding a Publication

1. Open `publications.html`
2. Copy an existing `<article class="pub-item">` block
3. Update title, authors, venue, and links

### Adding Work Experience

1. Open `experience.html`
2. Add a new `<div class="timeline__item">` in the timeline
3. Fill in date, title, company, and description

### Adding an Artistic Project

1. **Gallery Item**: Add to `artistic.html`:
```html
<article class="art-gallery__item art-gallery__item--wide">
    <img src="assets/artistic/your-image.jpg" class="art-gallery__image" alt="Description">
    <div class="art-gallery__overlay">
        <span class="art-gallery__category">Category</span>
        <h3 class="art-gallery__title">Project Name</h3>
    </div>
    <a href="artistic/project-name.html" class="card__link"></a>
</article>
```

2. **Detail Page**: Create `artistic/project-name.html` using the template

Gallery item sizes:
- `art-gallery__item--wide` - Spans 8 columns
- `art-gallery__item--narrow` - Spans 4 columns
- `art-gallery__item--square` - Spans 6 columns
- `art-gallery__item--tall` - Spans 2 rows

## 🖌️ Artistic Effects

### Glitch Text
```html
<h1 class="glitch" data-text="Your Text">Your Text</h1>
```

### Brutalist Title with Stroke
```html
<h1 class="brutalist-title brutalist-title--stroke">Title</h1>
```

### Art Blocks
```html
<div class="art-block art-block--dark">Dark background</div>
<div class="art-block art-block--accent">Accent background</div>
<div class="art-block art-block--shadow">With offset shadow</div>
```

### Grain Overlay
Add `class="grain"` to `<body>` for a subtle film grain effect.

## 📱 Responsive

The site is fully responsive with breakpoints at:
- 1024px (tablet)
- 768px (mobile)

## 🚀 Deployment

This is a static site - simply upload all files to any web host:
- GitHub Pages
- Netlify
- Vercel
- Any static file server

## 📝 Customization Tips

1. **Change accent color**: Modify `--color-accent` in `base.css`
2. **Adjust spacing**: Modify the `--space-*` variables
3. **Add new fonts**: Update the Google Fonts link in HTML and `--font-*` variables
4. **Create new components**: Add to `components.css` following BEM naming

