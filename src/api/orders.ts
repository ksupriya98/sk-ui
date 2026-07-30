import { apiPost } from "./client";
import type { OrderPayload, OrderResponse } from "../types/catalog";

/**
 * Orders service — mock today, HTTP tomorrow.
 * Set VITE_USE_MOCK=false when the backend order API is ready.
 */
const USE_MOCK =
  (import.meta.env.VITE_USE_MOCK as string | undefined) !== "false";

let mockOrderSeq = 1000;

function delay(ms = 400): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function placeOrder(
  payload: OrderPayload,
): Promise<OrderResponse> {
  if (USE_MOCK) {
    await delay();
    mockOrderSeq += 1;
    return { id: mockOrderSeq };
  }
  return apiPost<OrderResponse>("/orders", payload);
}
