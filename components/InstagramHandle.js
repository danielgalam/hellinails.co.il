import Image from 'next/image';
import { site } from '@/lib/site';

export default function InstagramHandle({ textHref = site.instagram, iconHref = site.instagram }) {
  return (
    <div className="ig-handle-wrap">
      <div className="ig-handle">
        <a href={iconHref} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="ig-handle-icon">
          <Image src="/images/icons/instagram.png" alt="" width={39} height={39} />
        </a>
        <a href={textHref} target="_blank" rel="noopener noreferrer" className="ig-handle-text" dir="ltr">
          {site.instagramHandle}
        </a>
      </div>
    </div>
  );
}
