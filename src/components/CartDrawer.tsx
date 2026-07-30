import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./CartDrawer.css";

function formatInr(amount: number) {
  return `₹${amount.toFixed(0)}`;
}

export default function CartDrawer() {
  const { items, isOpen, closeCart, increment, decrement, remove, subtotal } =
    useCart();
  const navigate = useNavigate();

  const go = (path: string) => {
    closeCart();
    navigate(path);
  };

  return (
    <>
      <div
        className={`drawer-overlay ${isOpen ? "is-open" : ""}`}
        onClick={closeCart}
        aria-hidden={!isOpen}
      />
      <aside
        className={`drawer ${isOpen ? "is-open" : ""}`}
        aria-hidden={!isOpen}
        aria-label="Shopping cart"
      >
        <div className="drawer__head">
          <h3>Your Cart</h3>
          <button
            className="drawer__close"
            onClick={closeCart}
            aria-label="Close cart"
            type="button"
          >
            ✕
          </button>
        </div>

        {items.length === 0 ? (
          <div className="drawer__empty">
            <span className="drawer__empty-icon" aria-hidden="true">
              🛒
            </span>
            <p>Your cart is empty</p>
            <button
              className="btn btn-primary"
              onClick={() => go("/")}
              type="button"
            >
              Browse fertilizers
            </button>
          </div>
        ) : (
          <>
            <div className="drawer__items">
              {items.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item__info">
                    <h4>{item.name}</h4>
                    <span className="cart-item__price">
                      {formatInr(item.price)}
                      <small> / {item.unit}</small>
                    </span>
                    <div className="qty">
                      <button
                        type="button"
                        onClick={() => decrement(item.id)}
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span>{item.qty}</span>
                      <button
                        type="button"
                        onClick={() => increment(item.id)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="cart-item__remove"
                    onClick={() => remove(item.id)}
                    aria-label={`Remove ${item.name}`}
                    type="button"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            <div className="drawer__foot">
              <div className="drawer__subtotal">
                <span>Sub Total</span>
                <strong>{formatInr(subtotal)}</strong>
              </div>
              <button
                className="btn btn-primary drawer__checkout"
                onClick={() => go("/checkout")}
                type="button"
              >
                Place Order
              </button>
              <button
                className="btn btn-outline drawer__continue"
                onClick={() => go("/cart")}
                type="button"
              >
                View Cart
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
