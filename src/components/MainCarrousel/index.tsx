"use client"

import useSlideshow from "@/utils/useSlideshow";
import { ChevronsUp } from "react-feather";
import data from '../../../data.json';
import { Card } from '../Card';
import { headerInterface } from '../Header';


interface carrouselInterface extends headerInterface {
  startSlideShow:boolean;
}


export const MainCarrousel = ({startSlideShow,setStartSlideShow}: carrouselInterface) => {

const {backToTop,useAnimationMaximizeCover,isOnView} = useSlideshow({data,setStartSlideShow})

  useAnimationMaximizeCover();

  return (
    <div
      id="scrollArea"
      className="flex sm:flex-row sm:flex-wrap flex-col sm:items-center sm:justify-center items-center gap-6 px-6 pb-6 relative"
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
          Back to the top
        </p>
        <ChevronsUp />
      </div>
    </div>
  );
};
