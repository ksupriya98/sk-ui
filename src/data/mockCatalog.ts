import type { CatalogItem, Category, CategorySlug, Fertilizer } from "../types/catalog";

/**
 * Mock catalog data — swap the service layer in `src/api/catalog.ts`
 * to fetch from a backend without changing UI components.
 */

export const fertilizers: Fertilizer[] = [
  {
    id: "npk-19-19-19",
    name: "Balanced NPK 19-19-19",
    purpose: "All-round vegetative and fruiting support",
    npk: "19-19-19",
    application: "Dissolve 5 g per litre and drench root zone fortnightly",
    timing: "Throughout active growth",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "urea",
    name: "Urea (46-0-0)",
    purpose: "Quick nitrogen boost for leafy growth",
    npk: "46-0-0",
    application: "Broadcast 20–40 kg/acre or side-dress in bands",
    timing: "Early vegetative stage",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "dap",
    name: "DAP (18-46-0)",
    purpose: "Strong root establishment and early vigor",
    npk: "18-46-0",
    application: "Basal dose at planting, 40–60 kg/acre",
    timing: "At sowing / transplanting",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "mop",
    name: "MOP / Potash (0-0-60)",
    purpose: "Improves fruit quality, sugar content, and disease tolerance",
    npk: "0-0-60",
    application: "Split apply near flowering and fruit set",
    timing: "Flowering to fruit development",
    image:
      "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "compost",
    name: "Vermicompost",
    purpose: "Builds organic matter and microbial life in soil",
    application: "Mix 2–5 kg per plant pit or 2–3 t/acre",
    timing: "Before planting and as annual top-dress",
    image:
      "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "bone-meal",
    name: "Bone Meal",
    purpose: "Slow-release phosphorus for flowering and fruiting",
    npk: "~3-15-0",
    application: "Work into soil around drip line",
    timing: "Pre-bloom and fruit set",
    image:
      "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "neem-cake",
    name: "Neem Cake",
    purpose: "Organic nitrogen with mild pest-suppressing effect",
    application: "1–2 kg per tree or 200–400 kg/acre",
    timing: "Basal and mid-season",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "calcium-nitrate",
    name: "Calcium Nitrate",
    purpose: "Prevents blossom-end rot and strengthens cell walls",
    npk: "15.5-0-0 + Ca",
    application: "Foliar spray 5 g/L or fertigate weekly during fruiting",
    timing: "Fruit development",
    image:
      "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "micronutrient-mix",
    name: "Micronutrient Mix (Zn, B, Fe, Mn)",
    purpose: "Corrects hidden hunger and improves flowering",
    application: "Foliar spray as per label every 20–25 days",
    timing: "Pre-flowering to fruit set",
    image:
      "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "ssp",
    name: "Single Super Phosphate",
    purpose: "Phosphorus and sulphur for root and grain fill",
    npk: "16% P2O5",
    application: "Basal application at land preparation",
    timing: "At sowing",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "fym",
    name: "Farm Yard Manure (FYM)",
    purpose: "Improves soil structure and moisture retention",
    application: "8–12 t/acre well-rotted manure",
    timing: "3–4 weeks before planting",
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "seaweed",
    name: "Seaweed Extract",
    purpose: "Natural biostimulant for stress tolerance and flowering",
    application: "Foliar spray 2–3 ml/L every 15 days",
    timing: "Stress periods and flowering",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=600&q=80",
  },
];

