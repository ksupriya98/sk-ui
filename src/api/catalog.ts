import { apiGet } from "./client";
import {
  getMockCategories,
  getMockCategory,
  getMockFertilizersForItem,
  getMockItemBySlug,
  getMockItemsByCategory,
} from "../data/mockCatalog";
import type {
  CatalogItem,
  Category,
  CategorySlug,
  Fertilizer,
} from "../types/catalog";

/**
 * Catalog service — mock today, HTTP tomorrow.
 * Set VITE_USE_MOCK=false and VITE_API_BASE_URL when the backend is ready.
 */
const USE_MOCK =
  (import.meta.env.VITE_USE_MOCK as string | undefined) !== "false";

function delay(ms = 180): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchCategories(): Promise<Category[]> {
  if (USE_MOCK) {
    await delay();
    return getMockCategories();
  }
  return apiGet<Category[]>("/categories");
}

export async function fetchCategory(
  slug: CategorySlug,
): Promise<Category | undefined> {
  if (USE_MOCK) {
    await delay();
    return getMockCategory(slug);
  }
  return apiGet<Category>(`/categories/${slug}`);
}

export async function fetchItemsByCategory(
  slug: CategorySlug,
): Promise<CatalogItem[]> {
  if (USE_MOCK) {
    await delay();
    return getMockItemsByCategory(slug);
  }
  return apiGet<CatalogItem[]>(`/categories/${slug}/items`);
}

export async function fetchItemBySlug(
  slug: string,
): Promise<CatalogItem | undefined> {
  if (USE_MOCK) {
    await delay();
    return getMockItemBySlug(slug);
  }
  return apiGet<CatalogItem>(`/items/${slug}`);
}

export async function fetchFertilizersForItem(
  itemSlug: string,
): Promise<{ item: CatalogItem; fertilizers: Fertilizer[] } | undefined> {
  if (USE_MOCK) {
    await delay();
    const item = getMockItemBySlug(itemSlug);
    if (!item) return undefined;
    return { item, fertilizers: getMockFertilizersForItem(item) };
  }
  return apiGet<{ item: CatalogItem; fertilizers: Fertilizer[] }>(
    `/items/${itemSlug}/fertilizers`,
  );
}

export function isCategorySlug(value: string): value is CategorySlug {
  return (
    value === "fruits" ||
    value === "vegetables" ||
    value === "flowers" ||
    value === "crops"
  );
}
