import Image from 'next/image'
import Link from 'next/link'


interface StepperInterface {
  actualItem: number;
  totalItems: number;
  author: string;
  title: string;
  next: string;
  back: string;
  percentage:number
}

const Stepper = ({actualItem,author,back,next,title,totalItems,percentage}: StepperInterface) => {


  return (
    <div className="border-t-[1px] absolute -left-6 w-screen border-semigray h-[70px]">
      <div style={{width:`${percentage}%`}} className={`bg-black h-[1px]`} />
      <div>
        <div className="font-baskerville flex justify-between mr-6 mt-4 ml-6">
          <div className="flex flex-col">
            <p className="text-sm font-bold">{title}</p>
            <p className={`text-[10px]`}>{author}</p>
          </div>
          <div className="flex gap-8 items-center">
            <Link href={actualItem === 1 ? "" : back}>
              <Image
                width={16}
                height={16}
                src={
                  actualItem === 1
                    ? "/assets/icons/backNullStepper.svg"
                    : "/assets/icons/backStepper.svg"
                }
                alt="back"
              />
            </Link>
            <Link href={actualItem === totalItems ? "" : next}>
              <Image
                width={16}
                height={16}
                src={
                  actualItem === totalItems
                    ? "/assets/icons/forwardNullStepper.svg"
                    : "/assets/icons/forwardFullStepper.svg"
                }
                alt="back"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepper