# Kovács Béla Zoltán — Microsoft Student Ambassador

Reszponzív, magyar–angol, statikus bemutatkozó oldal. A 2026. novemberi frissítés egy tíztémás technológiai olvasnivaló-szekciót és a Student Ambassador → Associate szintlépést mutatja be.

## Feltöltés

A `dist/` **tartalmát** (nem magát a `dist` mappát) másold a `public_html/` vagy az `ambassador.themastermind.hu` aldomain dokumentumgyökerébe. A `dist/` tartalmazza a főoldalt, az angol `/en/` útvonalat, a `.htaccess`-t, a képeket, a jelvényeket és a CSS-t. A tárhelyen nincs szükség Node.js-re.

## Forrás szerkesztése

- `src/content.mjs` — magyar és angol szövegek, megjelenített Associate szint, URL-konfiguráció
- `src/resources.mjs` — 10 hivatkozás, mindkét nyelv cikkajánlói, CTA-gombok
- `src/render.mjs` — a weboldal HTML-struktúrája, a szintlépés és a blog renderelése
- `src/index.css` — stílusok és mobilos töréspontok
- `public/badges/` — a feltöltött Student Ambassador és Associate jelvények eredeti PNG és optimalizált WebP változatban
- `public/images/` — a személyes fotó
- `public/favicon.svg`, `public/og/` — ikon és megosztási kép

Build: Node.js 18+, `npm run build` (függőségtelepítés nem szükséges).

## SEO / AEO

A kanonikus domain **https://ambassador.themastermind.hu**. Ha változik, a `SITE_URL` értékét módosítani kell a `src/content.mjs`-ben, továbbá a `public/robots.txt` és `public/sitemap.xml` címeket. Utána újra kell buildelni.

A két nyelv szerverről elérhető statikus HTML, canonical, hreflang, Open Graph és JSON-LD (Person, WebPage, FAQPage, ItemList) metaadatokkal. A külső hivatkozások megőrzik az eredeti `wt.mc_id` paramétereket. A weboldal személyes, nem hivatalos Microsoft-vállalati oldal.
