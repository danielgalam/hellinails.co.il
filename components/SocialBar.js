import Image from 'next/image';
import { site } from '@/lib/site';

export default function SocialBar() {
  return (
    <ul className="social-bar" aria-label="רשתות חברתיות">
      <li>
        <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <Image src="/images/icons/instagram.png" alt="" width={30} height={30} />
        </a>
      </li>
      <li>
        <a href={site.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <Image src="/images/icons/facebook.png" alt="" width={30} height={30} />
        </a>
      </li>
    </ul>
  );
}
