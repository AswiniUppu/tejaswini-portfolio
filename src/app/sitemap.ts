import type { MetadataRoute } from "next";

/** No production domain is claimed. Set NEXT_PUBLIC_SITE_URL when deploying. */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL;
  if (!base) return [];

  const routes = ["", "/about", "/experience", "/projects", "/contact"];
  const now = new Date();

  return routes.map((route) => ({
    url: `${base.replace(/\/$/, "")}${route}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }));
}
