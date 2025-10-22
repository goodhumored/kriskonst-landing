import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  // ОТКЛЮЧАЕМ next/image
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
