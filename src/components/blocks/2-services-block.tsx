import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

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
    header: "Эпиляция нос/уши/брови",
    description: "Быстро, безопасно, комфортно.",
    time: "10–15 мин",
    cost: "от 600 ₽",
  },
]


export default function ServicesBlock({ className }: { className?: string }) {
  return (
    <div className={cn(className, "grid xl:grid-cols-2 grid-cols-1 gap-x-17 gap-y-[3rem] pl-1.5 pr-12")}>
      {services.map((service) => (
        <Service className="nth-[1]:ml-22 nth-[2n]:mt-14 nth-[4]:translate-x-[-5.75rem] nth-[5]:translate-x-[11.5rem] nth-[6]:ml-[5.75rem]" key={service.header} header={service.header} time={service.time} cost={service.cost}>
          {service.description}
        </Service>
      ))}
    </div>
  )
}

function Service({ header, children, time, cost, className }: { header: string, children: ReactNode | ReactNode[], time: string, cost: string, className?: string }) {
  return (
    <div className={cn(className, "flex flex-col tracking-[-3%]")}>
      <h2 className="text-[3.125rem] leading-[3.5rem]  font-medium font-ricks uppercase">{header}</h2>
      <p className="mt-2.5 text-lg leading-[1.6875rem] tracking-[-3%]">
        {children} <br />
        {time} — {cost}
      </p>
    </div>
  )
}
