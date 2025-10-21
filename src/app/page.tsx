import HeroBlock from "@/components/blocks/1-hero/hero-block";
import ServicesBlock from "@/components/blocks/2-services-block";
import KristinaBlock from "@/components/blocks/3-kristina/3-kristina";
import PicturesBlock from "@/components/blocks/4-pictures/pictures";
import Contacts from "@/domain/contacts";
import Link from "next/link";


export default function Home() {
  return (
    <main className="xl:px-10 md:px-12 px-4 flex flex-col items-center pb-25">
      <HeroBlock className="" />
      <p className="mt-25 -tracking-[3%] text-[3.125rem] leading-[3.5rem] font-ricks uppercase">Индивидуально подобранная стрижка и цвет придадут уверенности, а авторский массаж головы снимет напряжение и подарит Вам невероятное расслабление.</p>
      <ServicesBlock className="mt-14.5" />
      <KristinaBlock className="mt-50 px-24" />
      <PicturesBlock className="mt-50 h-[144.75rem]" />
      <p className="mt-20 text-[3.125rem] leading-[3.5rem] tracking-[-3%] font-ricks uppercase">А также — опыт съёмок для глянцевых журналов, кино и телевидения, модных показов и крупных мероприятий. Среди проектов — Cosmopolitan, реклама Audi, Mercedes-Benz Fashion Week. Сотрудничала с Бастой, Юлией Ковальчук, Екатериной Шпицей и другими.</p>
      <Link className="mt-25 text-[5rem] leading-[5.3125rem] tracking-[-3%] underline uppercase font-ricks" href={Contacts.yclients}>записаться онлайн</Link>
    </main>
  );
}
