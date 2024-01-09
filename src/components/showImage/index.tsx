"use client"

import Image from 'next/image';
import React, { Dispatch, SetStateAction, useState } from 'react'
import { animated, useSpring } from 'react-spring';

interface showImageInterface {
  src: string;
  setShowImageActive: Dispatch<SetStateAction<boolean>>;
}

export const ShowImage = ({src,setShowImageActive}: showImageInterface) => {
  const [springs,apiSprings] = useSpring(() => ({
    from: { scale: 0 },
  }));
  
  const [subContainer, subContainerApi] = useSpring(() => ({
    from:{
      scale:0
    }
  }));
  

  const [imageLoad, setImageLoad] = useState<boolean>(false)

  const closeComponent = () => {
    subContainerApi.start({
      from: {
        scale: 1,
      },
      to: {
        scale: 0,
      },
    });

    apiSprings.start({
      from: {
        scale: 1,
      },
      to: {
        scale: 0,
      },
    });
    setTimeout(() => {
      setShowImageActive(false);
    },800);
  } 

  const onLoadImagine = () => {
    setImageLoad(true);
    subContainerApi.start({
      from: { scale: 0 },
      to: { scale: 1 },
    });
    apiSprings.start({
      from: { scale: 0 },
      to: { scale: 1 },
    });
  }
  
  return (
    <div className="fixed w-screen h-screen">
      <animated.div
        className="fixed scale-0 w-screen h-screen flex items-center justify-center top-0 left-0"
        style={{ ...springs }}
      >
        <animated.div className="w-screen h-screen bg-black opacity-80 absolute" />
        (
        <animated.div
          style={{ ...subContainer }}
          onClick={closeComponent}
          className="flex items-center justify-between absolute z-20 flex-col tracking-widest"
        >
          {imageLoad && (
            <div className="self-end">
              <p className="text-white font-baskerville self-end mb-8">CLOSE</p>
            </div>
          )}
          <Image
            objectFit="contain"
            src={src}
            onLoad={onLoadImagine}
            alt="image"
            width={300}
            height={300}
            className="w-auto h-auto"
          />
        </animated.div>
        )
      </animated.div>
    </div>
  );
};
