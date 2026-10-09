import { StoryblokStory } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/lib/storyblok";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const slug = (await params)?.slug?.join("/") || "home";

  let data;

  try {
    const storyblokApi = getStoryblokApi();

    const res = await storyblokApi.get(
      `cdn/stories/${slug}`,
      { version: "draft" }
    );

    data = res.data;
  } catch (e) {
    notFound();
  }

  if (!data?.story) {
    notFound();
  }

  return <StoryblokStory story={data.story} />;
}