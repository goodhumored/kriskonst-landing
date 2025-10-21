import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import getConfig from "@/config";
import Header from "@/components/layout/header";
import SmoothScroll from "@/components/smooth-scroll";

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
  // fallback: ["sans-serif"],
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
  title: { default: "Kriskonst", template: "%s | Kriskonst" },
  description: "Скульптурная стрижка Kriskonst",
  keywords: ["Kriskonst", "скульптурная стрижка", "дизайн волос"],
  openGraph: {
    type: "website",
    countryName: "Russia",
    title: "Kriskonst",
    description: "Скульптурная стрижка Kriskonst",
    url: getConfig().baseUrl,
    images: "/og.jpg",
  },
  alternates: {
    canonical: new URL(getConfig().baseUrl),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { baseUrl } = getConfig();

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Compass",
    url: baseUrl,
    sameAs: [],
    logo: baseUrl + "/favicon.ico",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+7-999-999-99-99",
      contactType: "Customer Service",
      areaServed: "RU",
      availableLanguage: ["Russian"],
    },
  };
  return (
    <html lang="en">
      <head>
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
