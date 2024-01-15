'use client'

import { Header } from '@/components/Header';
import { MainCarrousel } from '@/components/MainCarrousel';
import { useState } from 'react';

export default function Home() {

  const [startSlideShow, setStartSlideShow] = useState<boolean>(false)

  return (
    <main className="bg-red-500">
      <Header setStartSlideShow={setStartSlideShow} />
      <MainCarrousel setStartSlideShow={setStartSlideShow} startSlideShow={startSlideShow} />
    </main>
  );
}
