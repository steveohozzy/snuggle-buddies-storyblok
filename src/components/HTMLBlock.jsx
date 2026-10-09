import { storyblokEditable } from "@storyblok/react/rsc";

export default function HtmlBlock({ blok }) {
  return (
    <div
      className="h-full"
      {...storyblokEditable(blok)}
      dangerouslySetInnerHTML={{
        __html: blok.HTML || "",
      }}
    />
  );
}