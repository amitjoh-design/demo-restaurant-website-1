import type { MetadataRoute } from "next";

// Demo site: block all crawlers so it is not indexed by search engines.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", disallow: "/" }],
  };
}
