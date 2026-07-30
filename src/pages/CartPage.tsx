import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./pages.css";

function formatInr(amount: number) {
  return `₹${amount.toFixed(0)}`;
}

export default function CartPage() {
  const { items, subtotal, increment, decrement, remove, openCart } = useCart();

  if (items.length === 0) {
    return (
      <section className="page">
        <div className="container">
          <div className="empty-state">
            <span className="icon" aria-hidden="true">
              🛒
            </span>
            <h2>Your cart is empty</h2>
            <p>Add fertilizers from any crop page to get started.</p>
            <Link to="/" className="btn btn-primary">
              Browse categories
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <div className="page-banner">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Cart</span>
          </nav>
          <h1>Your Cart</h1>
          <p>Review items, then place your order with pay on delivery.</p>
        </div>
      </div>

      <section className="page">
        <div className="container cart-grid">
          <div className="cart-table">
            {items.map((item) => (
              <div className="cart-row" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-row__name">
                  <h4>{item.name}</h4>
                  <span>{item.unit}</span>
                </div>
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
                <div className="cart-row__price">{formatInr(item.price)}</div>
                <div className="cart-row__subtotal">
                  {formatInr(item.price * item.qty)}
                </div>
                <button
                  className="cart-row__remove"
                  type="button"
                  onClick={() => remove(item.id)}
                  aria-label={`Remove ${item.name}`}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <aside className="summary">
            <h3>Order Summary</h3>
            <div className="summary-line">
              <span>Subtotal</span>
              <span>{formatInr(subtotal)}</span>
            </div>
            <div className="summary-line">
              <span>Payment</span>
              <span>Pay on Delivery</span>
            </div>
            <div className="summary-line summary-line--total">
              <span>Total</span>
              <strong>{formatInr(subtotal)}</strong>
            </div>
            <Link to="/checkout" className="btn btn-primary">
              Place Order
            </Link>
            <button
              type="button"
              className="btn btn-outline"
              onClick={openCart}
              style={{ width: "100%", justifyContent: "center", marginTop: 10 }}
            >
              Quick cart
            </button>
          </aside>
        </div>
      </section>
    </>
  );
}
