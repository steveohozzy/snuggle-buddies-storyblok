import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { storyblokEditable } from "@storyblok/react/rsc";

export default function BuddiesCategoryLinks({ blok }) {
const cards = blok.Cards || [];

return (
<section
{...storyblokEditable(blok)}
className="px-4 py-16 md:px-8 md:py-24 bg-[#f9e6e2]"
> 
  <div className="mx-auto max-w-7xl">
    <div className="mb-8 md:mb-12">
      {blok.Eyebrow && ( <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
        {blok.Eyebrow} </p>
      )}


      {blok.Title && (
        <h2 className="font-heading text-3xl font-bold text-foreground md:text-5xl">
          {blok.Title}
        </h2>
      )}

      {blok.Description && (
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          {blok.Description}
        </p>
      )}
    </div>

    <div className="grid grid-cols-1 gap-[26px] md:grid-cols-[1fr_1.4fr]">
      {cards.map((card) => {
        const category = (card.Category || "").trim();

        const href = category
          ? `/meet-the-buddies?category=${encodeURIComponent(category)}`
          : "/meet-the-buddies";

        return (
          <Link
            key={card._uid}
            href={href}
            {...storyblokEditable(card)}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {card.Image?.filename && (
              <div className="h-56 shrink-0 overflow-hidden bg-muted md:h-72">
                <img
                  src={card.Image.filename}
                  alt={card.ImageAlt || card.Title || category}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
            )}

            <div className="flex flex-1 flex-col justify-between p-5 md:p-7">
              {card.Eyebrow && (
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
                  {card.Eyebrow}
                </p>
              )}

              <h3 className="flex items-center justify-between gap-4 font-heading text-xl font-bold text-foreground md:text-2xl">
                <span>{card.Title}</span>
                <ArrowRight className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1" />
              </h3>
            </div>
          </Link>
        );
      })}
    </div>
  </div>
</section>


);
}
