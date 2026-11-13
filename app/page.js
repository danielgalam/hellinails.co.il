import Hero from '@/components/Hero';
import About from '@/components/About';
import Address from '@/components/Address';
import Prices from '@/components/Prices';
import InstagramHandle from '@/components/InstagramHandle';
import InstagramFeed from '@/components/InstagramFeed';
import { site, siteUrl } from '@/lib/site';

export const metadata = {
  title: 'חלי כהן - ציפורניים | פרויקט הגפן הרצליה',
  description: 'מניקור ג׳ל  ברמה גבוהה ₪140 אני אוהבת להוציא בנות יפות והמטרה שלי היא להפוך אותך ללקוחה מרוצה',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'חלי כהן - ציפורניים | פרויקט הגפן הרצליה',
    description: 'מניקור ג׳ל  ברמה גבוהה ₪140 אני אוהבת להוציא בנות יפות והמטרה שלי היא להפוך אותך ללקוחה מרוצה',
    url: '/',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NailSalon',
  name: site.name,
  url: siteUrl,
  telephone: site.phoneIntl,
  image: `${siteUrl}/images/logo.png`,
  priceRange: '₪₪',
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.streetAddress,
    addressLocality: site.city,
    addressCountry: 'IL',
  },
  sameAs: [site.instagram, site.facebook],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero subtitle="אם את מחפשת איכות גבוהה, מחיר טוב ומקום שכיף להגיע אליו" />
      <About />
      <Address />
      <Prices />
      <InstagramHandle />
      <InstagramFeed />
    </>
  );
}
