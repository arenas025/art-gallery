'use client'
import React, { Dispatch, SetStateAction } from 'react'
import Image from 'next/image';
import Link from 'next/link';

export interface headerInterface {
  setStartSlideShow?: Dispatch<SetStateAction<boolean>>
}

export const Header = ({setStartSlideShow}: headerInterface) => {
  return (
    <header className="p-6 border-b-[1px]  border-semigray flex items-center justify-between mb-6">
      <Link href={"/"}>
        <Image
          priority={true}
          width={113}
          height={32}
          src={"/assets/galleria.png"}
          alt="galleria logo"
        />
      </Link>
      <p onClick={()=>{setStartSlideShow!(true)}} className="font-baskerville text-[9px] tracking-[2px] cursor-pointer ">
        START SLIDESHOW
      </p>
    </header>
  );
};
