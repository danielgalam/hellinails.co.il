import { services } from '@/lib/services';
import { siteUrl } from '@/lib/site';

export default function sitemap() {
  const pages = ['', '/accesability', '/book-online', '/promo'];
  return [
    ...pages.map((p) => ({ url: `${siteUrl}${p}`, changeFrequency: 'monthly', priority: p === '' ? 1 : 0.6 })),
    ...services.map((s) => ({ url: `${siteUrl}/service-page/${s.slug}`, changeFrequency: 'monthly', priority: 0.5 })),
  ];
}
