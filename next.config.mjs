/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      // Sitemap files the old Wix site published; Google may still request them.
      { source: '/pages-sitemap.xml', destination: '/sitemap.xml', permanent: true },
      { source: '/booking-services-sitemap.xml', destination: '/sitemap.xml', permanent: true },
    ];
  },
};

export default nextConfig;
