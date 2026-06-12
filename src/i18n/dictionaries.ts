import type { Artwork } from "@/types/artwork";
import type { Locale } from "@/i18n/config";

export const dictionaries = {
  en: {
    metadata: {
      title: "Art Gallery",
      description: "A curated digital gallery of modern artworks.",
      notFound: "Artwork Not Found",
    },
    nav: {
      brand: "ArtGallery",
      gallery: "Gallery",
      switchLanguage: "العربية",
    },
    footer: {
      brand: "Art Gallery",
      tagline: "Curated digital exhibitions for modern collectors.",
    },
    hero: {
      line1: "Discover.",
      line2: "Inspire.",
      line3: "Feel Art.",
      description: "A digital gallery that brings creativity and inspiration to life.",
      action: "Explore Gallery",
    },
    collections: {
      title: "Curated Collections",
      viewAll: "View all",
      artworks: "Artworks",
      items: [
        "Abstract Expressions",
        "Nature's Beauty",
        "Portrait Stories",
        "Modern Visions",
      ],
      newsletterTitle: "Stay inspired with ArtVista",
      newsletterDescription: "Subscribe to get updates on new artworks and exhibitions.",
      emailLabel: "Email address",
      emailPlaceholder: "Enter your email",
      subscribe: "Subscribe",
    },
    gallery: {
      breadcrumbHome: "Home",
      breadcrumbGallery: "Gallery",
      title: "Gallery",
      all: "All",
      artworkSingular: "artwork",
      artworkPlural: "artworks",
      categories: {
        Abstract: "Abstract",
        Portrait: "Portrait",
        Landscape: "Landscape",
        Nature: "Nature",
        Minimal: "Minimal",
        Surreal: "Surreal",
      },
    },
    artwork: {
      like: "Like",
      liked: "Liked",
      likeArtwork: "Like artwork",
      medium: "Medium",
      dimensions: "Dimensions",
      category: "Category",
      year: "Year",
      details: {} as Record<string, Partial<Pick<Artwork, "title" | "artist" | "description" | "medium" | "dimensions">>>,
    },
  },
  ar: {
    metadata: {
      title: "معرض الفن",
      description: "معرض رقمي منتقى للأعمال الفنية الحديثة.",
      notFound: "العمل الفني غير موجود",
    },
    nav: {
      brand: "معرض الفن",
      gallery: "المعرض",
      switchLanguage: "English",
    },
    footer: {
      brand: "معرض الفن",
      tagline: "معارض رقمية منتقاة لهواة اقتناء الفن الحديث.",
    },
    hero: {
      line1: "حيث يلتقي",
      line2: "الفن",
      line3: "بالإلهام",
      description: "رحلة رقمية تجمع بين الجمال، الإبداع، والإلهام",
      action: "استكشف المعرض",
    },
    collections: {
      title: "مجموعات منتقاة",
      viewAll: "عرض الكل",
      artworks: "أعمال فنية",
      items: [
        "تعبيرات تجريدية",
        "جمال الطبيعة",
        "حكايات البورتريه",
        "رؤى حديثة",
      ],
      newsletterTitle: "ابق ملهمًا معنا  ",
      newsletterDescription: "اشترك لتصلك تحديثات الأعمال الفنية والمعارض الجديدة.",
      emailLabel: "البريد الإلكتروني",
      emailPlaceholder: "أدخل بريدك الإلكتروني",
      subscribe: "اشتراك",
    },
    gallery: {
      breadcrumbHome: "الرئيسية",
      breadcrumbGallery: "المعرض",
      title: "المعرض",
      all: "الكل",
      artworkSingular: "عمل فني",
      artworkPlural: "أعمال فنية",
      categories: {
        Abstract: "تجريدي",
        Portrait: "بورتريه",
        Landscape: "مناظر طبيعية",
        Nature: "طبيعة",
        Minimal: "تبسيطي",
        Surreal: "سريالي",
      },
    },
    artwork: {
      like: "إعجاب",
      liked: "تم الإعجاب",
      likeArtwork: "إعجاب بالعمل الفني",
      medium: "الخامة",
      dimensions: "الأبعاد",
      category: "الفئة",
      year: "السنة",
      details: {
        "silent-horizon": {
          title: "أفق صامت",
          artist: "مايا إليان",
          description: "دراسة هادئة للضوء وهو يعبر شاطئًا بعيدًا، بين أجواء ناعمة وشرائط هندسية واضحة.",
          medium: "أكريليك على قماش",
        },
        "blue-figure": {
          title: "الشخصية الزرقاء",
          artist: "نور حداد",
          description: "بورتريه هادئ تشكله طبقات زرقاء ولمسات دافئة ونظرة مباشرة تملأ المكان.",
          medium: "زيت وفحم",
        },
        "inner-architecture": {
          title: "عمارة داخلية",
          artist: "سمير قطان",
          description: "أشكال متداخلة وحقول لونية مشبعة تمنح إحساسًا بمدينة تستعاد عبر الحركة.",
          medium: "وسائط متعددة",
        },
        "echoes-of-time": {
          title: "أصداء الزمن",
          artist: "عمر البلوشي",
          description: "علامات متراكبة وتباين دخاني يصنعان تأملًا بصريًا في الذاكرة والحركة.",
          medium: "حبر وأكريليك",
        },
        fragments: {
          title: "شظايا",
          artist: "مها الهنائي",
          description: "كتل معمارية ناعمة تنساب داخل مساحة هادئة من اللون والظل.",
          medium: "وسائط متعددة",
        },
        "mountain-light": {
          title: "ضوء الجبل",
          artist: "يارا اللواتية",
          description: "مشهد واد مضيء مبني بضربات فرشاة ناعمة وضباب بارد وعمق هادئ.",
          medium: "زيت على قماش",
        },
        "garden-current": {
          title: "تيار الحديقة",
          artist: "لينا الريامية",
          description: "دراسة طبيعية نابضة بطبقات لونية وإيقاع عضوي وإحساس منعش بالحركة.",
          medium: "أكريليك وباستيل",
        },
        "quiet-shape": {
          title: "شكل هادئ",
          artist: "نبيل درويش",
          description: "تكوين متزن يركز على التوازن والمساحات السلبية والتحولات اللونية الرقيقة.",
          medium: "غواش على ورق",
        },
        "desert-echo": {
          title: "صدى الصحراء",
          artist: "رانيا الفارسية",
          description: "تكوين حيوي من طبقات الملمس والدرجات الترابية يستحضر اتساع الصحراء.",
          medium: "وسائط متعددة على قماش",
        },
      } as Record<string, Partial<Pick<Artwork, "title" | "artist" | "description" | "medium" | "dimensions">>>,
    },
  },
};

export type Dictionary = (typeof dictionaries)[Locale];

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

export function localizeArtwork(artwork: Artwork, dictionary: Dictionary): Artwork {
  return {
    ...artwork,
    ...dictionary.artwork.details[artwork.slug],
  };
}

export function localizeArtworks(artworks: Artwork[], dictionary: Dictionary) {
  return artworks.map((artwork) => localizeArtwork(artwork, dictionary));
}
