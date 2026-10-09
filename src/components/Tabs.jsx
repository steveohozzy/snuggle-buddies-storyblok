"use client";

import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { useState } from "react";

export default function Tabs({ blok }) {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = blok.content || [];

  if (!tabs.length) return null;

  return (
    <section
      {...storyblokEditable(blok)}
      className="mx-auto max-w-7xl px-4 py-12"
    >
     {blok.title &&
          <h2 className="mt-3 text-balance text-center font-heading text-4xl font-semibold leading-tight text-primary md:text-5xl">
            {blok.title ||
              "Play isn't a break from learning. It is learning."}
          </h2>
          } 
      {/* TAB BUTTONS */}
      <div className="mb-8 flex flex-wrap gap-2 border-b-2 border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={tab._uid}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-3 font-medium transition-colors cursor-pointer -mb-[2px] ${
              activeTab === index
                ? "border-b-2 border-primary text-primary"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.TabTitle || "Untitled Tab"}
          </button>
        ))}
      </div>

      {/* TAB CONTENT */}
      <div className="min-h-[200px]">
        {tabs.map((tab, index) => (
          <div
            key={tab._uid}
            className={activeTab === index ? "block" : "hidden"}
          >
            {(tab.Content || []).map((nestedBlok) => (
              <StoryblokComponent
                key={nestedBlok._uid}
                blok={nestedBlok}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}