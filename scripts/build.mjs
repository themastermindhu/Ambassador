import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { render } from '../src/render.mjs';
import { content, EMAIL, LINKEDIN_URL, LEARN_URL, SITE_URL } from '../src/content.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dest = path.join(root,'dist');
await fs.rm(dest,{recursive:true,force:true});
await fs.mkdir(dest,{recursive:true});
await fs.cp(path.join(root,'public'),dest,{recursive:true});
await fs.mkdir(path.join(dest,'assets'),{recursive:true});
await fs.copyFile(path.join(root,'src/index.css'),path.join(dest,'assets/style.css'));
const esc = text => String(text).replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const safeJSON = data => JSON.stringify(data).replaceAll('<','\\u003c');
for (const lang of ['hu','en']) {
  const t=content[lang];
  const url=lang==='hu'?`${SITE_URL}/`:`${SITE_URL}/en/`;
  const locale=lang==='hu'?'hu_HU':'en_US';
  const alternate=lang==='hu'?'en_US':'hu_HU';
  const schema=[
    {'@context':'https://schema.org','@type':'Person','@id':`${SITE_URL}/#person`,name:content.hu.aboutSign,alternateName:[content.en.aboutSign,'Kovacs Bela Zoltan'],url:`${SITE_URL}/`,image:`${SITE_URL}/images/bela-zoltan-kovacs-budapest.jpg`,email:`mailto:${EMAIL}`,sameAs:[LINKEDIN_URL],knowsAbout:['Microsoft Learn','Technology education','Community learning','Microsoft Student Ambassadors'],description:t.status,memberOf:{'@type':'Organization',name:'Microsoft Student Ambassadors',url:'https://studentambassadors.microsoft.com/'}},
    {'@context':'https://schema.org','@type':'WebPage','@id':`${url}#webpage`,url,name:t.pageTitle,description:t.description,inLanguage:lang,isPartOf:{'@type':'WebSite','@id':`${SITE_URL}/#website`,name:'Kovacs Bela Zoltan',url:`${SITE_URL}/`,inLanguage:['hu','en']},about:{'@id':`${SITE_URL}/#person`},primaryImageOfPage:{'@type':'ImageObject',url:`${SITE_URL}/og/og-image.jpg`},mainEntity:{'@id':`${url}#faq`},relatedLink:LEARN_URL},
    {'@context':'https://schema.org','@type':'FAQPage','@id':`${url}#faq`,inLanguage:lang,mainEntity:t.faqs.map(({q,a})=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}}))}
  ];
  const html=`<!doctype html>
<html lang="${lang}"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="theme-color" content="#f8f9f7"><meta name="color-scheme" content="light">
<title>${esc(t.pageTitle)}</title>
<meta name="description" content="${esc(t.description)}">
<meta name="author" content="Kovacs Bela Zoltan"><meta name="robots" content="index,follow,max-image-preview:large">
<meta name="keywords" content="Microsoft Student Ambassador, Microsoft Learn, Kovacs Bela Zoltan, Microsoft Diak Nagykovet, technology education">
<link rel="canonical" href="${url}"><link rel="alternate" hreflang="hu" href="${SITE_URL}/"><link rel="alternate" hreflang="en" href="${SITE_URL}/en/"><link rel="alternate" hreflang="x-default" href="${SITE_URL}/">
<meta property="og:type" content="profile"><meta property="og:site_name" content="Kovacs Bela Zoltan"><meta property="og:locale" content="${locale}"><meta property="og:locale:alternate" content="${alternate}">
<meta property="og:title" content="${esc(t.pageTitle)}"><meta property="og:description" content="${esc(t.description)}"><meta property="og:url" content="${url}"><meta property="og:image" content="${SITE_URL}/og/og-image.jpg"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="${esc(t.aboutSign)} - Microsoft Student Ambassador">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(t.pageTitle)}"><meta name="twitter:description" content="${esc(t.description)}"><meta name="twitter:image" content="${SITE_URL}/og/og-image.jpg">
<link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><link rel="manifest" href="/site.webmanifest">
<link rel="preload" href="/images/bela-zoltan-kovacs-budapest.webp" as="image" type="image/webp">
<link rel="stylesheet" href="/assets/style.css">
<script type="application/ld+json">${safeJSON(schema)}</script>
</head><body>${render(lang)}</body></html>`;
  const target=path.join(dest,lang==='hu'?'index.html':'en/index.html');
  await fs.mkdir(path.dirname(target),{recursive:true});
  await fs.writeFile(target,html,'utf8');
  console.log(`${lang.toUpperCase()} ready: ${path.relative(root,target)} (${Buffer.byteLength(html)} bytes)`);
}
