import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const lastModified = new Date("2026-10-28T00:00:00.000Z");

  return [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/solutions`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/platform`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/use-cases`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/sitemap`, lastModified, changeFrequency: "weekly", priority: 0.7 },
  ];
}

