"use client"

import Image from 'next/image'
import Link from 'next/link'
import data from "../../../data.json"
import { Header } from '../Header'
import Stepper from '../Stepper'
import { ShowImage } from '../showImage'
import { useState } from 'react'


interface LayoutPageInterface {
  imageArt :string
  author:string
  name:string
  description:string
  year:number
  imageAuthor:string
  id:number
  source : string
  bigImage:string
}

export const Layout = ({description,id,author,imageArt,imageAuthor,name,year,bigImage,source}: LayoutPageInterface) => {

  const urlNext = data
    .find((item) => item.id === id + 1)
    ?.name.toLowerCase()
    .replaceAll(" ", "-");

    const urlBack = data
      .find((item) => item.id === id + -1 )
      ?.name.toLowerCase()
      .replaceAll(" ", "-");

    const [showImageActive, setShowImageActive] = useState<boolean>(false);


  return (
    <div className="flex flex-col">
      <Header />
      <div className="px-6 relative lg:flex ">
        <Image
          priority={true}
          width={400}
          height={250}
          className="sm:w-[75%] lg:w-[30%] lg:h-[10%]"
          src={imageArt}
          alt="image art"
        />
        <div
          onClick={() => {
            setShowImageActive(true);
          }}
          className=" lg:top-[65%] cursor-pointer flex items-center justify-between p-3 tracking-widest  h-10 w-40 bg-black opacity-75 sm:z-20 absolute top-4 left-11"
        >
          <Image
            src={"/assets/icons/expandImage.svg"}
            alt={"expand image"}
            width={12}
            height={12}
          />
          <p className="font-baskerville text-white text-sm ">VIEW IMAGE</p>
        </div>
        <div className="sm:h-[400px] sm:top-0 sm:right-[0px] sm:flex sm:flex-col sm:items-end absolute top-56 left-[23px] font-baskerville lg:relative">
          <div className="bg-white lg:-left-[30%] sm:w-[60vw] sm:pb-16 sm:pt-0 sm:-mt-1 mb-6 relative sm:h-fit h-28 w-72 p-6 sm:mb-0 lg:h-52 lg:w-96">
            <p className="font-bold text-2xl sm:text-5xl sm:pb-7 sm:w-56 ">
              {name}
            </p>
            <p className="text-base text-gray thick ">{author}</p>
          </div>
          <Image
            priority={true}
            width={80}
            height={80}
            src={imageAuthor}
            alt="image author"
            className="sm:w-32 sm:mr-12 lg:w-16 lg:self-start lg:mt-28"
          />
        </div>
        <div className="lg:relative absolute pr-6 sm:ml-[25%] sm:mt-0 mt-20 lg:ml-0">
          <p className="max-[400px]:text-8xl max-[400px]:mt-10 tracking-[10px] mt-1 text-9xl font-baskerville font-bold text-semiwhite text-end sm:text-center lg:text-[200px]">
            {year}
          </p>
          <p className=" lg:relative sm:-mt-16 text-justify font-baskerville align leading-7 -mt-7 text-sm text-gray sm:w-96 sm:left-[20%] lg:left-0">
            {description}{" "}
          </p>
          <Link href={source}>
            <p className="mt-10 mb-16 w-fit text-gray text-[9px] font-bold font-baskerville tracking-[2px] border-b-[1px]">
              GO TO SOURCE
            </p>
          </Link>
          <Stepper
            actualItem={id}
            totalItems={15}
            author={author}
            back={`/${urlBack}`}
            next={`/${urlNext}`}
            title={name}
            key={id}
            percentage={Math.floor((id / 15) * 100)}
          />
        </div>
      </div>
      {showImageActive && (
        <ShowImage setShowImageActive={setShowImageActive} src={bigImage} />
      )}
    </div>
  );
};
