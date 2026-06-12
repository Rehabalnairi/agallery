import { notFound } from "next/navigation";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { getDirection, isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    lang: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);

  return (
    <div lang={lang} dir={getDirection(lang)} className="flex min-h-screen flex-col">
      <Navbar locale={lang} labels={dictionary.nav} />
      <main className="flex-1">{children}</main>
      <Footer labels={dictionary.footer} />
    </div>
  );
}
