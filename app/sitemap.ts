import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;

  const routes = [
    "",
    "/how-it-works",
    "/assets",
    "/assets/vehicles",
    "/assets/real-estate",
    "/assets/businesses",
    "/assets/farms",
    "/assets/diaspora-assets",
    "/fleet",
    "/why-kumusha",
    "/contact",
    "/legal/privacy",
    "/legal/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/assets") ? 0.8 : 0.6,
  }));
}
