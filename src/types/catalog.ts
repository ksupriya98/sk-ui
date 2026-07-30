export type CategorySlug = "fruits" | "vegetables" | "flowers" | "crops";

export interface Fertilizer {
  id: string;
  name: string;
  purpose: string;
  npk?: string;
  application: string;
  timing: string;
  image: string;
  /** Unit price in INR */
  price: number;
  unit: string;
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

export interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  unit: string;
  qty: number;
}

export interface OrderPayload {
  customerName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  notes: string;
  subtotal: number;
  shipping: number;
  totalAmount: number;
  paymentMethod: "Pay on Delivery";
  items: Array<{
    productId: string;
    name: string;
    price: number;
    quantity: number;
  }>;
}

export interface OrderResponse {
  id: number;
}
