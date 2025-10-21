"use client";

import React, { useEffect } from "react";
import Image, { StaticImageData } from "next/image";

import pic1 from "@/../public/pic1.webp";
import pic2 from "@/../public/pic2.webp";
import pic3 from "@/../public/pic3.webp";
import pic4 from "@/../public/pic4.webp";
import pic5 from "@/../public/pic5.webp";
import pic6 from "@/../public/pic6.webp";
import pic7 from "@/../public/pic7.webp";
import pic8 from "@/../public/pic8.webp";
import pic9 from "@/../public/pic9.webp";
import pic10 from "@/../public/pic10.webp";
import { animate, onScroll } from "animejs";

interface PictureCardProps {
  src: StaticImageData;
  alt?: string;
  text: string;
  className?: string;
  p?: number;
}

function PictureCard({ p, src, alt, text, className }: PictureCardProps) {
  return (
    <div {...{ p: p ?? Math.random() * 10 }} className={`picture-card absolute group overflow-hidden animated ${className}`}>
      <Image
        src={src}
        alt={alt ?? text}
        className="w-full h-full object-cover"
      />
      <div className="absolute bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end
        h-[37%] w-full bottom-0
        whitespace-pre-wrap
        p-5 font-medium text-lg leading-[1.33] tracking-[-3%]">
        {text}
      </div>
    </div>
  );
}

export default function PicturesBlock({ className }: { className?: string }) {
  const [percent, setPercent] = React.useState(0);
  const sectionRef = React.useRef<HTMLElement>(null);

  useEffect(() => {
    animate(".picture-card", {
      translateY: (el: unknown) => {
        const p = Number((el as HTMLElement).getAttribute("p")) || 0;
        return [-p * percent * 5, p * percent * 5];
      },
      autoplay: onScroll({
        target: "#projects",
        container: document.body,
        sync: true,
        enter: "bottom -10%",
        debug: true
      }),
    })
  }, [percent]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const handleResize = () => {
      setPercent(section.clientHeight / 100)
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [])

  return (
    <section ref={sectionRef} id="projects" className={`${className} relative w-full *:aspect-[2/3] *:h-auto perspective-1000`}>
      <PictureCard
        src={pic1}
        text={`Съёмка рекламной\nкампании бренда`}
        p={0.25}
        className="top-0 left-0
        xl:w-[32.14%] md:w-[48.51%] w-[74.24%]"
      />
      <PictureCard
        src={pic2}
        p={0.5}
        text={`Mercedes Benz\nFashion Week`}
        className="
        xl:w-[23.66%] md:w-[31.34%] w-[48.48%]
        xl:top-[1.94%] md:top-0 top-[16.8%]
        right-0
        "
      />
      <PictureCard
        src={pic3}
        p={0.05}
        text={`Мероприятие\nЕкатерина Шпица`}
        className="
        xl:top-[19.07%] md:top-[17.6%] top-[21.8%]
        xl:left-[42.4%] md:left-[51.5%]
        xl:w-[23.66%] md:w-[31.34%] w-[48.48%]"
      />
      <PictureCard
        p={0.65}
        src={pic4}
        text={`Mercedes Benz\nFashion Week`}
        className="
        xl:top-[27.66%] md:top-[35.4%] top-[41.7%]
        xl:right-[8.5%] md:right-0
        xl:w-[23.66%] md:w-[31.34%] w-[48.48%]"
      />
      <PictureCard
        p={0.525}
        src={pic5}
        text={`Mercedes Benz\nFashion Week`}
        className="
        xl:top-[36.21%] md:top-[26%] top-[31.8%]
        xl:left-[8.9%] md:left-0 max-sm:right-0
        xl:w-[23.66%] md:w-[31.34%] w-[48.48%]"
      />
      <PictureCard
        p={0.5}
        src={pic6}
        text={`Mercedes Benz\nFashion Week`}
        className="
        xl:bottom-[29.47%] md:bottom-[41.17%] bottom-[43.4%]
        xl:left-[34.45%] md:left-[17.15%] max-sm:right-0
        xl:w-[23.66%] md:w-[31.34%] w-[48.48%]"
      />
      <PictureCard
        p={0}
        src={pic7}
        text={`Съёмка кампейна\nThe Irony`}
        className="
        xl:bottom-[20.9%] md:bottom-[23.55%] bottom-[33.4%]
        left-0
        xl:w-[23.66%] md:w-[31.34%] w-[48.48%]"
      />
      <PictureCard
        p={0.75}
        src={pic8}
        text="Запуск проекта Блэк стар"
        className="
        xl:bottom-[26.3%] md:bottom-[19.66%] bottom-[18.7%]
        right-0
        xl:w-[32.14%] md:w-[48.51%] w-[74.24%]"
      />
      <PictureCard
        p={0.275}
        src={pic9}
        text="Cosmopolitan Russia"
        className="
        xl:bottom-[0.5] md:bottom-[2.43%] bottom-[5.05%]
        left-[0]
        xl:w-[23.66%] md:w-[31.34%] w-[48.48%]"
      />
      <PictureCard
        p={0.15}
        src={pic10}
        text={`Обложка\nдля журнала OK!`}
        className="
        xl:bottom-[6.15%] bottom-[0]
        xl:left-[42.4%] md:left-[51.5%] max-sm:right-0
        xl:w-[23.66%] md:w-[31.34%] w-[48.48%]"
      />
    </section>
  );
}
