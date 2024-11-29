import type { MetadataRoute } from "next";

const manifest = (): MetadataRoute.Manifest => {
  return {
    name: "Abhishek Jaiswar | Web Developer" as string,
    short_name: "Abhishek Jaiswar Portfolio" as string,
    description: "Personal Portfolio Website" as string,
    start_url: "/" as string,
    theme_color: "#ffffff" as string,
    background_color: "#ffffff" as string,
    display: "standalone",
    icons: [
      {
        src: "/android-chrome-192x192.png" as string,
        sizes: "192x192" as string,
        type: "image/png" as string,
      },
      {
        src: "/android-chrome-512x512.png" as string,
        sizes: "512x512" as string,
        type: "image/png" as string,
      },
    ],
  };
};

export default manifest;
