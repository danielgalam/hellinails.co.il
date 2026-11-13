import Script from 'next/script';
import '@fontsource/alef/400.css';
import '@fontsource/alef/700.css';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SocialBar from '@/components/SocialBar';
import { site, siteUrl } from '@/lib/site';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'חלי כהן - ציפורניים | פרויקט הגפן הרצליה',
  description: 'מניקור ג׳ל  ברמה גבוהה ₪140 אני אוהבת להוציא בנות יפות והמטרה שלי היא להפוך אותך ללקוחה מרוצה',
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    siteName: site.name,
  },
};

export const viewport = {
  themeColor: '#f4d8d4',
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <a href="#main" className="skip-link">
          דילוג לתוכן הראשי
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <SocialBar />
        {site.userwayAccount && (
          <Script
            src="https://cdn.userway.org/widget.js"
            data-account={site.userwayAccount}
            data-position="2"
            strategy="lazyOnload"
          />
        )}
      </body>
    </html>
  );
}
