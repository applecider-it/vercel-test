'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Page() {
  const [list, setList] = useState<string[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = ['aaa', 'bbb'];
      setList(data);
    }

    fetchData();
  }, []);

  return (
    <ul>
      {list.map((item) => (
        <li key={item}>
          <Link
            href={`/development/param-test/${item}`}
            className="app-link-normal"
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
}
