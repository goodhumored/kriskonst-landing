import React from "react";
import man1 from "@/../public/man-1.png";
import man2 from "@/../public/man-2.png";
import Image from "next/image";
import MouseRevealablePicture from "@/components/mouse-revealable-pic";

export default function HeroBlock({ className }: { className?: string }) {
  return (
    <div className={`${className} flex flex-col justify-center items-center w-full md:h-[50rem] h-[43rem] relative overflow-hidden`}>
      <Image src={man1} className="pointer-events-none absolute -z-1 h-full w-full object-cover max-w-none" alt="" />
      <h1 className="z-10 pointer-events-none absolute leading-[1.28] font-ricks tracking-[-3%] uppercase max-w-[44rem]
        xl:w-[64%] w-full
        md:top-[48%] top-[50%]
        xl:left-[13.7%] 
        md:text-[7.625rem] text-[4.75rem]">
        <span className="text-left">Скульптурная</span>
        <br />
        <span className="text-right block w-full md:-mt-8 -mt-5">стрижка</span>
      </h1>
      <MouseRevealablePicture area={{ y: 0.25 }} className="z-9 aspect-square" hiddenImage={man2} />
    </div>
  )
}
