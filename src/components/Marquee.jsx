'use client';

import { storyblokEditable } from '@storyblok/react';

export default function Marquee({ blok }) {

  return (
    <div
    {...storyblokEditable(blok)}
    className="bg-[#b4ddd2] px-4 py-5 text-[#004c46] sm:py-6">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:gap-x-16">
        <div className="flex items-center gap-3 text-xs font-semibold sm:text-sm">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className="h-5 w-5 shrink-0"
            aria-hidden="true"
          >
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
          </svg>
          {blok.marqueeItem1}
        </div>

        <div className="flex items-center gap-3 text-xs font-semibold sm:text-sm">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className="h-5 w-5 shrink-0"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M9 14s1 2 3 2 3-2 3-2M9 9h.01M15 9h.01" />
          </svg>
          {blok.marqueeItem2}
        </div>

        <div className="flex items-center gap-3 text-xs font-semibold sm:text-sm">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className="h-5 w-5 shrink-0"
            aria-hidden="true"
          >
            <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
            <path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z" />
          </svg>
          {blok.marqueeItem3}
        </div>
      </div>
    </div>
  );
}