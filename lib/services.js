// Services from the "Book Online" page of the original site.
const description =
  'Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.';

export const services = [
  { slug: 'classic-manicure', name: 'Classic Manicure', duration: '20 min', price: 30, gallery: '/images/services/classic-manicure-gallery.jpg' },
  { slug: 'nail-extensions', name: 'Nail Extensions', duration: '50 min', price: 60, gallery: '/images/services/nail-extensions-gallery.jpg' },
  { slug: 'deluxe-manicure', name: 'Deluxe Manicure', duration: '30 min', price: 40 },
  { slug: 'mani-pedi', name: 'Mani-Pedi', duration: '40 min', price: 60, gallery: '/images/services/mani-pedi-gallery.jpg' },
  { slug: 'classic-pedicure', name: 'Classic Pedicure', duration: '20 min', price: 15 },
  { slug: 'medical-pedi', name: 'Medical Pedi', duration: '45 min', price: 50 },
  { slug: 'gel-polish-removal', name: 'Gel Polish Removal', duration: '15 min', price: 10 },
  { slug: 'gel-polish-manicure', name: 'Gel Polish Manicure', duration: '45 min', price: 50 },
  { slug: 'custom-design', name: 'Custom Design', duration: '1 hr', price: 80 },
].map((s) => ({
  description,
  image: `/images/services/${s.slug}.jpg`,
  ...s,
  gallery: s.gallery || `/images/services/${s.slug}.jpg`,
}));

export function getService(slug) {
  return services.find((s) => s.slug === slug);
}

export function bookingMessage(service) {
  return `היי חלי, אשמח לקבוע תור ל-${service.name}`;
}
