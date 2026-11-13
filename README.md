# חלי כהן - ציפורניים | Helli Nails

A Next.js (React) rebuild of the Wix site at https://www.hellinails.co.il. It has every page from the original site, and the URLs are the same, so old links keep working on the new domain.

| Page | URL |
| --- | --- |
| Home | `/` |
| Promo (landing page) | `/promo` |
| Accessibility statement | `/accesability` |
| Book online (services list) | `/book-online` |
| Service pages (9) | `/service-page/classic-manicure`, `/service-page/nail-extensions`, `/service-page/deluxe-manicure`, `/service-page/mani-pedi`, `/service-page/classic-pedicure`, `/service-page/medical-pedi`, `/service-page/gel-polish-removal`, `/service-page/gel-polish-manicure`, `/service-page/custom-design` |
| Members | `/members` |

The build also generates `sitemap.xml`, `robots.txt` and a favicon.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
```

```bash
npm run dev
```

Then open http://localhost:3000.

## Deploy to Vercel

1. In Vercel choose **Add New → Project** and import this GitHub repository. Vercel detects Next.js automatically, so you don't need to change any build settings.
2. Under **Settings → Environment Variables**, add `NEXT_PUBLIC_SITE_URL` set to your new domain, for example `https://www.your-new-domain.co.il`. Canonical links, the sitemap and social share previews use this value.
3. Under **Settings → Domains**, add the new domain and follow Vercel's DNS instructions.
4. Redeploy so the environment variable takes effect.

## Where to edit content

| What | File |
| --- | --- |
| Phone, WhatsApp, Instagram, Facebook, address, email, Maps link | `lib/site.js` |
| Prices on the home page (מניקור ג׳ל ₪140 …) | `components/Prices.js` |
| "About" text | `components/About.js` |
| Booking services (names, durations, prices, descriptions) | `lib/services.js` |
| Accessibility statement | `app/accesability/page.js` |
| Instagram gallery posts | `data/instagram-posts.json` + images in `public/images/instagram/` |
| Colors, fonts, spacing | `app/globals.css` |

## Differences from the Wix site

- **Booking:** Wix Bookings doesn't exist outside Wix, so each **Book Now** button opens a WhatsApp chat with the service name pre-filled. The members area's **Log In** button also opens WhatsApp.
- **Instagram feed:** The Wix Instagram widget was replaced by a static gallery of the 39 most recent posts, saved on 13 Nov 2026. It includes **Load More** and a photo viewer. To add new posts, put the images in `public/images/instagram/` and list them in `data/instagram-posts.json`.
- **Accessibility widget:** The same UserWay widget (account `ZcTrFRk48i`) is loaded. If UserWay asks you to approve the new domain, add it in your UserWay dashboard.
- **Mobile:** The Wix site had a separate mobile layout. This site is responsive and follows that mobile layout.
