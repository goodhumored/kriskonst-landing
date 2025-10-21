import React from "react";
import man1 from "@/../public/man-1.png";
import man2 from "@/../public/man-2.png";
import Image from "next/image";
import MouseRevealablePicture from "@/components/mouse-revealable-pic";

export default function HeroBlock({ className }: { className?: string }) {
  return (
    <div className={`${className} flex flex-col justify-center items-center w-full h-screen relative overflow-hidden`}>
      <Image src={man1} className="pointer-events-none absolute -z-1 h-full w-full object-cover max-w-none" alt="" />
      <h1 className="z-10 pointer-events-none absolute top-[48%] leading-[1.28] xl:left-[13.7%] text-[7.625rem] font-ricks tracking-[-3%] uppercase xl:w-[64%] w-full max-w-[44rem]">
        <span className="text-left">Скульптурная</span>
        <br />
        <span className="text-right block w-full -mt-8">стрижка</span>
      </h1>
      <MouseRevealablePicture area={{ y: 0.25 }} className="z-9 aspect-square" hiddenImage={man2} />
    </div>
  )
}
