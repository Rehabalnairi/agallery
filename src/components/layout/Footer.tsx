import Image from "next/image";

type FooterProps = {
  labels: {
    brand: string;
    tagline: string;
  };
};

export default function Footer({ labels }: FooterProps) {
  return (
    <footer className="px-4 pb-5 text-stone-100 sm:px-0 sm:pb-6">
      <div className="gallery-panel flex w-full flex-col items-center gap-3 rounded-2xl px-5 py-6 text-center text-sm sm:flex-row sm:justify-between sm:px-6 sm:py-7 sm:text-start">
        <div className="flex shrink-0 items-center gap-3">
          <Image
            src="/images/brand/artgallery-logo.png"
            alt={labels.brand}
            width={56}
            height={56}
            className="h-12 w-12 object-contain sm:h-14 sm:w-14"
          />
          <span className="sr-only">{labels.brand}</span>
        </div>
        <p className="max-w-xs leading-6 text-stone-400 sm:max-w-full sm:text-end">{labels.tagline}</p>
      </div>
    </footer>
  );
}
