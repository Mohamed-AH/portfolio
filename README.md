# Mohamed Abdul Hameed — Portfolio

Personal portfolio for a Full-Stack Developer & Automation Engineer — self-taught
since 2022 (100Devs, Leon Noel, Cohort 2), on top of a decade in operations. Built a
production automation system, full-stack platforms, and real-time data visualizers.
CKA and Oracle Cloud certified.

Live: hosted on GitHub Pages · [github.com/Mohamed-AH](https://github.com/Mohamed-AH)

## Design

- Modern glass / gradient UI with a subtle animated glow and dot-grid background
- Dark theme by default, with a light-mode toggle (persisted in `localStorage`)
- Fully responsive (mobile → desktop), scroll-reveal animations, reduced-motion aware
- Inter + Fira Code typography; Tailwind CSS (CDN) for utilities, custom CSS for effects

## Sections

- **About / Hero** — positioning, headline stats, and a live "status" terminal card
- **Experience** — Operations at BT Applied Technology (2011–), and self-taught full-stack (100Devs, 2022–)
- **Projects** — two production flagships, two full-stack products, three real-time visualizers
- **Skills** — Frontend · Backend & Cloud · Systems & DevOps
- **Certifications** — CKA + 3× Oracle Cloud (with verification links)
- **Contact** — email, GitHub, LinkedIn

## Featured projects

| Project | What it is | Links |
|---|---|---|
| JDE Work Order Automation | Production enterprise automation (Python/JS/Claude API) — 3,300+ orders, 90% time reduction | Proprietary |
| Fablewurud — rasmihassan.com | Full-stack content platform: search over 3,200+ audio / 116 PDF / 300+ articles (Node, MongoDB, Cloudflare R2, OCI, Sentry + Grafana) | [Live](https://rasmihassan.com) · [Source](https://github.com/Mohamed-AH/fablewurud) |
| Hafiz | Bilingual Quran-memorization PWA (Node/Express, MongoDB, OAuth+JWT, on-device speech) | [Live](https://hafiz-frontend.onrender.com) · [Source](https://github.com/Mohamed-AH/quran) |
| CRM Builder | Modular, offline-first CRM (Node/Express, MongoDB, IndexedDB, OAuth) | [Source](https://github.com/Mohamed-AH/crmbuilder) |
| SpaceWiki | Interactive 3D orbital / astronomical directory (Three.js) | [Live](https://expospace.netlify.app/) · [Source](https://github.com/Mohamed-AH/spacewiki) |
| WhalePulse 3D | Live Bitcoin mempool visualizer (Three.js, WebSocket) | [Live](https://btcwatch.netlify.app/) · [Source](https://github.com/Mohamed-AH/whale) |
| TransitWatch | Real-time maritime AIS dashboard on Cloudflare edge (Leaflet, Workers) | [Live](https://hormove.pages.dev/) · [Source](https://github.com/Mohamed-AH/TransitWatch) |

## File structure

```
portfolio/
├── index.html   # Structure & content
├── style.css    # Custom styles (glass, glow, timeline, light-mode, reveal)
├── script.js    # Theme toggle, mobile menu, copy-email, scroll reveal
└── README.md
```

## Deployment

Static site — deploy via GitHub Pages: Settings → Pages → Deploy from branch
(`main`, root). No build step; Tailwind and icons load from CDN.

## Contact

- **Email**: emah84@gmail.com
- **GitHub**: [Mohamed-AH](https://github.com/Mohamed-AH)
- **LinkedIn**: [mojed7](https://www.linkedin.com/in/mojed7/)
