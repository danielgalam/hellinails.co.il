import Link from 'next/link';

export const metadata = {
  title: 'הדף לא נמצא | חלי כהן - ציפורניים',
};

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>הדף לא נמצא</h1>
      <p>מצטערים, הדף שחיפשת לא קיים.</p>
      <Link href="/">חזרה לדף הבית</Link>
    </div>
  );
}
