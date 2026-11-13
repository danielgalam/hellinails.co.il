import { site } from '@/lib/site';

export const metadata = {
  title: 'Members | Helli Nails',
  alternates: { canonical: '/members' },
  robots: { index: false },
};

export default function MembersPage() {
  return (
    <div className="members-wrap">
      <div className="panel members" dir="ltr">
        <h1>Log In to Connect With Members</h1>
        <p>View and follow other members, leave comments &amp; more.</p>
        <a href={site.whatsapp} className="book-btn members-btn" target="_blank" rel="noopener noreferrer">
          Log In
        </a>
      </div>
    </div>
  );
}
