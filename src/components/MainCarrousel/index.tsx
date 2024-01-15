"use client"

import { ChevronsUp } from "react-feather";
import data from '../../../data.json';
import { Card } from '../Card';
import { headerInterface } from '../Header';
import useSlideshow from "@/utils/useSlideshow";


interface carrouselInterface extends headerInterface {
  startSlideShow:boolean;
}


export const MainCarrousel = ({startSlideShow,setStartSlideShow}: carrouselInterface) => {

const {backToTop,slideshowStart,useAnimationMaximizeCover,isOnView} = useSlideshow({data,setStartSlideShow})


  if (startSlideShow){
    slideshowStart()
  }

  // useAnimationMaximizeCover()

  return (
    <div
      id="scrollArea"
      className="flex flex-col items-center gap-6 px-6 pb-6 relative bg-yellow-400"
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
      <div
        onClick={backToTop}
        className="absolute cursor-pointer w-40 rounded-3xl items-center flex justify-center h-10 bg-[#ffffffc6] bottom-8 z-20"
      >
        <p className="text-black font-bold font-baskerville">
          Volver al inicio
        </p>
        <ChevronsUp />
      </div>
    </div>
  );
};
