import { MetadataRoute } from "next";

const baseUrl = "https://claudineiportfolio.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      { userAgent: "Googlebot", allow: "/", disallow: ["/api/"] },
      { userAgent: "Bingbot", allow: "/", disallow: ["/api/"] },
      { userAgent: "DuckDuckBot", allow: "/", disallow: ["/api/"] },
      { userAgent: "YandexBot", allow: "/", disallow: ["/api/"] },
      { userAgent: "Slurp", allow: "/", disallow: ["/api/"] },
      { userAgent: "Baiduspider", allow: "/", disallow: ["/api/"] },
      { userAgent: "Applebot", allow: "/", disallow: ["/api/"] },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
