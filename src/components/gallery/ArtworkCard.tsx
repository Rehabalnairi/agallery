import Image from "next/image";
import Link from "next/link";
import BorderGlow from "@/components/gallery/BorderGlow";
import type { Artwork } from "@/types/artwork";

type ArtworkCardProps = {
  artwork: Artwork;
};

export default function ArtworkCard({ artwork }: ArtworkCardProps) {
  return (
    <BorderGlow className="overflow-hidden rounded-xl transition duration-300 hover:-translate-y-1">
      <Link href={`/artwork/${artwork.slug}`} className="group block bg-white/[0.04]">
        <div className="relative aspect-[4/4.1] overflow-hidden bg-zinc-900">
          <Image
            src={artwork.image}
            alt={artwork.title}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex items-end justify-between gap-4 p-4">
          <div>
            <h3 className="text-sm font-semibold text-stone-50">{artwork.title}</h3>
            <p className="mt-1 text-xs text-stone-400">{artwork.artist}</p>
          </div>
          <span className="text-xs text-stone-400 transition group-hover:text-violet-300">
            Like
          </span>
        </div>
      </Link>
    </BorderGlow>
  );
}
