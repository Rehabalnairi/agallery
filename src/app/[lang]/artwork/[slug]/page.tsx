import { notFound } from "next/navigation";
import ArtworkDetails from "@/components/artwork/ArtworkDetails";
import { getDictionary, localizeArtwork } from "@/i18n/dictionaries";
import { isLocale, locales } from "@/i18n/config";
import { getArtworkBySlug, getArtworks } from "@/lib/getArtworks";

type ArtworkPageProps = {
  params: Promise<{
    lang: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    getArtworks().map((artwork) => ({
      lang,
      slug: artwork.slug,
    })),
  );
}

export async function generateMetadata({ params }: ArtworkPageProps) {
  const { lang, slug } = await params;

  if (!isLocale(lang)) {
    return {
      title: "Artwork Not Found",
    };
  }

  const dictionary = getDictionary(lang);
  const artwork = getArtworkBySlug(slug);

  if (!artwork) {
    return {
      title: dictionary.metadata.notFound,
    };
  }

  const localizedArtwork = localizeArtwork(artwork, dictionary);

  return {
    title: `${localizedArtwork.title} | ${dictionary.metadata.title}`,
    description: localizedArtwork.description,
  };
}

export default async function ArtworkPage({ params }: ArtworkPageProps) {
  const { lang, slug } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const artwork = getArtworkBySlug(slug);

  if (!artwork) {
    notFound();
  }

  const dictionary = getDictionary(lang);

  return (
    <ArtworkDetails
      artwork={localizeArtwork(artwork, dictionary)}
      categoryLabel={dictionary.gallery.categories[artwork.category]}
      labels={{
        ...dictionary.artwork,
        breadcrumbHome: dictionary.gallery.breadcrumbHome,
        breadcrumbGallery: dictionary.gallery.breadcrumbGallery,
      }}
    />
  );
}
