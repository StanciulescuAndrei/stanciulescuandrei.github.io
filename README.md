# Andrei Stanciulescu — Personal Website

Plain static portfolio website built with hand-written HTML, a single CSS stylesheet, and minimal JS for the shared sidebar and footer. No frameworks, no web fonts, no animations.

## Structure

```
.
├── index.html          # Home page (intro, selected work, publications, education, contact)
├── artistic.html       # Artistic projects index
├── projects.html       # Technical projects
├── experience.html     # Work experience, education, skills
├── publications.html   # Theses and journal articles
├── css/
│   └── style.css       # Single stylesheet (system fonts, 2-column grid, responsive)
├── js/
│   └── components.js   # Shared sidebar navigation and footer
├── assets/
│   ├── resume.pdf      # CV download
│   ├── artistic/       # Full-resolution artistic media
│   ├── projects/       # Technical project media
│   └── thumbs/         # Web-sized thumbnails and video posters
└── artistic/           # Individual artistic project pages
    ├── _template.html
    ├── rains_of_the_anthropocene.html
    ├── rooted_structures.html
    └── visual_sequencer.html
```

## Adding Content

- **Artistic project**: Copy `artistic/_template.html`, set `data-sub` on `<body>`, add an entry to `artisticLinks` in `js/components.js`, and add an `.entry` block in `artistic.html`.
- **Technical project**: Add a `<section class="project">` block and a TOC item in `projects.html`.
- **Publication / Experience**: Add an `<li class="pub">` in `publications.html` or a `<tr>` in `experience.html`.
