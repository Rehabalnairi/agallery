import Image from "next/image";

type FooterProps = {
  labels: {
    brand: string;
    tagline: string;
  };
};

export default function Footer({ labels }: FooterProps) {
  return (
    <footer className="pb-6 text-stone-100">
      <div className="gallery-panel flex w-full flex-col gap-3 rounded-2xl px-6 py-7 text-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/images/brand/artgallery-logo.png"
            alt={labels.brand}
            width={56}
            height={56}
            className="h-14 w-14 object-contain"
          />
          <span className="sr-only">{labels.brand}</span>
        </div>
        <p className="text-stone-400">{labels.tagline}</p>
      </div>
    </footer>
  );
}
