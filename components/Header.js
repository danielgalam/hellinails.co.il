import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="header-logo" aria-label="חלי כהן ציפורניים - דף הבית">
          <Image src="/images/logo.png" alt="HC Nail Artist" width={122} height={80} priority />
        </Link>
        <a href={site.phoneHref} className="header-call">
          התקשרי עכשיו 0545469434
        </a>
      </div>
    </header>
  );
}
