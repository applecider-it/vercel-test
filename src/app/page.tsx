import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div>
        <Link href="/development" className="app-link-normal">
          development
        </Link>
      </div>
    </div>
  );
}
