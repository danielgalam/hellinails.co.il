import Link from 'next/link';
import { site } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <a href="tel:054-5469434" className="footer-phone" dir="ltr">
        {site.phone}
      </a>
      <Link href="/accesability" className="footer-a11y">
        הצהרת נגישות
      </Link>
    </footer>
  );
}
