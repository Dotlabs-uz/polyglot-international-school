import type { MetadataRoute } from "next";

const SITE_URL = "https://polyglot.uz";
const locales = ["ru", "en", "uz"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = ["", "/about", "/education", "/campus", "/life", "/admissions", "/contacts"];

  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    const languages: Record<string, string> = {};
    for (const locale of locales) {
      languages[locale] = `${SITE_URL}/${locale}${route}`;
    }
    languages["x-default"] = `${SITE_URL}${route}`;

    entries.push({
      url: `${SITE_URL}/ru${route}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: route === "" ? 1.0 : 0.8,
      alternates: {
        languages,
      },
    });
  }

  return entries;
}
