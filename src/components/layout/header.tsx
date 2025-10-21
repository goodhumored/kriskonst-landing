"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import Link from "next/link";
import MobileMenu from "./mobile-menu";
import menuItems from "./menu-items";
import BurgerIcon from "./burger";
import Logo from "../logo";

export default function Header({ className }: { className?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={cn(`w-full text-[#EAE9E4] `, className)}
    >
      <div className={cn("mx-auto max-w-[75rem] xl:px-7.5 md:px-12 px-3.75 flex items-center")}>
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 flex items-center group">
          <Logo />
        </Link>
        <div className="grow-1"></div>
        {/* Desktop Navigation */}
        <nav className="hidden sm:flex shrink-0 items-baseline space-x-12.5 flex-nowrap">
          {menuItems.map((item) => (
            <HeaderItem
              className="shrink-0"
              key={item.label}
              href={item.href}
            >
              {item.label}
            </HeaderItem>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={cn(
            isMenuOpen ? "rotate-90" : "",
            " transition-transform duration-300 sm:hidden inline-flex items-center justify-center rounded-md group focus:outline-none focus:ring-2 focus:ring-inset",
          )}
        >
          <BurgerIcon className="fill-[#EAE9E4]" />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <MobileMenu
        onClose={() => setIsMenuOpen(false)}
        className={cn(isMenuOpen ? "translate-x-0" : "translate-x-[200vw]")}
      />
    </header>
  );
}

function HeaderItem({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        className,
        "tracking-[-3%] duration-200 h-full block text-base text-nowrap relative",
        "after:[content:''] after:scale-x-0 after:w-full after:h-0.25 after:bg-[#EAE9E4] after:transition-transform after:duration-350 after:origin-left after:absolute after:bottom-0 after:left-0 ease-in-out",
        "hover:after:scale-x-100"
      )}
    >
      {children}
    </Link>
  );
}
