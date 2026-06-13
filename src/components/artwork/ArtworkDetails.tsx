"use client";

import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import BorderGlow from "@/components/gallery/BorderGlow";
import type { Artwork } from "@/types/artwork";

type ArtworkDetailsProps = {
  artwork: Artwork;
  categoryLabel: string;
  labels: {
    breadcrumbHome: string;
    breadcrumbGallery: string;
    like: string;
    liked: string;
    likeArtwork: string;
    medium: string;
    dimensions: string;
    category: string;
    year: string;
  };
};

export default function ArtworkDetails({ artwork, categoryLabel, labels }: ArtworkDetailsProps) {
  const [liked, setLiked] = useState(false);

  return (
    <section className="px-4 py-5">
      <BorderGlow
        animated
        borderRadius="clamp(18px, 5vw, 24px)"
        glowRadius="clamp(24px, 8vw, 52px)"
        glowIntensity={0.65}
        fillOpacity={0.18}
        className="mx-auto max-w-7xl rounded-2xl"
      >
        <div className="gallery-panel grid gap-8 p-4 sm:gap-10 sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <BorderGlow
            animated
            borderRadius="clamp(14px, 4vw, 18px)"
            glowRadius="clamp(18px, 7vw, 38px)"
            glowIntensity={0.55}
            fillOpacity={0.12}
            className="rounded-xl"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900">
              <Image
                src={artwork.image}
                alt={artwork.title}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </BorderGlow>
          <div className="lg:sticky lg:top-24">
            <p className="mb-8 break-words text-xs text-stone-500">
              {labels.breadcrumbHome} &gt; {labels.breadcrumbGallery} &gt; {artwork.title}
            </p>
            <h1 className="serif-title break-words text-3xl text-stone-50 sm:text-5xl">{artwork.title}</h1>
            <p className="mt-4 text-sm text-stone-400">
              {artwork.artist}, {artwork.year}
            </p>
            <div className="mt-7 flex gap-3">
              <button
                type="button"
                aria-pressed={liked}
                aria-label={liked ? labels.liked : labels.likeArtwork}
                onClick={() => setLiked(true)}
                className="grid h-12 w-12 place-items-center rounded-xl bg-violet-600 text-lg text-white transition hover:bg-violet-500"
              >
                {liked ? (
                  <FontAwesomeIcon icon={faHeart} className="h-5 w-5 text-red-100" aria-hidden="true" />
                ) : (
                  labels.like
                )}
              </button>
            </div>
            <dl className="mt-8 grid max-w-xl gap-5 text-sm sm:grid-cols-[8rem_1fr]">
              <div>
                <dt className="text-stone-500">{labels.medium}</dt>
                <dd className="mt-1 text-stone-200">{artwork.medium}</dd>
              </div>
              <div>
                <dt className="text-stone-500">{labels.dimensions}</dt>
                <dd className="mt-1 text-stone-200">{artwork.dimensions}</dd>
              </div>
              <div>
                <dt className="text-stone-500">{labels.category}</dt>
                <dd className="mt-1 text-stone-200">{categoryLabel}</dd>
              </div>
              <div>
                <dt className="text-stone-500">{labels.year}</dt>
                <dd className="mt-1 text-stone-200">{artwork.year}</dd>
              </div>
            </dl>
            <p className="mt-8 max-w-xl break-words text-base leading-8 text-stone-300">{artwork.description}</p>
          </div>
        </div>
      </BorderGlow>
    </section>
  );
}
