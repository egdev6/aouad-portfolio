# Andrea Díez UGC Portfolio

An Astro implementation of Andrea Díez's published UGC portfolio.

## Development

```bash
npm install
npm run dev
```

## CI validation

GitHub Actions runs the `Validate` job in the `CI` workflow for every pull request and every push to `main`. Configure the `Validate` check as a required merge gate for `main` in the repository branch rules after its first successful remote run.

Run the CI equivalent locally:

```bash
npm ci
npm run check
npm run build
```

## Netlify deployment

Netlify uses the native Git integration and the versioned `netlify.toml` configuration.

1. Import the repository in Netlify and leave the base directory empty (the repository root).
2. Set `main` as the production branch in the Netlify UI; Netlify does not provide a versioned configuration key for selecting it.
3. Keep deploy previews enabled only if they are wanted for pull-request review.

The build command is `npm run build`, the publish directory is `dist`, and builds use Node `22.12.0`. No GitHub deployment secrets are required.

## Lighthouse CI

Lighthouse is intentionally local and is not part of GitHub Actions because its browser setup and metrics are environment-sensitive. Run the repeatable local audit with Chrome or Chromium installed and available on your `PATH`:

> On WSL, Linux Chrome or Chromium is required. Set `CHROME_PATH` to override automatic Linux browser discovery.

```bash
npm run lighthouse
```

The command builds the site, audits the Spanish (`/`) and English (`/en/`) routes three times each, and fails when the representative score falls below Performance 0.80 or Accessibility, Best Practices, and SEO 0.90. HTML and JSON reports are written to `lighthouse-reports/`. Performance scores can vary across local machines and available system resources.

## Media notes

The portfolio includes 32 poster frames recovered from the authorized Canva page. Until individual video sources are configured in `src/data/portfolio-videos.json`, every card uses the shared placeholder video. Video sources are attached only when their card nears the viewport, while poster frames render immediately, so the initial page load does not fetch the complete portfolio.

The personal imagery in `public/images` was also recovered from the public page. Published Canva layout assets that are not visible in the reconstructed page (individual client logos and redundant screen-density variants) were deliberately not copied. Typography uses the public Google Fonts delivery for Playfair Display and DM Sans; system fallbacks are supplied if it is unavailable.
