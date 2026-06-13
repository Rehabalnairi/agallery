"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import BorderGlow from "@/components/ui/BorderGlow";
import type { Locale } from "@/i18n/config";
import type { Artwork } from "@/types/artwork";

type ArtworkCardProps = {
  locale: Locale;
  artwork: Artwork;
  categoryLabel: string;
  labels: {
    like: string;
    liked: string;
    likeArtwork: string;
  };
};

export default function ArtworkCard({ locale, artwork, categoryLabel, labels }: ArtworkCardProps) {
  const [liked, setLiked] = useState(false);
  const href = `/${locale}/artwork/${artwork.slug}`;

  return (
    <BorderGlow className="overflow-hidden rounded-xl transition duration-300 hover:-translate-y-1">
      <div className="group block bg-white/[0.04]">
        <Link href={href} className="block">
          <div className="relative aspect-[4/4.1] overflow-hidden bg-zinc-900">
            <Image
              src={artwork.image}
              alt={artwork.title}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
        </Link>
        <div className="flex items-end justify-between gap-4 p-4">
          <Link href={href} className="min-w-0">
            <h3 className="break-words text-sm font-semibold text-stone-50">{artwork.title}</h3>
            <p className="mt-1 break-words text-xs text-stone-400">{artwork.artist}</p>
            <p className="mt-2 text-xs text-violet-200/80">{categoryLabel}</p>
          </Link>
          <button
            type="button"
            aria-pressed={liked}
            aria-label={liked ? labels.liked : labels.likeArtwork}
            onClick={() => setLiked(true)}
            className="grid h-8 min-w-8 place-items-center text-xs text-stone-400 transition hover:text-violet-300"
          >
            {liked ? (
              <FontAwesomeIcon icon={faHeart} className="h-4 w-4 text-red-500" aria-hidden="true" />
            ) : (
              labels.like
            )}
          </button>
        </div>
      </div>
    </BorderGlow>
  );
}
