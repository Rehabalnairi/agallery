import Image from "next/image";
import type { Artwork } from "@/types/artwork";

type ArtworkDetailsProps = {
  artwork: Artwork;
};

export default function ArtworkDetails({ artwork }: ArtworkDetailsProps) {
  return (
    <section className="px-4 py-5">
      <div className="gallery-panel mx-auto grid max-w-7xl gap-10 rounded-2xl p-7 sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-violet-400/40 bg-zinc-900">
          <Image
            src={artwork.image}
            alt={artwork.title}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="lg:sticky lg:top-24">
          <p className="mb-8 text-xs text-stone-500">Home &gt; Gallery &gt; {artwork.title}</p>
          <h1 className="serif-title text-4xl text-stone-50 sm:text-5xl">{artwork.title}</h1>
          <p className="mt-4 text-sm text-stone-400">
            {artwork.artist}, {artwork.year}
          </p>
          <div className="mt-7 flex gap-3">
            <button className="grid h-12 w-12 place-items-center rounded-xl bg-violet-600 text-lg text-white">
              Like
            </button>
            <button className="rounded-xl border border-white/10 px-5 text-sm text-stone-300">
              View in Room
            </button>
          </div>
          <dl className="mt-8 grid max-w-xl gap-5 text-sm sm:grid-cols-[8rem_1fr]">
            <div>
              <dt className="text-stone-500">Medium</dt>
              <dd className="mt-1 text-stone-200">{artwork.medium}</dd>
            </div>
            <div>
              <dt className="text-stone-500">Dimensions</dt>
              <dd className="mt-1 text-stone-200">{artwork.dimensions}</dd>
            </div>
            <div>
              <dt className="text-stone-500">Category</dt>
              <dd className="mt-1 text-stone-200">{artwork.category}</dd>
            </div>
            <div>
              <dt className="text-stone-500">Year</dt>
              <dd className="mt-1 text-stone-200">{artwork.year}</dd>
            </div>
          </dl>
          <p className="mt-8 max-w-xl text-base leading-8 text-stone-300">{artwork.description}</p>
        </div>
      </div>
    </section>
  );
}
