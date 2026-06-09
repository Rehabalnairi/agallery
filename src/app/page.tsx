import Collections from "@/components/home/Collections";
import Hero from "@/components/home/Hero";
import { getFeaturedArtworks } from "@/lib/getArtworks";

export default function Home() {
  const featuredArtworks = getFeaturedArtworks();

  return (
    <>
      <Hero />
      <Collections artworks={featuredArtworks} />
    </>
  );
}
