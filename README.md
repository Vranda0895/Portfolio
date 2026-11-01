# Vranda Agarwal — Portfolio

React + TypeScript + Vite. Design: ivory `#F4F0E8`, black `#171717`, vermilion `#E53B2F`; Instrument Serif, DM Sans, JetBrains Mono.

## Run

```bash
npm install
npm run dev      # local development
npm run build    # type-check + production build
```

## Updating content

Everything editable lives in `src/data/content.ts`:

- `RESUME_URL` — put your PDF in `public/` (e.g. `public/Vranda-Agarwal-Resume.pdf`) and set this to `'/Vranda-Agarwal-Resume.pdf'`.
- `CONTACT_LINKS` — add `value` and `href` for Email, GitHub, LinkedIn.
- `PROJECTS` — add `githubUrl`, `liveUrl`, or better descriptions.
- `ACTIVITIES` and `ACHIEVEMENTS` — add verified entries; the placeholders disappear automatically.
- `DESIGN_WORKS` — Canva links for the "My Design Work" gallery.
