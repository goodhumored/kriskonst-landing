"use client";

import { cn } from "@/lib/utils";
import { animate, onScroll, stagger } from "animejs";
import React, { ReactNode, useEffect } from "react";

type ServiceType = {
  header: string;
  description: string;
  time: string;
  cost: string;
};

const services: ServiceType[] = [
  {
    header: "Скульптурная стрижка",
    description: "Стрижка, которая лежит идеально с первого дня: мытьё головы, стрижка, укладка.",
    time: "60 мин",
    cost: "от 4 000 ₽",
  },
  {
    header: "Окрашивание",
    description: "Оттенки по вашему цветотипу — модно и красиво.",
    time: "60–120 мин",
    cost: "от 5 000 ₽",
  },
  {
    header: "Терапевтические уходы",
    description: "Шёлковистые волосы, лёгкость головы и глубокая релаксация.",
    time: "0–60 мин",
    cost: "от 3 000 ₽",
  },
  {
    header: "Массаж головы",
    description: "Лаванда для релакса или цитрус для бодрости — напряжение тает, мысли замедляются.",
    time: "10–20 мин",
    cost: "от 3 500 ₽",
  },
  {
    header: "Моделирование бороды",
    description: "Чёткие линии и аккуратный контур.",
    time: "20–30 мин",
    cost: "от 3 000 ₽",
  },
  {
    header: "Эпиляция нос⁠/⁠уши⁠/⁠брови",
    description: "Быстро, безопасно, комфортно.",
    time: "10–15 мин",
    cost: "от 600 ₽",
  },
]


export default function ServicesBlock({ className }: { className?: string }) {
  useEffect(() => {
    animate(".service-item", {
      opacity: [0, 1],
      translateY: [75, 0],
      delay: stagger(250),
      duration: 1200,
      easing: "easeOutQuad",
      autoplay: onScroll({
        // debug: true,
        enter: "bottom top",
        leave: "bottom 75%",
        target: "#services",
        container: document.body,
        sync: true,
      }),
    }
    )
  }, [])
  return (
    <div id="services" className={cn(className, "grid md:grid-cols-2 grid-cols-1 xl:gap-x-17 gap-x-5 md:gap-y-[3rem] gap-y-10 xl:pl-1.5 xl:pr-12")}>
      {services.map((service) => (
        <Service className="
          service-item
          xl:nth-[1]:ml-22 
          xl:nth-[2n]:mt-14 md:nth-[2n]:mt-28
          xl:nth-[4]:translate-x-[-5.75rem]
          xl:nth-[5]:translate-x-[11.5rem]
          xl:nth-[6]:ml-[5.75rem]" key={service.header} header={service.header} time={service.time} cost={service.cost}>
          {service.description}
        </Service>
      ))}
    </div>
  )
}

function Service({ header, children, time, cost, className }: { header: string, children: ReactNode | ReactNode[], time: string, cost: string, className?: string }) {
  return (
    <div className={cn(className, "flex flex-col tracking-[-3%]")}>
      <h2 className="md:text-[3.125rem] md:leading-[3.5rem] text-3xl leading-[1.133] font-medium font-ricks uppercase">{header}</h2>
      <p className="mt-2.5 text-lg leading-[1.6875rem] tracking-[-3%]">
        {children} <br />
        {time} — {cost}
      </p>
    </div>
  )
}
