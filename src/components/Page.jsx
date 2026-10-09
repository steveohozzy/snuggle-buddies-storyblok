import { StoryblokServerComponent, storyblokEditable } from "@storyblok/react/rsc";

export default function Page({ blok }) {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.body?.map((nestedBlok) => (
        <StoryblokServerComponent
          key={nestedBlok._uid}
          blok={nestedBlok}
        />
      ))}
    </main>
  );
}