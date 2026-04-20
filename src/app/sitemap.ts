import type { MetadataRoute } from "next";

const SITE_URL = "https://elitegroundlawnandlandscaping.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "/dumpster-rental", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services/lawn-mowing", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services/mulch-installation", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services/landscaping-rocks", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services/tree-services", priority: 0.9, changeFrequency: "monthly" },
  ];

  return pages.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
