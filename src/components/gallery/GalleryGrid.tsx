import ArtworkCard from "@/components/gallery/ArtworkCard";
import type { Locale } from "@/i18n/config";
import type { Artwork } from "@/types/artwork";

type GalleryGridProps = {
  locale: Locale;
  artworks: Artwork[];
  categoryLabels: Record<string, string>;
  likeLabels: {
    like: string;
    liked: string;
    likeArtwork: string;
  };
};

export default function GalleryGrid({ locale, artworks, categoryLabels, likeLabels }: GalleryGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {artworks.map((artwork) => (
        <ArtworkCard
          key={artwork.id}
          locale={locale}
          artwork={artwork}
          categoryLabel={categoryLabels[artwork.category]}
          labels={likeLabels}
        />
      ))}
    </div>
  );
}
