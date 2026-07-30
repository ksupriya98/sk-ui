export type CategorySlug = "fruits" | "vegetables" | "flowers" | "crops";

export interface Fertilizer {
  id: string;
  name: string;
  purpose: string;
  npk?: string;
  application: string;
  timing: string;
  image: string;
}

export interface CatalogItem {
  id: string;
  slug: string;
  name: string;
  category: CategorySlug;
  description: string;
  image: string;
  growingSeason: string;
  soilPreference: string;
  fertilizerIds: string[];
}

export interface Category {
  id: CategorySlug;
  title: string;
  description: string;
  image: string;
  itemCount: number;
}
