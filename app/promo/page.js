import Hero from '@/components/Hero';
import About from '@/components/About';
import Address from '@/components/Address';
import Prices from '@/components/Prices';
import InstagramHandle from '@/components/InstagramHandle';
import InstagramFeed from '@/components/InstagramFeed';

export const metadata = {
  title: 'מבצע | חלי כהן - ציפורניים',
  alternates: { canonical: '/promo' },
  openGraph: { title: 'מבצע | חלי כהן - ציפורניים', url: '/promo' },
};

export default function PromoPage() {
  return (
    <>
      <Hero subtitle="אם את מחפשת איכות גבוהה, מחיר טוב ומקום שכיף להגיע אליו." />
      <Address />
      <About />
      <Prices />
      <InstagramHandle />
      <InstagramFeed />
    </>
  );
}
