"use client";

import Link from "next/link";
import Image from "next/image";
import { type MouseEvent, useRef } from "react";
import type { Locale } from "@/i18n/config";

const tiles = [
  {
    image: "/images/artworks/art1.jpg",
    className: "left-[5%] top-[5%] h-[14%] w-[20%] bg-violet-500",
  },
  {
    image: "/images/artworks/art3.jpg",
    className: "left-[42%] top-[12%] h-[24%] w-[14%] bg-cyan-400",
  },
  {
    image: "/images/artworks/art4.JPG",
    className: "left-[12%] top-[34%] h-[18%] w-[16%] bg-fuchsia-500",
  },
  {
    image: "/images/artworks/art3.jpg",
    className: "left-[45%] top-[48%] h-[14%] w-[12%] bg-sky-400",
  },
  {
    image: "/images/artworks/artwork-5.jpg",
    className: "left-[8%] top-[70%] h-[16%] w-[32%] bg-purple-500",
  },
  {
    image: "/images/artworks/art1.jpg",
    className: "left-[68%] top-[8%] h-[24%] w-[24%] bg-cyan-300",
  },
  {
    image: "/images/artworks/artwork-1.jpg",
    className: "left-[50%] top-[74%] h-[16%] w-[20%] bg-indigo-500",
  },
  {
    image: "/images/artworks/art3.jpg",
    className: "left-[72%] top-[42%] h-[24%] w-[18%] bg-violet-300",
  },
  {
    image: "/images/artworks/art2.jpg",
    className: "left-[84%] top-[84%] h-[10%] w-[8%] bg-stone-100",
  },
];

type HeroProps = {
  locale: Locale;
  labels: {
    line1: string;
    line2: string;
    line3: string;
    description: string;
    action: string;
  };
};

export default function Hero({ locale, labels }: HeroProps) {
  const galleryRef = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: MouseEvent<HTMLElement>) {
    const gallery = galleryRef.current;

    if (!gallery) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const xDecimal = (event.clientX - bounds.left) / bounds.width;
    const yDecimal = (event.clientY - bounds.top) / bounds.height;
    const maxX = gallery.offsetWidth - bounds.width;
    const maxY = gallery.offsetHeight - bounds.height;
    const panX = maxX * xDecimal * -1;
    const panY = maxY * yDecimal * -1;

    gallery.animate(
      {
        transform: `translate(${panX}px, ${panY}px)`,
      },
      {
        duration: 4000,
        fill: "forwards",
        easing: "ease",
      },
    );
  }

  return (
    <section className="art-font text-stone-50">
      <div
        onMouseMove={handlePointerMove}
        className="relative min-h-[560px] w-full overflow-hidden sm:min-h-[650px]"
      >
        <div
          ref={galleryRef}
          className="absolute left-0 top-0 h-[140vmax] w-[140vmax] opacity-95"
        >
          {tiles.map((tile, index) => (
            <div
              key={`${tile.image}-${index}`}
              className={`group absolute overflow-hidden rounded-[1.2vmax] shadow-[0_24px_80px_rgba(0,0,0,0.45)] transition-transform duration-700 ease-out hover:scale-110 ${tile.className}`}
            >
              <Image
                src={tile.image}
                alt=""
                fill
                sizes="(min-width: 768px) 30vw, 60vw"
                className="object-cover opacity-80 transition duration-700 ease-out group-hover:scale-[1.04] group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-transparent to-cyan-300/20 opacity-70 transition group-hover:opacity-20" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(34,211,238,0.18),transparent_19rem),linear-gradient(90deg,rgba(8,7,12,0.98)_0%,rgba(8,7,12,0.82)_45%,rgba(8,7,12,0.34)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(8,7,12,0.18)_55%,rgba(8,7,12,0.88)_100%)]" />
        <div className="relative flex min-h-[560px] flex-col justify-between p-5 sm:min-h-[650px] sm:p-12 lg:p-16">
          <div className="max-w-xl pt-10 sm:pt-14">
            <div className="mb-8 h-20 w-px bg-white/15 sm:h-28" />
            <h1 className="serif-title text-5xl leading-[1.02] text-stone-100 sm:text-7xl sm:leading-[0.95]">
              {labels.line1}
              <br />
              {labels.line2}
              {" "}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
                {labels.line3}
              </span>
            </h1>
            <p className="mt-8 max-w-sm text-lg leading-8 text-stone-300">
              {labels.description}
            </p>
            <Link
              href={`/${locale}/gallery`}
              className="pointer-events-auto mt-9 inline-flex min-w-40 items-center justify-center rounded-full border border-violet-400/70 bg-white/5 px-5 py-3 text-xs font-semibold text-white shadow-[0_0_35px_rgba(111,76,255,0.22)] transition hover:border-cyan-300 hover:bg-white/10"
            >
              {labels.action}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
