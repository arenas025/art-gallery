import Image from 'next/image'
import Link from 'next/link';

interface cardProps {
  title: string;
  image: string | any;
  artist: string;
  id:string;
  visible:boolean;
}

export const Card = ({artist,id, title,image,visible}: cardProps) => {

  const url = title.toLowerCase().replaceAll(" ","-")

  return (
    <Link className="sm:w-30 sm:h-30" href={`/${url}`}>
      <div
        className={`${
          visible ? "opacity-100" : "opacity-50 sm:opacity-100"
        } duration-200 w-full h-[400px] sm:h-auto z-10 relative ease-in`}
        id={id}
      >
        <div className="w-full h-full bg-gradient-to-b from-transparent via-transparent to-black opacity-50 z-20 absolute top-0"></div>
        <Image
          className="object-cover w-full h-full"
          src={image}
          objectPosition="bottom"
          height={400}
          width={350}
          alt="image art"
        />
        <div className="mb-8 w-40   ml-8 bottom-0 z-30 gap-1 flex flex-col justify-end absolute">
          <p className="text-white text-4xl font-baskerville">{title}</p>
          <p className="text-white text-lg font-baskerville">{artist}</p>
        </div>
      </div>
    </Link>
  );
}

