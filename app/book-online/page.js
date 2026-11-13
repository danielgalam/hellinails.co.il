import Image from 'next/image';
import Link from 'next/link';
import { services, bookingMessage } from '@/lib/services';
import { whatsappLink } from '@/lib/site';

export const metadata = {
  title: 'Book Online | Helli Nails',
  alternates: { canonical: '/book-online' },
  openGraph: { title: 'Book Online | Helli Nails', url: '/book-online' },
};

export default function BookOnlinePage() {
  return (
    <div className="panel booking" dir="ltr">
      <h1 className="serif-italic booking-title">Our Services</h1>
      <ul className="service-grid">
        {services.map((s) => (
          <li key={s.slug} className="service-card">
            <Link href={`/service-page/${s.slug}`} className="service-card-image" tabIndex={-1} aria-hidden="true">
              <Image src={s.image} alt="" fill sizes="(max-width: 760px) 100vw, 290px" />
            </Link>
            <div className="service-card-body">
              <h2 className="serif-italic">
                <Link href={`/service-page/${s.slug}`}>{s.name}</Link>
              </h2>
              <hr />
              <p>{s.duration}</p>
              <p>{s.price}₪</p>
              <a
                href={whatsappLink(bookingMessage(s))}
                className="book-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Book ${s.name}`}
              >
                Book Now
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
