# Kovacs Bela Zoltan | Microsoft Student Ambassador

Bilingual, accessibility-conscious and SEO-ready static personal website.

## Deploy - no build needed

1. Open the `dist/` directory.
2. Upload **its contents** (including `en/`, `assets/`, `images/`, and `og/`) to the web hosting document root, usually `public_html/` or `www/`.
3. Make sure your host serves `index.html` for `/` and `en/index.html` for `/en/`.

Alternatively use the standalone `dist.zip` archive provided with the project.

## Make changes

- Edit Hungarian and English text: `src/content.mjs`
- Edit page structure: `src/render.mjs`
- Edit design and responsive styles: `src/index.css`
- Replace the hero image: `public/images/bela-zoltan-kovacs-budapest.webp` and `.jpg`
- Edit icons or sharing preview: `public/favicon.svg`, `public/og/og-image.jpg`
- Rebuild with Node.js 18 or later: `npm run build` (no npm install is needed).

## SEO and URL setup

The canonical domain is the original project's `https://themastermind.hu`.
If the site is hosted at a different domain, update `SITE_URL` in `src/content.mjs` plus the URLs in `public/robots.txt` and `public/sitemap.xml`, then run `npm run build` again.

Includes unique Hungarian/English metadata, canonical/hreflang tags, Open Graph/Twitter cards, WebPage/Person/FAQPage JSON-LD, sitemap, robots.txt, accessible semantic HTML, the language switch, and a working contact email and LinkedIn link.

## Attribution

The hero photograph came from the supplied user image. The site is an independent personal webpage and is not an official Microsoft corporate website.
