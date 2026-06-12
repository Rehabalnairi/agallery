"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getOppositeLocale, type Locale } from "@/i18n/config";

type LocaleSwitcherProps = {
  locale: Locale;
  label: string;
};

export default function LocaleSwitcher({ locale, label }: LocaleSwitcherProps) {
  const pathname = usePathname();
  const nextLocale = getOppositeLocale(locale);
  const nextPathname = pathname.replace(`/${locale}`, `/${nextLocale}`);

  return (
    <Link
      href={nextPathname}
      aria-label={`Switch language to ${label}`}
      className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-stone-200 transition hover:border-violet-300/60 hover:text-white"
    >
      {label}
    </Link>
  );
}
