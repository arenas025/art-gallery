"use client"

import Image from 'next/image';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { animated, useSpring } from 'react-spring';
import { RotatingSquare } from "react-loader-spinner";
import { useAnimationImages } from '@/utils/useAnimationImages';


interface showImageInterface {
  src: string;
  setShowImageActive: Dispatch<SetStateAction<boolean>>;
}

export const ShowImage = ({src,setShowImageActive}: showImageInterface) => {
 
  const{ closeComponent,imageLoad,setImageLoad,springs,subContainer,subContainerApi} = useAnimationImages({setShowImageActive})

  return (
    <div className="fixed w-screen h-screen">
      <animated.div
        className="fixed scale-0 w-screen h-screen flex items-center justify-center top-0 left-0"
        style={{ ...springs }}
      >
        <animated.div className="w-screen h-screen bg-black opacity-80 absolute" />
        (
        {
          <animated.div
            style={{ ...subContainer }}
            onClick={closeComponent}
            className="flex items-center justify-between absolute z-20 flex-col tracking-widest"
          >
            {imageLoad && (
              <div className="self-end cursor-pointer">
                <p className="text-white font-baskerville self-end mb-8">
                  CLOSE
                </p>
              </div>
            )}

            <Image
              objectFit="contain"
              src={src}
              alt="image"
              onLoad={() => {
                setImageLoad(true);
                subContainerApi.start({
                  from: { scale: 0 },
                  to: { scale: 1 },
                });
              }}
              width={300}
              height={300}
              className="w-auto h-auto"
            />
          </animated.div>
        }
        )
        {!imageLoad && (
          <div className="z-20 absolute w-screen flex flex-col justify-center items-center">
            <RotatingSquare
              visible={imageLoad ? false : true}
              height="100"
              width="100"
              color="white"
              wrapperClass=""
              ariaLabel="rotating-square-loading"
            />
            <p className="text-white">Painting the paint...</p>
          </div>
        )}
      </animated.div>
    </div>
  );
};
