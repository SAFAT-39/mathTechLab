import type { MetadataRoute } from "next";
import getGamesPages from "./games/sitemapUtil";
import getHomePage from "./(home)/sitemapUtil";
import getTimesTablesPages from "./times-tables/sitemapUtil";
import getFactorsPages from "./factors/sitemapUtil";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    getHomePage(),
    ...getGamesPages(),
    ...getTimesTablesPages(),
    ...getFactorsPages(),
    ...getExtraPages(),
  ];
}

const getExtraPages = () => {
  return [
    {
      url: "https://mathtechlab.com/privacy-policy",
      lastModified: "2025-04-07",
      priority: 0.6,
    },
    {
      url: "https://mathtechlab.com/terms-of-service",
      lastModified: "2025-04-07",
      priority: 0.6,
    },
  ];
};
