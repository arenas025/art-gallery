'use client'

import { Header } from '@/components/Header';
import { MainCarrousel } from '@/components/MainCarrousel';
import { useState } from 'react';

export default function Home() {

  const [startSlideShow, setStartSlideShow] = useState<boolean>(false)

  return (
    <main>
      <Header/>
      <MainCarrousel setStartSlideShow={setStartSlideShow} startSlideShow={startSlideShow} />
    </main>
  );
}
