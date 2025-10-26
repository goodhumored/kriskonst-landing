import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import getConfig from "@/config";
import Header from "@/components/layout/header";
import SmoothScroll from "@/components/smooth-scroll";
import Contacts from "@/domain/contacts";

const cera = localFont({
  src: [
    {
      path: "./_fonts/CeraPro-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./_fonts/CeraPro-Medium.woff",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-cera",
  preload: false,
});

const ricks = localFont({
  src: [
    {
      path: "./_fonts/tt-ricks-trial-regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-ricks",
  preload: true,
  fallback: ["serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getConfig().baseUrl),
  title: "Салон Kriskonst — скульптурная стрижка и дизайн волос в Глухово, Московская область",
  description:
    "Премиум салон Kriskonst в Глухово: авторские скульптурные стрижки, дизайн и окрашивание волос. Индивидуальный подход, современные техники, профессиональные стилисты.",
  keywords: [
    "Kriskonst",
    "салон Глухово",
    "скульптурная стрижка",
    "дизайн волос",
    "окрашивание волос",
    "стрижка Московская область",
    "салон красоты Глухово",
  ],
  openGraph: {
    type: "website",
    countryName: "Russia",
    title: "Салон Kriskonst — скульптурная стрижка и дизайн волос в Глухово",
    description:
      "Kriskonst — салон в Подмосковье, где создают скульптурные стрижки и уникальный дизайн волос. Узнай больше и запишись онлайн.",
    url: getConfig().baseUrl,
    images: "/og.jpg",
  },
  alternates: {
    canonical: new URL(getConfig().baseUrl),
  },
};

const { baseUrl } = getConfig();

const orgSchema =
{
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "name": "Kriskonst",
  "description": "Салон Kriskonst в Глухово — скульптурные стрижки, окрашивание и дизайн волос.",
  "image": "https://kriskonst.ru/og.jpg",
  "@id": "https://kriskonst.ru",
  "url": "https://kriskonst.ru",
  "telephone": "+7 925 346 82 46",
  "priceRange": "₽₽",
  "openingHours": [
    "Пн-Пт 10:00-20:00",
    "Сб-Вс 10:00-19:00"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Рублёвское предместье",
    "addressLocality": "Глухово",
    "postalCode": "143421",
    "addressCountry": "RU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 55.770765,
    "longitude": 37.245391
  },
  "sameAs": [Contacts.socialLinks.vk, Contacts.socialLinks.telegram, Contacts.socialLinks.whatsapp, Contacts.socialLinks.max, Contacts.socialLinks.telegram2]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/*         <Script id="asdf" strategy="beforeInteractive" dangerouslySetInnerHTML={{ */}
        {/*           __html: ` */}
        {/* (function() { */}
        {/* console.log("sadf"); */}
        {/* const v = Math.random() < 0.5 ? 'man' : 'woman'; */}
        {/* document.querySelectorAll('img[src*="some-long-unique-substring"]').forEach(img => { */}
        {/* console.log(img); */}
        {/* img.src = img.src.replace('some-long-unique-substring', v); */}
        {/* }); */}
        {/* })(); */}
        {/* ` }} /> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={baseUrl.toString()} key="canonical" />
        {/* <!-- Hybrid favicon setup: SVG + PNG + ICO with dark-mode support --> */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" media="(prefers-color-scheme: light)" />
        <link rel="icon" type="image/svg+xml" href="/favicon-dark.svg" media="(prefers-color-scheme: dark)" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <link rel="manifest" href="/site.webmanifest" />
        <link fetchPriority="high" rel="preload" as="image" href={"/man-1.webp"} />
        <link fetchPriority="high" rel="preload" as="image" href={"/man-2.webp"} />
        <link fetchPriority="high" rel="preload" as="image" href={"/woman-1.webp"} />
        <link fetchPriority="high" rel="preload" as="image" href={"/woman-2.webp"} />
        <meta name="theme-color" content="#000000" />
        {/* <!-- Windows --> */}
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body
        className={`${ricks.variable} ${cera.variable} font-cera antialiased text-[#EAE9E4]`}
      >
        <SmoothScroll />
        {children}
        <Header className="mt-7.5 absolute top-0 z-100" />
      </body>
    </html>
  );
}
