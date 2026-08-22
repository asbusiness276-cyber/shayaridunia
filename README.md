# Shayari Dunia, Vercel-ready Next.js website

Production-ready multilingual Shayari Dunia website with Hindi, Punjabi and English content.

## Included

- 3 languages: Hindi, Punjabi and English
- 30 emotion/category pages per language
- 90 SEO collection pages in total
- Exactly 18 image quotes with a visible explanation on every collection page
- Copy, share and SVG image-download actions
- Responsive layout, sitemap, robots, canonical URLs, hreflang and structured data
- Automated lint, TypeScript, content, production dependency audit, build and runtime smoke checks

## Requirements

- Node.js 22.x or 24.x
- npm

No database, paid API or secret key is required.

## Local verification

```bash
npm ci
npm run verify
```

The second command must finish successfully before deployment. It runs lint, TypeScript checks, content invariants, a production dependency audit, a production build and live HTTP smoke tests.

For local development:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Vercel deployment

### Git import

1. Upload this folder to a GitHub, GitLab or Bitbucket repository.
2. Import that repository in Vercel.
3. Keep the detected framework as **Next.js**.
4. Add `NEXT_PUBLIC_SITE_URL` with the final public origin, for example `https://shayaridunia.com`.
5. Deploy only after `npm run verify` passes locally.

### Vercel CLI

Authenticate with Vercel in your own terminal, then run:

```bash
npx vercel
npx vercel --prod
```

Never paste a Vercel access token into an AI chat. Use Vercel's browser-based login or an already authenticated local session.

## Antigravity

1. Extract the ZIP.
2. Open the extracted folder as the Antigravity project/workspace.
3. Paste the complete text from `ANTIGRAVITY_PROMPT.txt` into a new agent conversation.
4. Let the agent finish every verification gate and review its browser screenshots and Walkthrough before approving production deployment.

## Domain note

The code defaults canonical URLs and sitemap links to `https://shayaridunia.com`. If the production domain is different, set `NEXT_PUBLIC_SITE_URL` in Vercel before the build.
