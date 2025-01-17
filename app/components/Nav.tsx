import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Nav() {
  return (
    <nav className="flex flex-col justify-center items-center w-full pb-12">
      <Image
        src="/PM-C2DIV-SOCIAL.png"
        alt="Your Image"
        width={100}
        height={100}
        className="mb-4 mt-4"
      />
      <ul className="flex gap-10 font-mono text-sm">
        <li>
          <Link href="/" className="font-mono">[A]</Link>
        </li>
        <li>
          <Link href="https://rtw-001.vercel.app/" className="font-mono">[CATALOGUE]</Link>
        </li>
        <li>
          <Link href="/c2" className="font-mono">[C²]</Link>
        </li>
        <li>
          <Link href="/distribution" className="font-mono">[DIST]</Link>
        </li>
        <li>
          <Link href="/dispatch" className="font-mono">[DISPATCH]</Link>
        </li>
      </ul>
    </nav>
  );
}
