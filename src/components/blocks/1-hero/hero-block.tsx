"use client";

import MouseRevealablePicture from "@/components/mouse-revealable-pic";
import pushIfNotNull from "@/lib/push-if-not-null";
import { animate } from "animejs";
import { useEffect, useRef, useState } from "react";

const images = {
  man1: "/man-1.webp",
  man2: "/man-2.webp",
  woman1: "/woman-1.webp",
  woman2: "/woman-2.webp",
};

export default function HeroBlock({ className }: { className?: string }) {
  const [mainImage, setMainImage] = useState<string>();
  const [hiddenImage, setHiddenImage] = useState<string>();
  const refs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const isMan = Math.random() > 0.5;
    setMainImage(isMan ? images.man1 : images.woman1);
    setHiddenImage(isMan ? images.man2 : images.woman2);
    if (!refs.current.length) return;
    animate(refs.current, { opacity: [0, 1], duration: 2000, easing: 'out(10)' });
  }, [])

  return (
    <div id="home" className={`${className} [box-shadow:inset_0_-25px_50px_#000] flex flex-col justify-center items-center w-full md:h-[50rem] h-[43rem] relative overflow-hidden`}>
      {/* <img src="/some-long-unique-substring-1.webp" className=" */}
      <img ref={pushIfNotNull(refs.current)} src={mainImage} className="
        pointer-events-none absolute -z-1 h-full w-full object-cover max-w-none 
        opacity-0
        " alt="" loading="eager" />
      <h1 className="z-10 pointer-events-none absolute leading-[1.28] font-ricks tracking-[-3%] uppercase max-w-[44rem]
          xl:w-[64%] w-full
          md:top-[48%] top-[50%]
          xl:left-[13.7%] 
          md:text-[7.625rem] text-[4.75rem]">
        <span className="text-left select-none">Скульптурная</span>
        <br />
        <span className="text-right block w-full md:-mt-8 -mt-5">стрижка</span>
      </h1>
      <MouseRevealablePicture ref={pushIfNotNull(refs.current)} area={{ y: 0.25 }} className="z-9 aspect-square" hiddenImage={hiddenImage} />
      {/* <MouseRevealablePicture area={{ y: 0.25 }} className="z-9 aspect-square" hiddenImage="./some-long-unique-substring-2.webp" /> */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent to-5% opacity-80"></div> */}
    </div>
  )
}
