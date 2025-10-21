import React from "react";
import Image, { StaticImageData } from "next/image";

import pic1 from "@/../public/pic1.png";
import pic2 from "@/../public/pic2.png";
import pic3 from "@/../public/pic3.png";
import pic4 from "@/../public/pic4.png";
import pic5 from "@/../public/pic5.png";
import pic6 from "@/../public/pic6.png";
import pic7 from "@/../public/pic7.png";
import pic8 from "@/../public/pic8.png";
import pic9 from "@/../public/pic9.png";
import pic10 from "@/../public/pic10.png";

interface PictureCardProps {
  src: StaticImageData;
  alt?: string;
  text: string;
  className?: string;
}

function PictureCard({ src, alt, text, className }: PictureCardProps) {
  return (
    <div className={`absolute group overflow-hidden ${className}`}>
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
  return (
    <div className={`${className} relative w-full *:aspect-[2/3] *:h-auto`}>
      <PictureCard
        src={pic1}
        text={`Съёмка рекламной\nкампании бренда`}
        className="top-0 left-0
        xl:w-[32.14%] md:w-[48.51%] w-[74.24%]"
      />
      <PictureCard
        src={pic2}
        text={`Mercedes Benz\nFashion Week`}
        className="
        xl:w-[23.66%] md:w-[31.34%] w-[48.48%]
        xl:top-[1.94%] md:top-0 top-[16.8%]
        right-0
        "
      />
      <PictureCard
        src={pic3}
        text={`Мероприятие\nЕкатерина Шпица`}
        className="
        xl:top-[19.07%] md:top-[17.6%] top-[21.8%]
        xl:left-[42.4%] md:left-[51.5%]
        xl:w-[23.66%] md:w-[31.34%] w-[48.48%]"
      />
      <PictureCard
        src={pic4}
        text={`Mercedes Benz\nFashion Week`}
        className="
        xl:top-[27.66%] md:top-[35.4%] top-[41.7%]
        xl:right-[8.5%] md:right-0
        xl:w-[23.66%] md:w-[31.34%] w-[48.48%]"
      />
      <PictureCard
        src={pic5}
        text={`Mercedes Benz\nFashion Week`}
        className="
        xl:top-[36.21%] md:top-[26%] top-[31.8%]
        xl:left-[8.9%] md:left-0 max-sm:right-0
        xl:w-[23.66%] md:w-[31.34%] w-[48.48%]"
      />
      <PictureCard
        src={pic6}
        text={`Mercedes Benz\nFashion Week`}
        className="
        xl:bottom-[29.47%] md:bottom-[41.17%] bottom-[43.4%]
        xl:left-[34.45%] md:left-[17.15%] max-sm:right-0
        xl:w-[23.66%] md:w-[31.34%] w-[48.48%]"
      />
      <PictureCard
        src={pic7}
        text={`Съёмка кампейна\nThe Irony`}
        className="
        xl:bottom-[20.9%] md:bottom-[23.55%] bottom-[33.4%]
        left-0
        xl:w-[23.66%] md:w-[31.34%] w-[48.48%]"
      />
      <PictureCard
        src={pic8}
        text="Запуск проекта Блэк стар"
        className="
        xl:bottom-[23.3%] md:bottom-[17.66%] bottom-[16.7%]
        right-0
        xl:w-[32.14%] md:w-[48.51%] w-[74.24%]"
      />
      <PictureCard
        src={pic9}
        text="Cosmopolitan Russia"
        className="
        xl:bottom-[0.5] md:bottom-[2.43%] bottom-[5.05%]
        left-[0]
        xl:w-[23.66%] md:w-[31.34%] w-[48.48%]"
      />
      <PictureCard
        src={pic10}
        text={`Обложка\nдля журнала OK!`}
        className="
        xl:bottom-[6.15%] bottom-[0]
        xl:left-[42.4%] md:left-[51.5%] max-sm:right-0
        xl:w-[23.66%] md:w-[31.34%] w-[48.48%]"
      />
    </div>
  );
}
