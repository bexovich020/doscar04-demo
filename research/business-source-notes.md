# DOSCAR04 research snapshot — 11 October 2026

## Primary sources

- 2GIS contact listing: https://2gis.kz/aktobe/firm/70000001116521660
- 2GIS service information: https://2gis.kz/aktobe/firm/70000001116521660/tab/info
- 2GIS business photo album: https://2gis.kz/aktobe/firm/70000001116521660/tab/photos
- Instagram profile: https://www.instagram.com/service_dos.04/

2GIS was read through live web extraction and direct HTTP. Instagram web extraction was throttled; direct HTTP returned the public profile metadata, description, and thumbnail. Instagram posts were not exposed by the logged-out page, so post captions were not used.

## Verified business facts

- Name on 2GIS: Doscar, category Автосервис. Instagram logo spelling: DOSCAR04 DETAILING.
- Address: Улица Тургенева, 93Б, Актобе, Астана район.
- 2GIS live rating: 5, 20 оценок; 16 written reviews; 54 media items. The album API identifies 44 photos and 10 videos.
- 2GIS advertisement directly names замена масла, детейлинг, автоэлектрик, тонировка.
- 2GIS information directly lists аппаратная замена масла; нанесение плёнки; перетяжка и ремонт салона; шумоизоляция; ремонт электронных систем; компьютерная диагностика; обслуживание климатических систем; установка и ремонт автооптики; автосигнализации; ремонт стартеров и генераторов; аксессуары и масла.
- The actual red sign photo independently confirms полировка, химчистка, бронеплёнка, BI-LED modules, Android installation, cameras 360°, accessories sale and installation.
- Payment methods listed by 2GIS: card, cash, bank, card transfer, QR. Customer Wi-Fi is listed.
- Instagram public bio says KASPI RED and РАССРОЧКА. Avoid attaching unverified term lengths, finance promises or eligibility details.
- No reliable published service prices were retrieved. Prices tab did not expose values. Product photographs occasionally show handwritten prices; these are not service prices and are not suitable for current public pricing.

## Hours discrepancy

2GIS live listing: ежедневно 09:00–21:00; зимний период пн–вс 09:00–20:00. Instagram bio: без выходных 09:00–19:00. Use the current 2GIS schedule for this demo and suggest confirming the visit by WhatsApp. Do not claim the hours were confirmed directly with staff.

## Visual direction

The real facade uses saturated red, white text, and black outlines. The actual Instagram avatar uses a black background, red car outline, white DOSCAR04 wordmark, and DETAILING underneath. Black/red/white is therefore grounded in existing branding.

`public/images/business/instagram-logo.webp` is the actual avatar, only 100×100. Render around 48–72 CSS pixels, or use a plain text DOSCAR04 wordmark with the thumbnail beside it. Do not enlarge it as a hero logo.

## Selected assets

All selected photos are from the exact 2GIS business album. Most carry the visible credit 'Фотография от пользователя', owner Big Boss. `assets-manifest.json` preserves source URLs, IDs, source dimensions, and credit. Photos demonstrate the listed business and its location but should not be described as photos supplied directly by management.

| Optimized asset | Dimensions | Approx bytes | Use |
| --- | --- | --- | --- |
| frontage.webp | 1168×1600 | 164218 | Actual red frontage, address/location section; portrait crop |
| doscar-cars-night.webp | 1400×2489 | 237968 | Two cars outdoors at night, selected actual-business gallery photo |
| detailing-work.webp | 720×1280 | 160038 | Actual black Toyota being washed/foamed; detailing section |
| workshop-interior.webp | 1400×1867 | 178164 | Actual workshop with Lexus; workshop section |
| oil-selection.webp | 1400×788 | 114218 | Landscape oil range, service/products strip |
| oil-shelf.webp | 1280×720 | 133598 | Landscape oil shelf, maintenance section |
| oil-display.webp | 1206×1150 | 122296 | Bardahl retail display |
| service-sign.webp | 900×1600 | 127320 | Evidence of service list; optional gallery/location |
| instagram-logo.webp | 100×100 | 2398 | Small authentic brand avatar |

Avoid the apparent synthetic promotional mechanic image (#18 in the research contact sheet). The selected work photos above are real and are more useful for this demo. A landscape hero is possible using oil-selection, but the frontage and night cars fit portrait/editorial compositions best.

Raw source captures and research scripts are for internal research; do not include them in deployed static assets. Publish only selected assets from `public/images/business`.
