# Andrea Díez UGC Portfolio

An Astro implementation of Andrea Díez's published UGC portfolio.

## Development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run check
npm run build
```

## Lighthouse CI

Run the repeatable local audit with Chrome or Chromium installed and available on your `PATH`:

> On WSL, Linux Chrome or Chromium is required. Set `CHROME_PATH` to override automatic Linux browser discovery.

```bash
npm run lighthouse
```

The command builds the site, audits the Spanish (`/`) and English (`/en/`) routes three times each, and fails when the representative score falls below Performance 0.80 or Accessibility, Best Practices, and SEO 0.90. HTML and JSON reports are written to `lighthouse-reports/`. Performance scores can vary across local machines and available system resources.

## Media notes

The portfolio includes 32 poster frames recovered from the authorized Canva page. Until individual video sources are configured in `src/data/portfolio-videos.json`, every card uses the shared placeholder video. Video sources are attached only when their card nears the viewport, while poster frames render immediately, so the initial page load does not fetch the complete portfolio.

The personal imagery in `public/images` was also recovered from the public page. Published Canva layout assets that are not visible in the reconstructed page (individual client logos and redundant screen-density variants) were deliberately not copied. Typography uses the public Google Fonts delivery for Playfair Display and DM Sans; system fallbacks are supplied if it is unavailable.