export const catalogItems: CatalogItem[] = [
  // Fruits
  {
    id: "mango",
    slug: "mango",
    name: "Mango",
    category: "fruits",
    description:
      "Tropical orchard favorite needing balanced nutrition from flowering through harvest.",
    image:
      "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=80",
    growingSeason: "Summer harvest",
    soilPreference: "Well-drained loam, pH 5.5–7.5",
    fertilizerIds: ["compost", "neem-cake", "npk-19-19-19", "mop", "micronutrient-mix"],
  },
  {
    id: "banana",
    slug: "banana",
    name: "Banana",
    category: "fruits",
    description:
      "Heavy feeder that thrives on continuous nitrogen and potassium supply.",
    image:
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=800&q=80",
    growingSeason: "Year-round in warm climates",
    soilPreference: "Deep, fertile, moisture-retentive soil",
    fertilizerIds: ["fym", "urea", "mop", "npk-19-19-19", "micronutrient-mix"],
  },
  {
    id: "apple",
    slug: "apple",
    name: "Apple",
    category: "fruits",
    description:
      "Temperate fruit tree needing phosphorus at bloom and calcium for firm fruit.",
    image:
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=800&q=80",
    growingSeason: "Autumn harvest",
    soilPreference: "Well-drained loam, pH 6.0–7.0",
    fertilizerIds: ["compost", "bone-meal", "calcium-nitrate", "mop", "seaweed"],
  },
  {
    id: "orange",
    slug: "orange",
    name: "Orange",
    category: "fruits",
    description:
      "Citrus crop sensitive to micronutrient deficiencies, especially zinc and boron.",
    image:
      "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=800&q=80",
    growingSeason: "Winter–spring harvest",
    soilPreference: "Sandy loam with good drainage",
    fertilizerIds: ["neem-cake", "npk-19-19-19", "mop", "micronutrient-mix", "seaweed"],
  },
  {
    id: "grape",
    slug: "grape",
    name: "Grape",
    category: "fruits",
    description:
      "Vine crop that needs phosphorus at bud burst and potash for berry quality.",
    image:
      "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=800&q=80",
    growingSeason: "Late summer–autumn",
    soilPreference: "Well-drained, moderately fertile soil",
    fertilizerIds: ["dap", "mop", "calcium-nitrate", "micronutrient-mix", "compost"],
  },
  {
    id: "pomegranate",
    slug: "pomegranate",
    name: "Pomegranate",
    category: "fruits",
    description:
      "Drought-tolerant orchard crop that responds well to organic matter and potash.",
    image:
      "https://images.unsplash.com/photo-1596591868231-05e898775573?auto=format&fit=crop&w=800&q=80",
    growingSeason: "Autumn–winter",
    soilPreference: "Deep loam to sandy loam",
    fertilizerIds: ["fym", "neem-cake", "npk-19-19-19", "mop", "bone-meal"],
  },

  // Plants
  {
    id: "tomato",
    slug: "tomato",
    name: "Tomato",
    category: "plants",
    description:
      "Garden staple prone to blossom-end rot without adequate calcium.",
    image:
      "https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=800&q=80",
    growingSeason: "Warm season",
    soilPreference: "Rich, well-drained loam",
    fertilizerIds: ["compost", "dap", "calcium-nitrate", "mop", "seaweed"],
  },
  {
    id: "rose",
    slug: "rose",
    name: "Rose",
    category: "plants",
    description:
      "Flowering shrub that rewards regular organic feeding and micronutrients.",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    growingSeason: "Spring–autumn blooms",
    soilPreference: "Fertile, slightly acidic loam",
    fertilizerIds: ["compost", "bone-meal", "npk-19-19-19", "seaweed", "neem-cake"],
  },
  {
    id: "chili",
    slug: "chili",
    name: "Chili",
    category: "plants",
    description:
      "Spice crop needing steady nitrogen early and potash for pungent pods.",
    image:
      "https://images.unsplash.com/photo-1583119022894-919a68bba8ea?auto=format&fit=crop&w=800&q=80",
    growingSeason: "Warm season",
    soilPreference: "Sandy loam with good drainage",
    fertilizerIds: ["fym", "urea", "mop", "npk-19-19-19", "micronutrient-mix"],
  },
  {
    id: "spinach",
    slug: "spinach",
    name: "Spinach",
    category: "plants",
    description:
      "Leafy green that thrives on nitrogen-rich organic amendments.",
    image:
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=800&q=80",
    growingSeason: "Cool season",
    soilPreference: "Moist, fertile soil rich in organic matter",
    fertilizerIds: ["compost", "urea", "neem-cake", "micronutrient-mix"],
  },
  {
    id: "marigold",
    slug: "marigold",
    name: "Marigold",
    category: "plants",
    description:
      "Hardy ornamental that benefits from balanced NPK and compost.",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
    growingSeason: "Year-round in mild climates",
    soilPreference: "Well-drained garden soil",
    fertilizerIds: ["compost", "npk-19-19-19", "bone-meal", "seaweed"],
  },
  {
    id: "basil",
    slug: "basil",
    name: "Basil",
    category: "plants",
    description:
      "Aromatic herb that prefers light, frequent feeding without excess nitrogen.",
    image:
      "https://images.unsplash.com/photo-1618375569909-3cda11a5c0f0?auto=format&fit=crop&w=800&q=80",
    growingSeason: "Warm season",
    soilPreference: "Light, well-drained soil",
    fertilizerIds: ["compost", "seaweed", "npk-19-19-19", "neem-cake"],
  },

  // Crops
  {
    id: "wheat",
    slug: "wheat",
    name: "Wheat",
    category: "crops",
    description:
      "Staple cereal needing phosphorus at sowing and nitrogen at tillering.",
    image:
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80",
    growingSeason: "Rabi",
    soilPreference: "Loam to clay loam",
    fertilizerIds: ["dap", "urea", "mop", "ssp", "fym"],
  },
  {
    id: "rice",
    slug: "rice",
    name: "Rice",
    category: "crops",
    description:
      "Paddy crop with high nitrogen demand at tillering and panicle initiation.",
    image:
      "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=800&q=80",
    growingSeason: "Kharif / irrigated",
    soilPreference: "Clayey soils that hold standing water",
    fertilizerIds: ["fym", "urea", "dap", "mop", "micronutrient-mix"],
  },
  {
    id: "maize",
    slug: "maize",
    name: "Maize",
    category: "crops",
    description:
      "Heavy feeder cereal that responds strongly to balanced NPK and zinc.",
    image:
      "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80",
    growingSeason: "Kharif / summer",
    soilPreference: "Well-drained fertile loam",
    fertilizerIds: ["fym", "urea", "dap", "mop", "micronutrient-mix"],
  },
  {
    id: "cotton",
    slug: "cotton",
    name: "Cotton",
    category: "crops",
    description:
      "Fiber crop needing nitrogen for canopy and potash for boll quality.",
    image:
      "https://images.unsplash.com/photo-1605000797499-95a51c5269b3?auto=format&fit=crop&w=800&q=80",
    growingSeason: "Kharif",
    soilPreference: "Deep black or alluvial soils",
    fertilizerIds: ["neem-cake", "urea", "dap", "mop", "micronutrient-mix"],
  },
  {
    id: "sugarcane",
    slug: "sugarcane",
    name: "Sugarcane",
    category: "crops",
    description:
      "Long-duration crop requiring split nitrogen and ample organic matter.",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80",
    growingSeason: "Planted year-round by region",
    soilPreference: "Deep, fertile, well-drained soils",
    fertilizerIds: ["fym", "urea", "ssp", "mop", "neem-cake"],
  },
  {
    id: "soybean",
    slug: "soybean",
    name: "Soybean",
    category: "crops",
    description:
      "Oilseed legume that fixes nitrogen but still needs phosphorus and sulphur.",
    image:
      "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?auto=format&fit=crop&w=800&q=80",
    growingSeason: "Kharif",
    soilPreference: "Well-drained loam",
    fertilizerIds: ["ssp", "mop", "fym", "micronutrient-mix", "compost"],
  },
];

const categoryMeta: Omit<Category, "itemCount">[] = [
  {
    id: "fruits",
    title: "Fruits",
    description: "Orchard and garden fruits with tailored nutrient plans.",
    image:
      "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "plants",
    title: "Plants",
    description: "Vegetables, herbs, and ornamentals for home gardens.",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "crops",
    title: "Crops",
    description: "Field crops with recommended basal and top-dress schedules.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80",
  },
];

export function getMockCategories(): Category[] {
  return categoryMeta.map((cat) => ({
    ...cat,
    itemCount: catalogItems.filter((item) => item.category === cat.id).length,
  }));
}

export function getMockItemsByCategory(category: CategorySlug): CatalogItem[] {
  return catalogItems.filter((item) => item.category === category);
}

export function getMockItemBySlug(slug: string): CatalogItem | undefined {
  return catalogItems.find((item) => item.slug === slug);
}

export function getMockFertilizersForItem(item: CatalogItem): Fertilizer[] {
  return item.fertilizerIds
    .map((id) => fertilizers.find((f) => f.id === id))
    .filter((f): f is Fertilizer => Boolean(f));
}

export function getMockCategory(slug: CategorySlug): Category | undefined {
  return getMockCategories().find((c) => c.id === slug);
}
