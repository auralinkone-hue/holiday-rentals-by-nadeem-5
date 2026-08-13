# Holiday Rentals by Nadeem — Website

A premium, static hospitality website. Pure HTML/CSS/JS — no build step, no framework, ready for GitHub + Cloudflare Pages.

## File structure

```
index.html        All page markup
css/styles.css     Design system (tokens, layout, motion)
js/main.js         Property data, card rendering, scroll reveal, lightbox, nav
```

## ⚠️ Before you launch: swap in real photography

No real property photos were provided, so every image on the site is an
elegant placeholder (a warm gradient block with a thin travel-line motif
and a text label) — never a stock photo standing in as if it were real.
To finish the site:

1. Add your real photos to `assets/images/` (folder already created).
2. Replace each `<div class="placeholder-image">…</div>` block with an
   `<img src="assets/images/your-file.jpg" alt="…" loading="lazy">`.
   Key spots to update:
   - Hero background (`.hero-bg`)
   - Each property card image (`placeholderImage()` in `js/main.js`,
     used by `renderPropertyCard()`)
   - The Orange Room gallery (4 images in `index.html`, `#gallery`, and
     the matching entries inside `initLightbox()` in `js/main.js`)
   - Nadeem's portrait (`.about-portrait`)
   - Location visual (`.location-visual`)
   - Instagram grid tiles (`.insta-grid`)
3. Export images as WebP where possible, sized close to their display
   size, and keep hero/gallery images under ~300KB for fast loading.

## Adding or editing properties

All property content lives in the `PROPERTIES` array at the top of
`js/main.js`. Add a new object to the array (or edit an existing one) and
the card, its booking button (Airbnb or WhatsApp), amenities list and
Instagram link all render automatically — no HTML editing required.

```js
{
  id: 'unique-slug',
  badge: 'Optional label',
  name: 'Property Name',
  location: 'Area, City',
  type: 'Property type',
  facts: [{ icon: 'guests', label: '2 Guests' }],
  description: 'Short description…',
  amenities: ['Item one', 'Item two'],   // leave [] if unconfirmed
  booking: { type: 'whatsapp' },          // or { type: 'airbnb', url: '…' }
  instagram: 'https://www.instagram.com/…',
}
```

## Booking logic

- **Airbnb properties** show a black "Book on Airbnb" button linking directly to the listing, opened in a new tab.
- **Direct (WhatsApp) properties** show a "Book on WhatsApp" button linking to `wa.me/923001771221` with a pre-filled message naming the property, opened in a new tab.
- Every card also includes "View More on Instagram", linking to the property's specific post where one was supplied, or the profile otherwise.

## Deploying to Cloudflare Pages via GitHub

1. Push this folder to a GitHub repository.
2. In Cloudflare Pages, create a new project and connect the repository.
3. Build command: leave blank (static site).
4. Build output directory: `/` (repository root).
5. Deploy — Cloudflare will serve `index.html` directly.

## Notes

- Respects `prefers-reduced-motion` — parallax and larger transforms are disabled for users who request reduced motion.
- Keyboard-accessible: visible focus states, lightbox closes on `Esc`, arrow-key gallery navigation.
- No external JS libraries; only Google Fonts (Fraunces, Inter) are loaded from a CDN.
