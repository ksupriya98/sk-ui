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
    price: 349,
    unit: "1 kg",
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
    price: 299,
    unit: "5 kg",
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
    price: 429,
    unit: "5 kg",
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
    price: 389,
    unit: "5 kg",
  },
  {
    id: "compost",
    name: "Vermicompost",
    purpose: "Builds organic matter and microbial life in soil",
    application: "Mix 2–5 kg per plant pit or 2–3 t/acre",
    timing: "Before planting and as annual top-dress",
    image:
      "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=600&q=80",
    price: 249,
    unit: "5 kg",
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
    price: 279,
    unit: "1 kg",
  },
  {
    id: "neem-cake",
    name: "Neem Cake",
    purpose: "Organic nitrogen with mild pest-suppressing effect",
    application: "1–2 kg per tree or 200–400 kg/acre",
    timing: "Basal and mid-season",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80",
    price: 199,
    unit: "2 kg",
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
    price: 319,
    unit: "1 kg",
  },
  {
    id: "micronutrient-mix",
    name: "Micronutrient Mix (Zn, B, Fe, Mn)",
    purpose: "Corrects hidden hunger and improves flowering",
    application: "Foliar spray as per label every 20–25 days",
    timing: "Pre-flowering to fruit set",
    image:
      "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=600&q=80",
    price: 359,
    unit: "500 g",
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
    price: 269,
    unit: "5 kg",
  },
  {
    id: "fym",
    name: "Farm Yard Manure (FYM)",
    purpose: "Improves soil structure and moisture retention",
    application: "8–12 t/acre well-rotted manure",
    timing: "3–4 weeks before planting",
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=600&q=80",
    price: 179,
    unit: "10 kg",
  },
  {
    id: "seaweed",
    name: "Seaweed Extract",
    purpose: "Natural biostimulant for stress tolerance and flowering",
    application: "Foliar spray 2–3 ml/L every 15 days",
    timing: "Stress periods and flowering",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=600&q=80",
    price: 299,
    unit: "500 ml",
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
      "https://images.unsplash.com/photo-1575398640594-f23d65cd1150?auto=format&fit=crop&w=800&q=80",
    growingSeason: "Autumn–winter",
    soilPreference: "Deep loam to sandy loam",
    fertilizerIds: ["fym", "neem-cake", "npk-19-19-19", "mop", "bone-meal"],
  },

  // Vegetables
  {
    id: "tomato",
    slug: "tomato",
    name: "Tomato",
    category: "vegetables",
    description:
      "Garden staple prone to blossom-end rot without adequate calcium.",
    image:
      "https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=800&q=80",
    growingSeason: "Warm season",
    soilPreference: "Rich, well-drained loam",
    fertilizerIds: ["compost", "dap", "calcium-nitrate", "mop", "seaweed"],
  },
  {
    id: "chili",
    slug: "chili",
    name: "Chili",
    category: "vegetables",
    description:
      "Spice crop needing steady nitrogen early and potash for pungent pods.",
    image:
      "https://images.unsplash.com/photo-1615375558203-d85d29ccf429?auto=format&fit=crop&w=800&q=80",
    growingSeason: "Warm season",
    soilPreference: "Sandy loam with good drainage",
    fertilizerIds: ["fym", "urea", "mop", "npk-19-19-19", "micronutrient-mix"],
  },
  {
    id: "spinach",
    slug: "spinach",
    name: "Spinach",
    category: "vegetables",
    description:
      "Leafy green that thrives on nitrogen-rich organic amendments.",
    image:
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=800&q=80",
    growingSeason: "Cool season",
    soilPreference: "Moist, fertile soil rich in organic matter",
    fertilizerIds: ["compost", "urea", "neem-cake", "micronutrient-mix"],
  },
  {
    id: "basil",
    slug: "basil",
    name: "Basil",
    category: "vegetables",
    description:
      "Aromatic herb that prefers light, frequent feeding without excess nitrogen.",
    image:
      "https://images.unsplash.com/photo-1572978577745-245cde7e1da3?auto=format&fit=crop&w=800&q=80",
    growingSeason: "Warm season",
    soilPreference: "Light, well-drained soil",
    fertilizerIds: ["compost", "seaweed", "npk-19-19-19", "neem-cake"],
  },
  {
    id: "carrot",
    slug: "carrot",
    name: "Carrot",
    category: "vegetables",
    description:
      "Root vegetable that needs loose soil and steady phosphorus for sweet roots.",
    image:
      "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=800&q=80",
    growingSeason: "Cool season",
    soilPreference: "Deep, sandy loam free of stones",
    fertilizerIds: ["compost", "ssp", "mop", "neem-cake"],
  },
  {
    id: "onion",
    slug: "onion",
    name: "Onion",
    category: "vegetables",
    description:
      "Bulb crop that responds to balanced NPK with higher potash near bulbing.",
    image:
      "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=800&q=80",
    growingSeason: "Cool to mild season",
    soilPreference: "Fertile, well-drained loam",
    fertilizerIds: ["fym", "urea", "ssp", "mop", "micronutrient-mix"],
  },

  // Flowers
  {
    id: "rose",
    slug: "rose",
    name: "Rose",
    category: "flowers",
    description:
      "Flowering shrub that rewards regular organic feeding and micronutrients.",
    image:
      "https://images.unsplash.com/photo-1494972308805-463bc619d34e?auto=format&fit=crop&w=800&q=80",
    growingSeason: "Spring–autumn blooms",
    soilPreference: "Fertile, slightly acidic loam",
    fertilizerIds: ["compost", "bone-meal", "npk-19-19-19", "seaweed", "neem-cake"],
  },
  {
    id: "marigold",
    slug: "marigold",
    name: "Marigold",
    category: "flowers",
    description:
      "Hardy ornamental that benefits from balanced NPK and compost.",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=80",
    growingSeason: "Year-round in mild climates",
    soilPreference: "Well-drained garden soil",
    fertilizerIds: ["compost", "npk-19-19-19", "bone-meal", "seaweed"],
  },
  {
    id: "sunflower",
    slug: "sunflower",
    name: "Sunflower",
    category: "flowers",
    description:
      "Tall annual that needs nitrogen early and potash as heads fill.",
    image:
      "https://images.unsplash.com/photo-1595306882393-251d8e085b3d?auto=format&fit=crop&w=800&q=80",
    growingSeason: "Warm season",
    soilPreference: "Deep, well-drained fertile soil",
    fertilizerIds: ["compost", "urea", "mop", "npk-19-19-19"],
  },
  {
    id: "hibiscus",
    slug: "hibiscus",
    name: "Hibiscus",
    category: "flowers",
    description:
      "Tropical bloomer that thrives on organic matter and regular micronutrients.",
    image:
      "https://images.unsplash.com/photo-1610670885249-d1597521dfea?auto=format&fit=crop&w=800&q=80",
    growingSeason: "Warm season blooms",
    soilPreference: "Moist, fertile, well-drained soil",
    fertilizerIds: ["compost", "neem-cake", "npk-19-19-19", "seaweed", "micronutrient-mix"],
  },
  {
    id: "jasmine",
    slug: "jasmine",
    name: "Jasmine",
    category: "flowers",
    description:
      "Fragrant climber that prefers light feeding and phosphorus before bloom.",
    image:
      "https://images.unsplash.com/photo-1768113802480-d98319a295d0?auto=format&fit=crop&w=800&q=80",
    growingSeason: "Spring–summer blooms",
    soilPreference: "Well-drained loam with organic matter",
    fertilizerIds: ["compost", "bone-meal", "npk-19-19-19", "seaweed"],
  },
  {
    id: "lavender",
    slug: "lavender",
    name: "Lavender",
    category: "flowers",
    description:
      "Aromatic perennial that prefers lean soil and light, infrequent feeding.",
    image:
      "https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=800&q=80",
    growingSeason: "Summer blooms",
    soilPreference: "Well-drained, slightly alkaline soil",
    fertilizerIds: ["compost", "bone-meal", "seaweed"],
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
      "https://images.unsplash.com/photo-1656530943970-a9b898f40edb?auto=format&fit=crop&w=800&q=80",
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
      "https://images.unsplash.com/photo-1630095829721-5179c495f1cf?auto=format&fit=crop&w=800&q=80",
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
    id: "vegetables",
    title: "Vegetables",
    description: "Kitchen-garden veggies with practical nutrient plans.",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "flowers",
    title: "Flowers",
    description: "Ornamentals and bloomers with feeding schedules for color.",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80",
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
