import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="p-6 border-b-[1px] border-semigray flex items-center justify-between mb-6">
      <Link href={"/"}>
        <Image
          priority={true}
          width={113}
          height={32}
          src={"/assets/galleria.png"}
          alt="galleria logo"
        />
      </Link>
      <p className="font-baskerville text-[9px] tracking-[2px] ">
        START SLIDESHOW
      </p>
    </header>
  );
}
