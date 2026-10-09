import { getStoryblokApi } from "./storyblok";

export async function getNavigation() {
  const storyblokApi = getStoryblokApi();

  const { data } = await storyblokApi.get("cdn/links", {
    version: "draft",
  });

  return Object.values(data.links)
    .filter((link) => {
      const slug = link.slug;

      if (!slug) return false;

      if (slug === "home") return false;

      if (slug.startsWith("globals")) return false;

      if (slug.startsWith("footer")) return false;

      return true;
    })
    .filter((link) => {
      return !link.slug.includes("/") || link.slug.split("/").length === 1;
    });
}