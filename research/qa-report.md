# Verification record

Verified 11 October 2026 using Playwright with Microsoft Edge (Chromium) and the Codex in-app browser.

- `npm run lint`, `npm run typecheck` and `npm run build` passed.
- `npm audit --omit=dev`: zero reported production dependency vulnerabilities.
- Desktop: 1920×1080, 1440×900 and 1280×800; tablet: 768×1024; mobile: 390×844, 375×812 and 320×740. No horizontal overflow; the main hero CTA is visible at every tested size.
- All six service panels open/close and generate the correct service-specific WhatsApp message.
- All three real gallery images open in a dialog; the close control and Escape work.
- Header navigation reaches all four sections. Mobile navigation opens, closes and reaches contacts. Escape restores focus to the menu button; the mobile contact bar remains visible.
- Contact destinations were checked for the verified phone, Instagram account, 2GIS listing/route and WhatsApp number. No calls or messages were sent.
- Actual business photos, the decorative hero and logo load. The OpenStreetMap frame loads and was visually inspected on mobile.
- Reduced-motion mode keeps the hero static and all content visible.
- Desktop/mobile screenshots of every major section were reviewed. Final polish fixed small-screen text spacing, contact-heading wrapping, hero photo-credit placement and gallery image request sizes.
- No browser console errors or unhandled page errors in the completed local run. Image requests cancelled during viewport changes are recorded as `ERR_ABORTED`, separately from load failures.

The production build emits a React 18 support deprecation notice for the future Next.js 17 release. The current build succeeds; React 18 was retained from Apex to keep the inherited components stable.

The repeatable browser check is `tools/qa.cjs`. Raw JSON reports and screenshots are kept locally under the ignored `research/qa` directory.

Production verification will be recorded after publishing.
