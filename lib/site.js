// Central place for the business details used across the site.
// Edit these values to update phone numbers, links, address etc. everywhere at once.

// The public URL of the site. Set NEXT_PUBLIC_SITE_URL in Vercel (e.g. https://www.your-new-domain.co.il)
// so canonical links, the sitemap and social previews use the new domain.
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : null;

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || vercelUrl || 'http://localhost:3000').replace(/\/$/, '');

export const site = {
  name: 'חלי כהן - ציפורניים',
  englishName: 'Helli Nails',
  phone: '054-5469434',
  phoneHref: 'tel:0545469434',
  phoneIntl: '+972545469434',
  whatsapp: 'https://wa.me/972545469434',
  instagramAccount: 'hellis_nails',
  instagramHandle: '@hellis_nails',
  instagram: 'https://www.instagram.com/hellis_nails/',
  instagramDm: 'https://ig.me/m/hellis_nails',
  facebook: 'https://www.facebook.com/profile.php?id=100089653910595',
  maps: 'https://maps.app.goo.gl/EYL3bhT9ruxoFnjz7?g_st=com.google.maps.preview.copy',
  address: 'אני נמצאת בבר כוכבא 31, פרויקט הגפן, נווה ישראל הרצליה',
  streetAddress: 'בר כוכבא 31, פרויקט הגפן',
  city: 'הרצליה',
  email: 'Chelligalam@gmail.com',
  // UserWay accessibility widget account (same widget as on the Wix site).
  userwayAccount: 'ZcTrFRk48i',
};

export function whatsappLink(message) {
  return message ? `${site.whatsapp}?text=${encodeURIComponent(message)}` : site.whatsapp;
}
