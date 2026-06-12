import { notFound } from "next/navigation";
import Collections from "@/components/home/Collections";
import Hero from "@/components/home/Hero";
import { getDictionary, localizeArtworks } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/config";
import { getFeaturedArtworks } from "@/lib/getArtworks";

type HomeProps = {
  params: Promise<{
    lang: string;
  }>;
};

export default async function Home({ params }: HomeProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);
  const featuredArtworks = localizeArtworks(getFeaturedArtworks(), dictionary);

  return (
    <>
      <Hero locale={lang} labels={dictionary.hero} />
      <Collections
        locale={lang}
        artworks={featuredArtworks}
        labels={dictionary.collections}
      />
    </>
  );
}
