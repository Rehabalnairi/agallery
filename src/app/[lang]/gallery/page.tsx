import { notFound } from "next/navigation";
import GalleryBrowser from "@/components/gallery/GalleryBrowser";
import { getDictionary, localizeArtworks } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/config";
import { getArtworks } from "@/lib/getArtworks";

type GalleryPageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export default async function GalleryPage({ params }: GalleryPageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);
  const artworks = localizeArtworks(getArtworks(), dictionary);

  return (
    <section className="px-4 py-5">
      <div className="gallery-panel mx-auto max-w-7xl rounded-2xl p-7 sm:p-10">
        <div className="mb-8">
          <p className="mb-8 text-xs text-stone-500">
            {dictionary.gallery.breadcrumbHome} &gt; {dictionary.gallery.breadcrumbGallery}
          </p>
          <div>
            <h1 className="serif-title text-5xl text-stone-50">{dictionary.gallery.title}</h1>
            <div className="mt-4 h-px w-28 bg-gradient-to-r from-violet-500 to-transparent" />
          </div>
        </div>
        <GalleryBrowser locale={lang} artworks={artworks} labels={dictionary.gallery} />
      </div>
    </section>
  );
}
