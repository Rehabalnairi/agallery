import ArtworkCard from "@/components/gallery/ArtworkCard";
import type { Artwork } from "@/types/artwork";

type GalleryGridProps = {
  artworks: Artwork[];
};

export default function GalleryGrid({ artworks }: GalleryGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {artworks.map((artwork) => (
        <ArtworkCard key={artwork.id} artwork={artwork} />
      ))}
    </div>
  );
}
