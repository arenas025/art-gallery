import React from 'react'
import { Header } from '../Header'
import Image from 'next/image'
import Link from 'next/link'
import Stepper from '../Stepper'
import data from "../../../data.json";


interface LayoutPageInterface {
  imageArt :string
  author:string
  name:string
  description:string
  year:number
  imageAuthor:string
  id:number
  source : string
}

export const Layout = ({description,id,author,imageArt,imageAuthor,name,year,source}: LayoutPageInterface) => {

  const urlNext = data
    .find((item) => item.id === id + 1)
    ?.name.toLowerCase()
    .replaceAll(" ", "-");

    const urlBack = data
      .find((item) => item.id === id + -1 )
      ?.name.toLowerCase()
      .replaceAll(" ", "-");


  return (
    <div className="flex flex-col">
      <Header />
      <div className="px-6 relative ">
        <Image
          priority={true}
          width={400}
          height={250}
          src={imageArt}
          alt="image art"
        />
        <div className="h-10 w-36 bg-white absolute top-4 left-11">
          <Image src={"/assets/icons/expandImage.svg"} alt={"expand image"} width={12} height={12}/>
        </div>
        <div className="absolute top-56 left-[23px] font-baskerville">
          <div className=" bg-white mb-6 relative h-28 w-72 p-6">
            <p className="font-bold text-2xl ">{name}</p>
            <p className="text-base text-gray thick ">{author}</p>
          </div>
          <Image
            priority={true}
            width={80}
            height={80}
            src={imageAuthor}
            alt="image author"
          />
        </div>
        <div className="absolute pr-6 mt-20">
          <p className="max-[400px]:text-8xl max-[400px]:mt-10 tracking-[10px] mt-1 text-9xl font-baskerville font-bold text-semiwhite text-end">
            {year}
          </p>
          <p className="text-justify font-baskerville align leading-7 -mt-7 text-sm text-gray">
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
    </div>
  );
};
