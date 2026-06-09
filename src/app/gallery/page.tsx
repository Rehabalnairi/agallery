import GalleryBrowser from "@/components/gallery/GalleryBrowser";
import { getArtworks } from "@/lib/getArtworks";

export default function GalleryPage() {
  const artworks = getArtworks();

  return (
    <section className="px-4 py-5">
      <div className="gallery-panel mx-auto max-w-7xl rounded-2xl p-7 sm:p-10">
        <div className="mb-8">
          <p className="mb-8 text-xs text-stone-500">Home &gt; Gallery</p>
          <div>
            <h1 className="serif-title text-5xl text-stone-50">Gallery</h1>
            <div className="mt-4 h-px w-28 bg-gradient-to-r from-violet-500 to-transparent" />
          </div>
        </div>
        <GalleryBrowser artworks={artworks} />
      </div>
    </section>
  );
}
