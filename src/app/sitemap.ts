import type { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: "https://abhishekjaiswar.pages.dev" as string,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1 as number,
    },
    {
      url: "https://abhishekjaiswar.pages.dev/#skills" as string,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5 as number,
    },
    {
      url: "https://abhishekjaiswar.pages.dev/about" as string,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3 as number,
    },
    {
      url: "https://abhishekjaiswar.pages.dev/projects" as string,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8 as number,
    },
  ] as MetadataRoute.Sitemap;
};

export default sitemap;
