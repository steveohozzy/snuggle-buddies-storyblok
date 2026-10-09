
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { storyblokEditable } from "@storyblok/react/rsc";
import { getBuddies } from "@/lib/storyblok";
import BuddyGrid from "@/components/BuddyGrid";

export default async function BuddiesSection({ blok }) {
  const buddies = (await getBuddies()).slice(0, 3);

  return (
    <section
      {...storyblokEditable(blok)}
      className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24"
    >
      <div className="mb-8 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
        <div className="max-w-4xl">
          {blok.Eyebrow && (
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
              {blok.Eyebrow}
            </p>
          )}

          {blok.Title && (
            <h2 className="font-heading text-2xl font-bold text-foreground md:text-5xl">
              {blok.Title}
            </h2>
          )}

          {blok.Description && (
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {blok.Description}
            </p>
          )}
        </div>

        <Link
          href={blok.link?.cached_url ? `/${blok.link.cached_url}` : "/buddies"}
          className="inline-flex shrink-0 items-center gap-2 font-semibold text-primary transition-colors hover:text-foreground"
        >
          {blok.linkLabel || "Explore all buddies"}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <BuddyGrid items={buddies} />
    </section>
  );
}