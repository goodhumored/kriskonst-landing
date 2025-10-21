"use client";

import Image from "next/image";
import kristinaImage from "@/../public/ava_1.png";
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
      debug: true,
      autoplay: onScroll({
        target: section,
        container: document.body,
      }),
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`container ${className} overflow-hidden w-full flex items-start `}
    >
      <Image
        ref={pushIfNotNull(elementsRef.current)}
        src={kristinaImage}
        alt="Picture of Kristina Konstantinova"
        className="object-cover object-center w-66 grayscale hover:grayscale-0 transition-[filter] duration-350 ease-in"
        layout="cover"
      />
      <div ref={pushIfNotNull(elementsRef.current)} className="ml-5 tracking-[-3%] ">
        <h2
          className="uppercase text-[5rem] leading-[4.375rem] font-ricks lg:-ml-15 mt-15.5"
        >
          Кристина <br />
          константинова
        </h2>
        <div
          className="text-lg leading-[1.6875rem] mt-5 font-medium max-w-[34.375rem]"
        >
          Парикмахер-стилист с международной квалификацией, выпускница академий Toni&amp;Guy, Saco, Pivot Point, L’Oréal, участница World Hairdressing Championship in Milan, работала на MBFW, в глянце, кино и рекламе, сертифицированный оптический стилист Lunetier.
        </div>
        <Link className="text-[2.875rem] tracking-[-3%] leading-[1.275] underline uppercase mt-15 font-ricks inline-block" href={Contacts.yclients}>записаться онлайн</Link>
        <ContactsBlock className="mt-12.5" />
      </div>
    </section>
  );
}
