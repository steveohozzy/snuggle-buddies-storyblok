import {
  StoryblokServerComponent,
  storyblokEditable,
} from "@storyblok/react/rsc";

export default function Grid({ blok }) {
  const mobileCols = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
    6: "grid-cols-6",
    7: "grid-cols-7",
    8: "grid-cols-8",
    9: "grid-cols-9",
    10: "grid-cols-10",
    11: "grid-cols-11",
    12: "grid-cols-12",
  };

  const tabletCols = {
    1: "md:grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
    5: "md:grid-cols-5",
    6: "md:grid-cols-6",
    7: "md:grid-cols-7",
    8: "md:grid-cols-8",
    9: "md:grid-cols-9",
    10: "md:grid-cols-10",
    11: "md:grid-cols-11",
    12: "md:grid-cols-12",
  };

  const desktopCols = {
    1: "lg:grid-cols-1",
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
    5: "lg:grid-cols-5",
    6: "lg:grid-cols-6",
    7: "lg:grid-cols-7",
    8: "lg:grid-cols-8",
    9: "lg:grid-cols-9",
    10: "lg:grid-cols-10",
    11: "lg:grid-cols-11",
    12: "lg:grid-cols-12",
  };

  const gaps = {
    4: "gap-4",
    6: "gap-6",
    8: "gap-8",
    10: "gap-10",
    12: "gap-12",
  };

  return (
    <section
      {...storyblokEditable(blok)}
      className="mx-auto max-w-7xl px-4 md:px-8 py-8"
    >
      <div
        className={[
          "grid",

          mobileCols[blok.columnsMobile] || "grid-cols-1",
          tabletCols[blok.columnsTablet] || "md:grid-cols-2",
          desktopCols[blok.columnsDesktop] || "lg:grid-cols-12",

          gaps[blok.gap] || "gap-6",
        ].join(" ")}
      >
        {blok.content?.map((nested) => (
          <StoryblokServerComponent
            blok={nested}
            key={nested._uid}
          />
        ))}
      </div>
    </section>
  );
}