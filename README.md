# DOSCAR04 sales demo

A personalized Russian-language automotive service and detailing demo for Doscar / DOSCAR04 in Aktobe, Kazakhstan.

Built from the existing Apex project's Next.js App Router structure, font system, motion utilities and magnetic button component. The composition, service catalogue, actual workshop gallery, rating treatment, contact section and mobile layout were designed specifically around DOSCAR04's public identity and verified business information. The original Apex checkout, repository and deployment are separate and unchanged.

## Run locally

Requires Node.js 20.9 or later; production uses Node.js 24.

```sh
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
```

The project uses Next.js 16, TypeScript, Tailwind CSS, Framer Motion and Lucide. Contact actions open WhatsApp, the phone dialler, Instagram or 2GIS. There is no booking backend or database. No environment secrets are required.

## Research and imagery

- [Verified facts and source notes](research/business-source-notes.md)
- [Image provenance, original dimensions and credits](research/imagery.md)
- [QA record](research/qa-report.md)

The hero is visibly labelled atmospheric photography by Erik Mclean on Unsplash. The gallery and frontage are real photographs from the exact Doscar 2GIS album. The small logo is the public Instagram avatar. External photography is never described as the business's work.

Hours differ between 2GIS and Instagram; the contact section shows both and asks visitors to confirm. No unverified service prices, guarantees, experience claims or testimonials are included. Ratings are a dated public snapshot.

## Browser verification

Start the app on port 3006, or set `QA_BASE_URL` to a running local/production URL:

```sh
QA_BASE_URL=https://doscar04-demo.vercel.app node tools/qa.cjs
```

PowerShell:

```powershell
$env:QA_BASE_URL='https://doscar04-demo.vercel.app'
$env:QA_BROWSER_PATH='C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
node tools/qa.cjs
```

`QA_BROWSER_PATH` is optional when Playwright's Chromium is installed. Screenshots and the JSON report are written to the ignored `research/qa` directory. The checks cover seven viewport sizes, navigation, six service panels, three image dialogs, mobile controls, image loading, map loading, contact destinations and reduced motion.

## Demo publishing

The production URL is https://doscar04-demo.vercel.app. GitHub and Vercel use the dedicated `doscar04-demo` project. The demo is marked `noindex, nofollow` and has a small disclosure in the footer. Update the dated facts and confirm the schedule with the owner before treating it as an official business website.
