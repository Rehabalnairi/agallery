export type Artwork = {
  id: number;
  slug: string;
  title: string;
  artist: string;
  year: number;
  category: "Abstract" | "Portrait" | "Landscape" | "Nature" | "Minimal" | "Surreal";
  image: string;
  description: string;
  dimensions: string;
  medium: string;
  featured: boolean;
};
