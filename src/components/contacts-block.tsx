import Contacts from "@/domain/contacts";
import Link from "next/link";
import React from "react";
import WhatsappIcon from "./icons/whatsapp-icon";
import TelegramIcon from "./icons/telegram-icon";
import MaxIcon from "./icons/max-icon";
import VkIcon from "./icons/vk-icon";

export default function ContactsBlock({ className }: { className?: string }) {
  return (
    <div className={`${className}`}>
      <div className="flex flex-row space-x-5 *:transition-colors duration-300 items-center tracking-[-3%]">
        <Link target="_blank" href={Contacts.socialLinks.whatsapp}>
          <WhatsappIcon className="fill-[#F0EDE8] hover:fill-[#FF3F1A] w-7.5 transition-colors duration-150 " />
        </Link>
        <Link target="_blank" href={Contacts.socialLinks.telegram}>
          <TelegramIcon className="fill-[#F0EDE8] hover:fill-[#FF3F1A] w-7.5 transition-colors duration-150 " />
        </Link>
        <Link target="_blank" href={Contacts.socialLinks.linkedin}>
          <MaxIcon className="fill-[#F0EDE8] hover:fill-[#FF3F1A] w-7.5 transition-colors duration-150 " />
        </Link>
        <Link className="text-[2rem] leading-[1.3] tracking-[-3.75%] font-ricks" href={`tel:${Contacts.phone}`}>{Contacts.phone}</Link>
      </div>
      <div className="mt-7.5 flex flex-row space-x-5 *:transition-colors duration-300">
        <div className="font-medium text-lg">Я в соцсетях:</div>
        <Link target="_blank" href={Contacts.socialLinks.whatsapp}>
          <TelegramIcon className="fill-[#F0EDE8] hover:fill-[#FF3F1A] w-7.5 transition-colors duration-150 " />
        </Link>
        <Link target="_blank" href={Contacts.socialLinks.telegram}>
          <VkIcon className="fill-[#F0EDE8] hover:fill-[#FF3F1A] w-7.5 transition-colors duration-150 " />
        </Link>
      </div>
      <div className="mt-5 text-[0.9375rem] leading-[1.25]">{Contacts.address}</div>
    </div>
  )
  {/* asdf */ }
}
