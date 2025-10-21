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
  alt: string;
  text: string;
  className?: string;
}

function PictureCard({ src, alt, text, className }: PictureCardProps) {
  return (
    <div className={`absolute group overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <p className="text-white p-4 text-sm font-medium">{text}</p>
      </div>
    </div>
  );
}

export default function PicturesBlock({ className }: { className?: string }) {
  return (
    <div className={`${className} relative w-full *:aspect-[2/3] *:h-auto`}>
      <PictureCard
        src={pic1}
        alt="Fashion portrait 1"
        text="Elegant style"
        className="top-0 left-0
        xl:w-[32.14%] md:w-[48.51%]"
      />
      <PictureCard
        src={pic2}
        alt="Fashion portrait 2"
        text="Modern look"
        className="
        xl:w-[23.66%] md:w-[31.34%]
        xl:top-[1.94%] md:top-0 
        right-0
        "
      />
      <PictureCard
        src={pic3}
        alt="Fashion portrait 3"
        text="Bold fashion"
        className="
        xl:top-[19.07%] md:top-[17.6%]
        xl:left-[42.4%] md:left-[51.5%]
        xl:w-[23.66%] md:w-[31.34%]"
      />
      <PictureCard
        src={pic4}
        alt="Fashion portrait 4"
        text="Street style"
        className="
        xl:top-[27.66%] md:top-[35.4%]
        xl:right-[8.5%] md:right-0
        xl:w-[23.66%] md:w-[31.34%]"
      />
      <PictureCard
        src={pic5}
        alt="Fashion portrait 5"
        text="Classic beauty"
        className="
        xl:top-[36.21%] md:top-[26%]
        xl:left-[8.9%] md:left-0
        xl:w-[23.66%] md:w-[31.34%] "
      />
      <PictureCard
        src={pic6}
        alt="Fashion portrait 6"
        text="Contemporary fashion"
        className="
        xl:bottom-[29.47%] md:bottom-[41.17%]
        xl:left-[34.45%] md:left-[17.15%]
        xl:w-[23.66%] md:w-[31.34%]"
      />
      <PictureCard
        src={pic7}
        alt="Fashion portrait 7"
        text="Luxury style"
        className="
        xl:bottom-[20.9%] md:bottom-[23.55%]
        left-0
        xl:w-[23.66%] md:w-[31.34%] "
      />
      <PictureCard
        src={pic8}
        alt="Fashion portrait 8"
        text="Creative duo"
        className="
        xl:bottom-[23.3%] md:bottom-[17.66%]
        right-0
        xl:w-[32.14%] md:w-[48.51%] "
      />
      <PictureCard
        src={pic9}
        alt="Fashion portrait 9"
        text="Avant-garde"
        className="
        xl:bottom-[0.5] md:bottom-[2.43%]
        left-[0]
        xl:w-[23.66%] md:w-[31.34%] "
      />
      <PictureCard
        src={pic10}
        alt="Fashion portrait 10"
        text="Timeless elegance"
        className="
        xl:bottom-[6.15%] md:bottom-[0]
        xl:left-[42.4%] md:left-[51.5%]
        xl:w-[23.66%] md:w-[31.34%]"
      />
    </div>
  );
}
