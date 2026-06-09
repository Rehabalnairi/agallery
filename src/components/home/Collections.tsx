import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import type { Artwork } from "@/types/artwork";

type CollectionsProps = {
  artworks: Artwork[];
};

export default function Collections({ artworks }: CollectionsProps) {
  const collections = [
    { title: "Abstract Expressions", count: "24 Artworks", artwork: artworks[0] },
    { title: "Nature's Beauty", count: "18 Artworks", artwork: artworks[1] ?? artworks[0] },
    { title: "Portrait Stories", count: "22 Artworks", artwork: artworks[2] ?? artworks[0] },
    { title: "Modern Visions", count: "16 Artworks", artwork: artworks[0] },
  ];

  return (
    <section className="art-font px-4 pb-5">
      <div className="gallery-panel mx-auto max-w-7xl rounded-2xl p-7 sm:p-10">
        <div className="mb-8 flex items-center justify-between gap-4">
          <h2 className="serif-title text-3xl text-stone-50 sm:text-4xl">
            Curated Collections
          </h2>
          <Link href="/gallery" className="text-sm text-stone-300 transition hover:text-white">
            View all
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-4">
          {collections.map((collection) => (
            <Link
              key={collection.title}
              href="/gallery"
              className="group relative flex min-h-72 overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5"
            >
              <Image
                src={collection.artwork.image}
                alt={collection.title}
                fill
                sizes="(min-width: 768px) 25vw, 100vw"
                className="object-cover opacity-70 transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
              <div className="relative mt-auto flex w-full items-end justify-between gap-4">
                <div>
                  <h3 className="serif-title text-2xl leading-tight text-white">
                    {collection.title}
                  </h3>
                  <p className="mt-4 text-sm text-stone-300">{collection.count}</p>
                </div>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/40 text-white transition group-hover:border-cyan-300">
                  <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 overflow-hidden rounded-xl border border-white/10 bg-[radial-gradient(circle_at_70%_40%,rgba(139,92,246,0.55),transparent_18rem),linear-gradient(90deg,rgba(13,12,19,1),rgba(24,24,36,1))] p-7">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="serif-title text-2xl text-white">Stay inspired with ArtVista</h3>
              <p className="mt-2 text-sm text-stone-300">
                Subscribe to get updates on new artworks and exhibitions.
              </p>
            </div>
            <form className="flex w-full max-w-md overflow-hidden rounded-full border border-white/15 bg-black/20 p-1">
              <input
                aria-label="Email address"
                placeholder="Enter your email"
                className="min-w-0 flex-1 bg-transparent px-5 text-sm text-white outline-none placeholder:text-stone-500"
              />
              <button className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
