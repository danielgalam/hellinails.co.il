import Image from 'next/image';
import { site } from '@/lib/site';

export default function Hero({ subtitle }) {
  return (
    <section className="hero">
      <Image
        src="/images/hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero-bg"
      />
      <div className="hero-content">
        <h1 className="hero-title">חלי כהן - ציפורניים</h1>
        <p className="hero-subtitle">{subtitle}</p>
        <div className="hero-mobile-image">
          <Image
            src="/images/hero-mobile.png"
            alt=""
            width={1311}
            height={360}
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero-buttons">
          <a href={site.whatsapp} className="pill-btn pill-btn--whatsapp" target="_blank" rel="noopener noreferrer">
            <Image src="/images/icons/whatsapp.png" alt="" width={34} height={34} />
            <span>שלחי לי הודעה בוואטסאפ</span>
          </a>
          <a href={site.instagramDm} className="pill-btn pill-btn--instagram" target="_blank" rel="noopener noreferrer">
            <Image src="/images/icons/instagram-white.png" alt="" width={29} height={29} />
            <span>שלחי לי הודעה באינסטגרם</span>
          </a>
        </div>
      </div>
    </section>
  );
}
