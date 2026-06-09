"use client";

import { useMemo, useState } from "react";
import FilterTabs from "@/components/gallery/FilterTabs";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import type { Artwork } from "@/types/artwork";

type GalleryBrowserProps = {
  artworks: Artwork[];
};

export default function GalleryBrowser({ artworks }: GalleryBrowserProps) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(artworks.map((artwork) => artwork.category)))],
    [artworks],
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
          {filteredArtworks.length} artwork{filteredArtworks.length === 1 ? "" : "s"}
        </p>
      </div>
      <GalleryGrid artworks={filteredArtworks} />
    </>
  );
}
