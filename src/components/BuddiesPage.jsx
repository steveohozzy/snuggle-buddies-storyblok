import { storyblokEditable } from "@storyblok/react/rsc";
import { getBuddies } from "@/lib/storyblok";
import BuddiesPageClient from "@/components/BuddiesPageClient";

export default async function BuddiesPage({ blok }) {
const buddies = await getBuddies();

return (
<main {...storyblokEditable(blok)}> <section className="mx-auto max-w-7xl px-4 pb-16 pt-12 md:px-8 md:pb-24 md:pt-16"> <div className="mx-auto mb-10 max-w-4xl text-center md:mb-14">
{blok.Eyebrow && ( <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
{blok.Eyebrow} </p>
)}
      {blok.Title && (
        <h1 className="font-heading text-3xl font-bold text-foreground md:text-5xl">
          {blok.Title}
        </h1>
      )}

      {blok.Description && (
        <p className="mt-4 leading-relaxed text-muted-foreground">
          {blok.Description}
        </p>
      )}
    </div>

    <BuddiesPageClient
      buddies={buddies}
      searchPlaceholder={
        blok.SearchPlaceholder || "Find a little friend…"
      }
      emptyMessage={
        blok.EmptyMessage || "No little friends found this time."
      }
      resetButtonLabel={
        blok.ResetButtonLabel || "See all buddies"
      }
    />
  </section>
</main>

);
}
