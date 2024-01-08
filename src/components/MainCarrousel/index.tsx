"use client"

import { useEffect, useState } from 'react';
import data from '../../../data.json'
import { Card } from '../Card'




export const MainCarrousel = () => {


const [isOnView, setIsOnView] = useState<string>("")

useEffect(() => {
  const observerOptions: IntersectionObserverInit = {
    rootMargin: "-50% 0% -50% 0% ",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsOnView(entry.target.id);
      }
    });
  }, observerOptions);

  data.forEach((item) => {
    const target = document.querySelector(`#card-${item.id}`);
    observer.observe(target!);
  });

  return () => {
    observer.disconnect();
  };
}, []);

  return (
    <div
      id="scrollArea"
      className="flex flex-col items-center gap-6 px-6 pb-6 relative"
    >
      {data.map((item) => {
        return (
          <Card
            id={`card-${item.id?.toString()}`}
            visible={`card-${item.id?.toString()}` === isOnView ? true : false}
            key={item.name}
            title={item.name}
            artist={item.artist.name}
            image={`/assets/${item.name
              .replaceAll(" ", "-")
              .toLowerCase()}/hero-small.jpg`}
          />
        );
      })}
    </div>
  );
}
