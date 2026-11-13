import Image from 'next/image';
import { site } from '@/lib/site';

export default function Address() {
  return (
    <div className="address narrow">
      <a href={site.maps} target="_blank" rel="noopener noreferrer" className="address-link">
        <Image src="/images/icons/pin.png" alt="" width={15} height={22} className="address-pin" />
        <span>{site.address}</span>
      </a>
    </div>
  );
}
