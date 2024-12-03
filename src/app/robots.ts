import type { MetadataRoute } from "next";

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: "*" as string,
      allow: "/" as string,
      disallow: "/private/" as string,
    },
    sitemap: "https://abhishekjaiswar.pages.dev/sitemap.xml" as string,
  };
};

export default robots;
