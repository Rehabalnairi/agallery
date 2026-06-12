import Link from "next/link";
import Image from "next/image";
import LocaleSwitcher from "@/components/layout/LocaleSwitcher";
import type { Locale } from "@/i18n/config";

type NavbarProps = {
  locale: Locale;
  labels: {
    brand: string;
    gallery: string;
    switchLanguage: string;
  };
};

export default function Navbar({ locale, labels }: NavbarProps) {
  const navItems = [
    { href: `/${locale}/gallery`, label: labels.gallery },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111018]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
        <Link href={`/${locale}`} className="flex items-center gap-3 text-lg font-semibold tracking-wide text-stone-50">
          <Image
            src="/images/brand/artgallery-logo.png"
            alt={labels.brand}
            width={64}
            height={64}
            priority
            className="h-16 w-16 object-contain"
          />
          <span className="sr-only">{labels.brand}</span>
        </Link>
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-8 text-sm font-medium text-stone-300 md:flex">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
          <LocaleSwitcher locale={locale} label={labels.switchLanguage} />
        </div>
      </nav>
    </header>
  );
}
