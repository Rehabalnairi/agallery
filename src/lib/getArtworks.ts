import artworks from "@/data/artworks.json";
import type { Artwork } from "@/types/artwork";

const allArtworks = artworks as Artwork[];

export function getArtworks() {
  return allArtworks;
}

export function getFeaturedArtworks() {
  return allArtworks.filter((artwork) => artwork.featured);
}

export function getArtworkBySlug(slug: string) {
  return allArtworks.find((artwork) => artwork.slug === slug);
}
