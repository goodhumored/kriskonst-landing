"use client";

import Image from "next/image";
import kristinaImage from "@/../public/ava_1.webp";
import { useEffect, useRef } from "react";
import { animate, onScroll, stagger } from "animejs";
import pushIfNotNull from "@/lib/push-if-not-null";
import Link from "next/link";
import Contacts from "../../../domain/contacts";
import ContactsBlock from "@/components/contacts-block";

export default function KristinaBlock({ className }: { className?: string }) {

  const elementsRef = useRef<HTMLElement[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    animate(elementsRef.current, {
      opacity: [0, 1],
      scale: [0.8, 1],
      translateX: { from: stagger(["-25vw", "25vw"]), to: "0" },
      duration: 1000,
      easing: "easeInOutQuad",
      delay: 0,
      // debug: true,
      autoplay: onScroll({
        target: section,
        container: document.body,
      }),
    });
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`container ${className} overflow-hidden w-full flex max-sm:flex-col items-start tracking-[-3%] space-x-5`}
    >
      <div className="flex items-center space-x-5 grow-0 xl:w-66 md:w-52.75 w-40"
        ref={pushIfNotNull(elementsRef.current)}
      >
        <Image
          src={kristinaImage}
          alt="Кристина Константинова"
          className="object-cover object-center grayscale hover:grayscale-0 transition-[filter] duration-350 ease-in"
          layout="cover"
        />
        <h2
          className="uppercase z-10 md:text-[5rem] md:leading-[4.375rem] text-[2.8125rem] leading-[0.89] font-ricks -ml-15 max-sm:mt-0.5"
        >
          Кристина <br />
          константинова
        </h2>
      </div>
      <div ref={pushIfNotNull(elementsRef.current)} className="">
        <div
          className="text-lg leading-[1.6875rem] xl:mt-55.5 md:mt-49 mt-10 font-medium max-w-[34.375rem]"
        >
          Парикмахер-стилист с международной квалификацией, выпускница академий Toni&amp;Guy, Saco, Pivot Point, L’Oréal, участница World Hairdressing Championship in Milan, работала на MBFW, в глянце, кино и рекламе, сертифицированный оптический стилист Lunetier.
        </div>
        <Link className="md:text-[2.875rem] md:leading-[1.275] text-3xl leading-[1.133] tracking-[-3%] underline uppercase mt-15 font-ricks inline-block" href={Contacts.yclients}>записаться онлайн</Link>
        <ContactsBlock className="md:mt-12.5 mt-9" />
      </div>
    </section>
  );
}
