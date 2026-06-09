import { notFound } from "next/navigation";
import ArtworkDetails from "@/components/artwork/ArtworkDetails";
import { getArtworkBySlug, getArtworks } from "@/lib/getArtworks";

type ArtworkPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getArtworks().map((artwork) => ({
    slug: artwork.slug,
  }));
}

export async function generateMetadata({ params }: ArtworkPageProps) {
  const { slug } = await params;
  const artwork = getArtworkBySlug(slug);

  if (!artwork) {
    return {
      title: "Artwork Not Found",
    };
  }

  return {
    title: `${artwork.title} | Art Gallery`,
    description: artwork.description,
  };
}

export default async function ArtworkPage({ params }: ArtworkPageProps) {
  const { slug } = await params;
  const artwork = getArtworkBySlug(slug);

  if (!artwork) {
    notFound();
  }

  return <ArtworkDetails artwork={artwork} />;
}
