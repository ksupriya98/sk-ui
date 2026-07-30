import {
  createContext,
  useContext,
  useMemo,
  useReducer,
  useState,
  type ReactNode,
} from "react";
import type { CartItem, Fertilizer } from "../types/catalog";

type CartAction =
  | { type: "add"; product: Fertilizer; qty: number }
  | { type: "increment"; id: string }
  | { type: "decrement"; id: string }
  | { type: "setQty"; id: string; qty: number }
  | { type: "remove"; id: string }
  | { type: "clear" };

interface CartContextValue {
  items: CartItem[];
  count: number;
  subtotal: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (product: Fertilizer, qty?: number, openDrawer?: boolean) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

function reducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case "add": {
      const existing = state.find((item) => item.id === action.product.id);
      if (existing) {
        return state.map((item) =>
          item.id === action.product.id
            ? { ...item, qty: item.qty + action.qty }
            : item,
        );
      }
      return [
        ...state,
        {
          id: action.product.id,
          name: action.product.name,
          image: action.product.image,
          price: action.product.price,
          unit: action.product.unit,
          qty: action.qty,
        },
      ];
    }
    case "setQty":
      return state.map((item) =>
        item.id === action.id
          ? { ...item, qty: Math.max(1, action.qty) }
          : item,
      );
    case "increment":
      return state.map((item) =>
        item.id === action.id ? { ...item, qty: item.qty + 1 } : item,
      );
    case "decrement":
      return state
        .map((item) =>
          item.id === action.id ? { ...item, qty: item.qty - 1 } : item,
        )
        .filter((item) => item.qty > 0);
    case "remove":
      return state.filter((item) => item.id !== action.id);
    case "clear":
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, dispatch] = useReducer(reducer, []);
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = (
    product: Fertilizer,
    qty = 1,
    openDrawer = true,
  ) => {
    dispatch({ type: "add", product, qty });
    if (openDrawer) setIsOpen(true);
  };

  const value = useMemo<CartContextValue>(() => {
    const count = items.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.qty,
      0,
    );
    return {
      items,
      count,
      subtotal,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      addToCart,
      increment: (id) => dispatch({ type: "increment", id }),
      decrement: (id) => dispatch({ type: "decrement", id }),
      setQty: (id, qty) => dispatch({ type: "setQty", id, qty }),
      remove: (id) => dispatch({ type: "remove", id }),
      clear: () => dispatch({ type: "clear" }),
    };
  }, [items, isOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
