import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import type { Locale } from "@/i18n/config";
import type { Artwork } from "@/types/artwork";

type CollectionsProps = {
  locale: Locale;
  artworks: Artwork[];
  labels: {
    title: string;
    viewAll: string;
    artworks: string;
    items: string[];
    newsletterTitle: string;
    newsletterDescription: string;
    emailLabel: string;
    emailPlaceholder: string;
    subscribe: string;
  };
};

export default function Collections({ locale, artworks, labels }: CollectionsProps) {
  const collections = [
    { title: labels.items[0], count: `24 ${labels.artworks}`, artwork: artworks[0] },
    { title: labels.items[1], count: `18 ${labels.artworks}`, artwork: artworks[1] ?? artworks[0] },
    { title: labels.items[2], count: `22 ${labels.artworks}`, artwork: artworks[2] ?? artworks[0] },
    { title: labels.items[3], count: `16 ${labels.artworks}`, artwork: artworks[0] },
  ];

  return (
    <section className="art-font pb-5">
      <div className="gallery-panel w-full rounded-2xl p-5 sm:p-10">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h2 className="serif-title min-w-0 break-words text-3xl text-stone-50 sm:text-4xl">
            {labels.title}
          </h2>
          <Link href={`/${locale}/gallery`} className="text-sm text-stone-300 transition hover:text-white">
            {labels.viewAll}
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-4">
          {collections.map((collection) => (
            <Link
              key={collection.title}
              href={`/${locale}/gallery`}
              className="group relative flex min-h-72 overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 outline-none transition duration-300 active:scale-[0.98] focus-visible:border-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-300/40"
            >
              <Image
                src={collection.artwork.image}
                alt={collection.title}
                fill
                sizes="(min-width: 768px) 25vw, 100vw"
                className="object-cover opacity-70 transition duration-500 group-hover:scale-105 group-active:scale-105 group-focus-visible:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
              <div className="relative mt-auto flex w-full items-end justify-between gap-4">
                <div>
                  <h3 className="serif-title break-words text-2xl leading-tight text-white">
                    {collection.title}
                  </h3>
                  <p className="mt-4 text-sm text-stone-300">{collection.count}</p>
                </div>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/40 text-white transition group-hover:border-cyan-300 group-active:border-cyan-300 group-focus-visible:border-cyan-300">
                  <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 overflow-hidden rounded-xl border border-white/10 bg-[radial-gradient(circle_at_70%_40%,rgba(139,92,246,0.55),transparent_18rem),linear-gradient(90deg,rgba(13,12,19,1),rgba(24,24,36,1))] p-5 sm:p-7">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="serif-title text-2xl text-white">{labels.newsletterTitle}</h3>
              <p className="mt-2 text-sm text-stone-300">
                {labels.newsletterDescription}
              </p>
            </div>
            <form className="flex w-full max-w-md flex-col gap-2 rounded-2xl border border-white/15 bg-black/20 p-2 sm:flex-row sm:overflow-hidden sm:rounded-full sm:p-1">
              <input
                aria-label={labels.emailLabel}
                placeholder={labels.emailPlaceholder}
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-stone-500 sm:px-5 sm:py-0"
              />
              <button className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white">
                {labels.subscribe}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
