import HeroBlock from "@/components/blocks/1-hero/hero-block";
import ServicesBlock from "@/components/blocks/2-services-block";
import KristinaBlock from "@/components/blocks/3-kristina/3-kristina";
import PicturesBlock from "@/components/blocks/4-pictures/pictures";
import Contacts from "@/domain/contacts";
import Link from "next/link";


export default function Home() {
  return (
    <main className="xl:px-10 md:px-12 px-4 flex flex-col items-center md:pb-25 pb-12.5 max-w-[75rem] mx-auto">
      <HeroBlock className="" />
      <p className="md:mt-25 mt-12.5 -tracking-[3%] md:text-[3.125rem] md:leading-[3.5rem] text-3xl leading-[1.133] font-ricks uppercase">Индивидуально подобранная стрижка и цвет придадут уверенности, а авторский массаж головы снимет напряжение и подарит Вам невероятное расслабление.</p>
      <ServicesBlock className="md:mt-14.5 mt-14" />
      <KristinaBlock className="xl:mt-50 md:mt-37.5 mt-25 xl:px-24" />
      <PicturesBlock className="
        xl:mt-50 md:mt-37.5 mt-50
        xl:h-[193vw] md:h-[270.703vw] h-[670.833vw]
        " />
      <p className="mt-20 md:text-[3.125rem] md:leading-[3.5rem] text-3xl leading-[1.133] tracking-[-3%] font-ricks uppercase">А также — опыт съёмок для глянцевых журналов, кино и телевидения, модных показов и крупных мероприятий. Среди проектов — Cosmopolitan, реклама Audi, Mercedes-Benz Fashion Week. Сотрудничала с Бастой, Юлией Ковальчук, Екатериной Шпицей и другими.</p>
      <Link className="md:mt-25 mt-12.5 md:text-[5rem] md:leading-[5.3125rem] text-[3.125rem] leading-[3.5rem]  tracking-[-3%] underline uppercase font-ricks" href={Contacts.yclients}>записаться онлайн</Link>
    </main>
  );
}
