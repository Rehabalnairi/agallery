export const locales = ["en", "ar"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getDirection(locale: Locale) {
  return locale === "ar" ? "rtl" : "ltr";
}

export function getOppositeLocale(locale: Locale) {
  return locale === "ar" ? "en" : "ar";
}
