import Image from 'next/image';
import { notFound } from 'next/navigation';
import { services, getService, bookingMessage } from '@/lib/services';
import { whatsappLink } from '@/lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  const title = `${s.name} | Helli Nails`;
  return {
    title,
    description: s.description,
    alternates: { canonical: `/service-page/${s.slug}` },
    openGraph: { title, description: s.description, url: `/service-page/${s.slug}`, images: [s.image] },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  return (
    <div className="service-page" dir="ltr">
      <div className="service-cover">
        <Image src={s.image} alt="" fill priority sizes="100vw" />
      </div>
      <div className="service-body">
        <div className="service-inner">
          <h1 className="serif-italic">{s.name}</h1>
          <div className="service-info">
            <span>{s.duration}</span>
            <span>{s.price}₪</span>
          </div>
          <a href={whatsappLink(bookingMessage(s))} className="book-btn book-btn--lg" target="_blank" rel="noopener noreferrer">
            Book Now
          </a>
          <hr />
          <h2 className="serif-italic">Service Description</h2>
          <p>{s.description}</p>
          <div className="service-gallery">
            <Image src={s.gallery} alt={s.name} fill sizes="232px" />
          </div>
        </div>
      </div>
    </div>
  );
}
