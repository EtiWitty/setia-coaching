# Setia Coaching

Bilingual (Persian / English) B2B website for Setia's business coaching packages: manager coaching, leadership team coaching, executive coaching and company-wide coaching culture programs.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints. Add `?lang=en` or `?lang=fa` to open a specific language; visitors can switch with the button in the header.

## Editing content

All text, in both languages, is in `src/content.ts`. The `en` and `fa` objects have the same shape, so update both when you change a section or package.

- Contact form recipient: `src/config.ts` (`CONTACT_EMAIL`, still a placeholder)
- Colors and fonts: `src/styles.css`
- Page sections: `src/components/sections.tsx`

## Deploy

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `main`. Enable it under **Settings → Pages → Source: GitHub Actions**. On a free GitHub plan, Pages requires the repository to be public.
