# Shayari Dunia project rules

- Treat this as an existing standard Next.js App Router project. Do not rebuild it from scratch.
- Preserve Hindi, Punjabi and English, all 30 emotions, and exactly 18 image quotes plus explanations per collection.
- Never deploy before `npm run verify` passes without skipped or disabled checks.
- Do not hide failures with `|| true`, ignored exit codes, disabled lint rules or relaxed TypeScript settings.
- Inspect the responsive UI in a real browser, including console and failed network requests, before deployment.
- Do not add a database, CMS, authentication system or external API unless the user explicitly requests it.
- Never request, print or commit secrets. Use the user's authenticated Vercel session.
- After deployment, smoke-test the production URL and provide an evidence-based pass/fail report.
