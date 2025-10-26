import type { MetadataRoute } from "next";
import "reflect-metadata";
import getConfig from "../config";

const baseUrl = getConfig().baseUrl;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
