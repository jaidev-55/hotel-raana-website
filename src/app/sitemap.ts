import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
export const dynamic = "force-dynamic";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/menu", "/party-hall", "/gallery", "/contact", "/about"];
  return routes.map((r) => ({
    url: `${siteConfig.url}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.8,
  }));
}
