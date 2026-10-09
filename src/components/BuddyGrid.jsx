"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Heart, X } from "lucide-react";
import { useBuddyFavourites } from "@/lib/useBuddyFavourites";

export default function BuddyGrid({ items = [] }) {
  const { saved, toggleFavourite } = useBuddyFavourites(items);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setSelected(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function openBuddy(buddy) {
    setSelected(buddy);
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.slice(0, 3).map((buddy) => {
          const isSaved = saved.includes(buddy.id);

          return (
            <article key={buddy.id}>
              <div className="buddy-image relative aspect-square overflow-hidden rounded-lg">
                <button
                  type="button"
                  onClick={() => openBuddy(buddy)}
                  aria-label={`Meet ${buddy.name}`}
                  className="block h-full w-full cursor-pointer"
                >
                  <img
                    src={buddy.image}
                    alt={`Snuggle Buddies ${buddy.name}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.04]"
                  />
                </button>

                <span className="buddy-kind absolute left-[14px] top-[15px] rounded-full bg-background px-[10px] py-[5px] text-[10px] font-semibold">
                  {buddy.category}
                </span>

                <button
                  type="button"
                  className={`inline-flex h-9 w-9 cursor-pointer items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground favorite rounded-full bg-background ${
                    isSaved ? "is-saved" : ""
                  } absolute right-[14px] top-[14px]`}
                  onClick={() => toggleFavourite(buddy.id)}
                  aria-label={`${isSaved ? "Unsave" : "Save"} ${buddy.name}`}
                  title="Favourite buddy"
                >
                  <Heart fill={isSaved ? "currentColor" : "none"} />
                </button>
              </div>

              <div className="flex items-center justify-between px-px pb-1 pt-[18px]">
                <div>
                  <h3 className="mb-1 text-[23px] font-semibold">
                    {buddy.name}
                  </h3>
                  <p className="text-[13px] text-muted-foreground">
                    {buddy.line}
                  </p>
                </div>

                <button
                  type="button"
                  className="inline-flex h-9 w-9 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground"
                  aria-label={`Discover ${buddy.name}`}
                  onClick={() => openBuddy(buddy)}
                >
                  <ArrowRight />
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-foreground/40 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelected(null);
            }
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="buddy-modal-title"
            aria-describedby="buddy-modal-description"
            className="relative grid w-full max-w-md gap-4 rounded-lg border border-border bg-background p-6 shadow-lg"
          >
            <img
              src={selected.image}
              alt={selected.name}
              className="modal-product aspect-square w-full rounded-lg object-cover"
            />

            <div className="flex flex-col space-y-1.5 text-center sm:text-left">
              <h2
                id="buddy-modal-title"
                className="font-heading text-2xl font-semibold tracking-tight"
              >
                {selected.name}
              </h2>

              <p className="text-sm text-muted-foreground">
                {selected.description || selected.line}
              </p>
            </div>

            <div className="flex gap-3">
              <a
                href={`https://www.thetoyshop.com/p/${encodeURIComponent(
                  selected.id
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 flex-1 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 [&_svg]:size-4"
              >
                Find at The Entertainer
                <ArrowRight />
              </a>

              <button
                type="button"
                onClick={() => toggleFavourite(selected.id)}
                aria-label={
                  saved.includes(selected.id)
                    ? "Remove from favourites"
                    : "Add to favourites"
                }
                title="Toggle favourite"
                className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9`}
              >
                <Heart
                  className="h-4 w-4"
                  fill={
                    saved.includes(selected.id) ? "currentColor" : "none"
                  }
                />
              </button>
            </div>

            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="absolute right-4 top-4 cursor-pointer rounded-sm opacity-90 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-background shadow-md p-2 rounded-md border border-input"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>
          </section>
        </div>
      )}
    </>
  );
}