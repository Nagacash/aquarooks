import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aqua-rooks.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          de: `${baseUrl}/de`,
          en: baseUrl,
          fr: `${baseUrl}/fr`,
        },
      },
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
      alternates: {
        languages: {
          de: `${baseUrl}/impressum?lang=de`,
          en: `${baseUrl}/impressum?lang=en`,
          fr: `${baseUrl}/impressum?lang=fr`,
        },
      },
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
      alternates: {
        languages: {
          de: `${baseUrl}/privacy?lang=de`,
          en: `${baseUrl}/privacy?lang=en`,
          fr: `${baseUrl}/privacy?lang=fr`,
        },
      },
    },
  ];
}

