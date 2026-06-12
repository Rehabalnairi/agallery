"use client";

import { useMemo, useState } from "react";
import FilterTabs from "@/components/gallery/FilterTabs";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import type { Locale } from "@/i18n/config";
import type { Artwork } from "@/types/artwork";

type GalleryBrowserProps = {
  locale: Locale;
  artworks: Artwork[];
  labels: {
    all: string;
    artworkSingular: string;
    artworkPlural: string;
    categories: Record<string, string>;
  };
};

export default function GalleryBrowser({ locale, artworks, labels }: GalleryBrowserProps) {
  const categories = useMemo(
    () => [
      { value: "All", label: labels.all },
      ...Array.from(new Set(artworks.map((artwork) => artwork.category))).map((category) => ({
        value: category,
        label: labels.categories[category] ?? category,
      })),
    ],
    [artworks, labels],
  );
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArtworks =
    activeCategory === "All"
      ? artworks
      : artworks.filter((artwork) => artwork.category === activeCategory);

  return (
    <>
      <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <FilterTabs
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        <p className="text-sm text-stone-400">
          {filteredArtworks.length}{" "}
          {filteredArtworks.length === 1 ? labels.artworkSingular : labels.artworkPlural}
        </p>
      </div>
      <GalleryGrid
        locale={locale}
        artworks={filteredArtworks}
        categoryLabels={labels.categories}
        likeLabels={{
          like: locale === "ar" ? "إعجاب" : "Like",
          liked: locale === "ar" ? "تم الإعجاب" : "Liked",
          likeArtwork: locale === "ar" ? "إعجاب بالعمل الفني" : "Like artwork",
        }}
      />
    </>
  );
}
