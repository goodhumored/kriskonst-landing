import { cn } from "@/lib/utils";
import React from "react";
import menuItems from "./menu-items";
import Link from "next/link";
import Contacts from "@/domain/contacts";
import ContactsBlock from "../contacts-block";

export default function MobileMenu({ className, onClose }: { className?: string, onClose: () => void }) {
  return (
    <div className={cn(className, "fixed -z-1 top-0 h-screen left-0 w-screen transition-[translate] duration-300 overflow-scroll",
      "px-3.75 pt-30.5 bg-black flex flex-col pb-15 justify-between ",
    )}
    >
      <div className="flex flex-col items-start space-y-10">
        {menuItems.map((item) => (
          <SideMenuItem onClick={onClose} key={item.label} href={item.href}>
            {item.label}
          </SideMenuItem>
        ))}
        <SideMenuItem onClick={onClose} href={Contacts.yclients}>
          Записаться онлайн
        </SideMenuItem>
      </div>
      <ContactsBlock />
    </div>
  )
}

function SideMenuItem({
  href,
  children,
  onClick = () => { }
}: {
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      onClick={onClick}
      href={href ?? ""}
      className="text-[#EAE9E4] block text-nowrap text-3xl leading-[1.266] tracking-[-3%] "
    >
      {children}
    </Link>
  );
}

