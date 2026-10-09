import Image from "next/image";
import Link from "next/link";
import { Leaf, Heart } from "lucide-react";
import { storyblokEditable } from "@storyblok/react/rsc";
import { renderRichText } from "@storyblok/react";
import { resolveLink } from "@/lib/storyblok";

export default function StorySection({ blok }) {
const title = blok.Title || "Not just a soft toy. A friend for the everyday.";
const description = blok.Blurb
? renderRichText(blok.Blurb)
: "The make-believe adventures. The cosy afternoons. The one-more-hug before bed. Snuggle Buddies belong in those little moments, bringing a whole lot of personality and a little extra softness.";

return (
<section
{...storyblokEditable(blok)}
id="story"
className="bg-accent px-4 py-16 md:px-8 md:py-20"
> <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16"> <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
<Image
src={blok.Image?.filename || "/images/heritage.png"}
alt={
blok.ImageAlt ||
"The original Snuggle Buddies family of colourful soft animal toys"
}
fill
sizes="(max-width: 767px) 100vw, 50vw"
className="object-cover"
loading="lazy"
quality={85}
/> </div>


    <div className="story-copy">
      <div className="mb-5 inline-flex items-center gap-2 text-sm font-bold text-primary">
        <Leaf size={17} aria-hidden="true" />
        {blok.Tagline || "Our snuggly little world"}
      </div>

      <h2 className="font-heading text-3xl font-bold leading-tight text-primary md:text-4xl lg:text-5xl">
        {title}
      </h2>

      {blok.Blurb ? (
        <div
          className="mt-5 max-w-xl space-y-4 text-base leading-8 text-muted-foreground md:text-lg"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      ) : (
        <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
          {description}
        </p>
      )}

      {blok.ctaText && (
        <div className="mt-7">
          <Link
            href={resolveLink(blok.CtaLink) || "/our-world"}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-5 py-3 text-sm font-semibold text-primary shadow-sm transition-colors hover:bg-muted shadow-md"
          >
            {blok.ctaText}
            <Heart size={17} aria-hidden="true" />
          </Link>
        </div>
      )}
    </div>
  </div>
</section>


);
}
