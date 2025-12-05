import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.b64.no";

  // Static pages
  const staticPages = [
    "",
    "/om-oss",
    "/tjenester",
    "/artikler",
    "/kontakt",
    "/karriere",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // In the future, you would fetch articles from Sanity here
  // const articles = await getArticles();
  // const articlePages = articles.map((article) => ({
  //   url: `${baseUrl}/artikler/${article.slug}`,
  //   lastModified: article.updatedAt,
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.6,
  // }));

  return [...staticPages];
}
