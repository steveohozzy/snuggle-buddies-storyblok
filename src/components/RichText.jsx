import { renderRichText, storyblokEditable } from "@storyblok/react/rsc";

export default function RichText({ blok }) {
  const paddingTop = {
    none: "",
    sm: "pt-4",
    md: "pt-8",
    lg: "pt-16",
    xl: "pt-24",
  };

  const paddingBottom = {
    none: "",
    sm: "pb-4",
    md: "pb-8",
    lg: "pb-16",
    xl: "pb-24",
  };

  const width = {
    full: "max-w-none",
    sm: "max-w-2xl",
    md: "max-w-4xl",
    lg: "max-w-6xl",
  };

  const paddingX = {
    none: "",
    sm: "px-4",
    md: "px-6 md:px-8",
    lg: "px-8 md:px-12",
    xl: "px-10 md:px-16",
  };

  return (
    <section
      {...storyblokEditable(blok)}
      className={[
        "mx-auto items-center gap-10 lg:gap-12",
        width[blok.width] || "max-w-none",
        paddingTop[blok.paddingTop] || "",
        paddingBottom[blok.paddingBottom] || "",
        paddingX[blok.paddingX] || "",

        "[&_h2]:text-primary",
        "[&_h2]:text-3xl",
        "[&_h2]:font-heading",
        "[&_h2]:mt-8",
        "[&_h2]:mb-4",

        "[&_h3]:text-primary",
        "[&_h3]:text-2xl",
        "[&_h3]:font-heading",
        "[&_h3]:mt-8",
        "[&_h3]:mb-4",

        "[&_h4]:text-primary",
        "[&_h4]:text-xl",
        "[&_h4]:font-heading",
        "[&_h4]:mt-8",
        "[&_h4]:mb-4",

        "[&_ul]:space-y-4",
        "[&_li]:leading-8",
        "[&_li]:leading-8",
        "[&_li]:list-disc",
        "[&_li]:list-inside",

        "[&_li>p]:m-0",
        "[&_li>p]:inline",

        "[&_p]:text-muted-foreground",
        "[&_p]:leading-8",
        "[&_p]:mb-6",

        "[&_a]:text-primary",
        "[&_a]:font-medium",
        "[&_a]:no-underline",
        "hover:[&_a]:underline",

        "[&_.blog-cat-link]:hidden",

        "[&_img]:overflow-hidden",
        "[&_img]:rounded-[2rem]",
        "[&_img]:border",
        "[&_img]:border-border",
        "[&_img]:shadow-xl",
      ].join(" ")}
      dangerouslySetInnerHTML={{
        __html: renderRichText(blok.Content),
      }}
    />
  );
}