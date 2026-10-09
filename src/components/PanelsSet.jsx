"use client";

import { useState } from "react";
import Image from "next/image";
import { storyblokEditable } from "@storyblok/react";

export default function PanelsSet({
  blok,
}) {
  const panels =
    blok.Panels ?? [];

  const [active, setActive] =
    useState(null);

  return (
    <section
      {...storyblokEditable(blok)}
      id="play"
      className="bg-muted/60 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {blok.Tagline &&
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            {blok.Tagline ||
              "Why play matters"}
          </span>
          }

          {blok.Title &&
          <h2 className="mt-3 text-balance font-heading text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            {blok.Title ||
              "Play isn't a break from learning. It is learning."}
          </h2>
          }

          {blok.IntroBlurb &&
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            {blok.IntroBlurb ||
              "Every game, every giggle, every tower that tumbles down."}
          </p>
          }
        </div>

        <div className={`${blok.Tagline || blok.Title || blok.IntroBlurb ? "mt-12" : ""} grid gap-12 md:grid-cols-2 lg:grid-cols-3`}>
          {panels.map((p, i) => {
            const isActive =
              active === i;

            return (
              <button
                key={
                  p._uid || i
                }
                onMouseEnter={() =>
                  setActive(i)
                }
                onFocus={() =>
                  setActive(i)
                }
                onClick={() =>
                  setActive(i)
                }
                onMouseLeave={() =>
                  setActive(null)
                }
                className={`group flex flex-col items-start rounded-3xl border p-6 text-left transition-all duration-300 ${
                  isActive
                    ? "scale-[1.02] border-transparent bg-card shadow-xl"
                    : "border-border bg-card/60 hover:bg-card"
                }`}
              >
                {p.ImageMain
                    ?.filename && (
                <span
                  className={`flex size-12 items-center justify-center rounded-2xl p-2 mb-5 ${
                    i === 0
                      ? "bg-secondary"
                      : i === 1
                      ? "bg-primary/70"
                      : i === 2
                      ? "bg-accent"
                      : "bg-chart-4"
                  }`}
                >
                    <Image
                      src={
                        p.ImageMain
                          .filename
                      }
                      alt={
                        p.Title ||
                        ""
                      }
                      width={60}
                      height={60}
                      className="object-cover"
                    />
                  
                </span>
                )}

                <div className="font-heading text-xl font-semibold text-foreground">
                  {p.Title}
                </div>

                <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                  {p.Blurb}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}