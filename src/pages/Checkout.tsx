import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { placeOrder as submitOrder } from "../api/orders";
import "./pages.css";

const SHIPPING_THRESHOLD = 999;
const SHIPPING_FEE = 49;

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  notes: "",
};

function formatInr(amount: number) {
  return `₹${amount.toFixed(0)}`;
}

export default function Checkout() {
  const { items, subtotal, clear } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Record<string, string | undefined>>({});
  const [placing, setPlacing] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const shipping = subtotal >= SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <section className="page">
        <div className="container">
          <div className="empty-state">
            <span className="icon" aria-hidden="true">
              🛒
            </span>
            <h2>Your cart is empty</h2>
            <p>Add fertilizers before placing an order.</p>
            <Link to="/" className="btn btn-primary">
              Browse categories
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const update =
    (key: keyof typeof initialForm) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [key]: e.target.value }));
      setErrors((err) => ({ ...err, [key]: undefined }));
    };

  const validate = () => {
    const err: Record<string, string> = {};
    if (!form.firstName.trim()) err.firstName = "First name is required";
    if (!form.lastName.trim()) err.lastName = "Last name is required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = "Enter a valid email";
    if (!/^[0-9+\-\s]{7,}$/.test(form.phone)) {
      err.phone = "Enter a valid phone number";
    }
    if (!form.address.trim()) err.address = "Address is required";
    if (!form.city.trim()) err.city = "City is required";
    if (!form.state.trim()) err.state = "State is required";
    if (!/^[0-9]{4,10}$/.test(form.zip)) err.zip = "Enter a valid PIN code";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const placeOrder = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      document
        .querySelector(".field .err")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setPlacing(true);
    setSubmitError(null);

    try {
      const saved = await submitOrder({
        customerName: `${form.firstName} ${form.lastName}`,
        email: form.email,
        phone: form.phone,
        address: form.address,
        city: form.city,
        state: form.state,
        zip: form.zip,
        notes: form.notes,
        subtotal,
        shipping,
        totalAmount: total,
        paymentMethod: "Pay on Delivery",
        items: items.map((item) => ({
          productId: item.id,
          name: item.name,
          price: item.price,
          quantity: item.qty,
        })),
      });

      const orderId = "URV" + String(saved.id).padStart(6, "0");
      clear();
      navigate("/order-confirmation", {
        state: {
          orderId,
          total,
          name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          address: `${form.address}, ${form.city}, ${form.state} ${form.zip}`,
        },
      });
    } catch {
      setSubmitError(
        "We couldn't place your order right now. Please try again.",
      );
      setPlacing(false);
    }
  };

  const inputClass = (key: string) => (errors[key] ? "invalid" : "");

  return (
    <section className="page">
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link to="/cart">Cart</Link>
          <span aria-hidden="true">/</span>
          <span>Checkout</span>
        </nav>
        <h1>Checkout</h1>

        <form className="checkout-grid" onSubmit={placeOrder} noValidate>
          <div>
            <div className="checkout-card">
              <h3>
                <span className="step">1</span> Delivery Details
              </h3>
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    id="firstName"
                    className={inputClass("firstName")}
                    value={form.firstName}
                    onChange={update("firstName")}
                    placeholder="John"
                  />
                  {errors.firstName && (
                    <span className="err">{errors.firstName}</span>
                  )}
                </div>
                <div className="field">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    className={inputClass("lastName")}
                    value={form.lastName}
                    onChange={update("lastName")}
                    placeholder="Doe"
                  />
                  {errors.lastName && (
                    <span className="err">{errors.lastName}</span>
                  )}
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    className={inputClass("email")}
                    value={form.email}
                    onChange={update("email")}
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className="err">{errors.email}</span>}
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    className={inputClass("phone")}
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="98765 43210"
                  />
                  {errors.phone && <span className="err">{errors.phone}</span>}
                </div>
                <div className="field full">
                  <label htmlFor="address">Address</label>
                  <input
                    id="address"
                    className={inputClass("address")}
                    value={form.address}
                    onChange={update("address")}
                    placeholder="Street address"
                  />
                  {errors.address && (
                    <span className="err">{errors.address}</span>
                  )}
                </div>
                <div className="field">
                  <label htmlFor="city">City</label>
                  <input
                    id="city"
                    className={inputClass("city")}
                    value={form.city}
                    onChange={update("city")}
                    placeholder="City"
                  />
                  {errors.city && <span className="err">{errors.city}</span>}
                </div>
                <div className="field">
                  <label htmlFor="state">State</label>
                  <input
                    id="state"
                    className={inputClass("state")}
                    value={form.state}
                    onChange={update("state")}
                    placeholder="State"
                  />
                  {errors.state && <span className="err">{errors.state}</span>}
                </div>
                <div className="field">
                  <label htmlFor="zip">PIN Code</label>
                  <input
                    id="zip"
                    className={inputClass("zip")}
                    value={form.zip}
                    onChange={update("zip")}
                    placeholder="000000"
                  />
                  {errors.zip && <span className="err">{errors.zip}</span>}
                </div>
                <div className="field full">
                  <label htmlFor="notes">Order Notes (optional)</label>
                  <textarea
                    id="notes"
                    rows={3}
                    value={form.notes}
                    onChange={update("notes")}
                    placeholder="Delivery instructions, landmarks, etc."
                  />
                </div>
              </div>
            </div>

            <div className="checkout-card">
              <h3>
                <span className="step">2</span> Payment Method
              </h3>
              <div className="payment-option">
                <span className="radio" aria-hidden="true" />
                <div>
                  <strong>Pay on Delivery</strong>
                  <small>
                    Pay with cash when your order is delivered to your doorstep.
                  </small>
                </div>
              </div>
              <p className="payment-note">
                Pay on Delivery is currently the only available payment option.
                Please keep the exact amount ready at the time of delivery.
              </p>
            </div>
          </div>

          <aside className="summary">
            <h3>Your Order</h3>
            <div className="order-items">
              {items.map((item) => (
                <div className="order-item" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div className="order-item__info">
                    <h4>{item.name}</h4>
                    <span>
                      {item.unit} · Qty {item.qty}
                    </span>
                  </div>
                  <span className="order-item__price">
                    {formatInr(item.price * item.qty)}
                  </span>
                </div>
              ))}
            </div>

            <div className="summary-line">
              <span>Subtotal</span>
              <span>{formatInr(subtotal)}</span>
            </div>
            <div className="summary-line">
              <span>Shipping</span>
              <span>
                {shipping === 0 ? "Free" : formatInr(shipping)}
              </span>
            </div>
            <div className="summary-line summary-line--total">
              <span>Total due on delivery</span>
              <strong>{formatInr(total)}</strong>
            </div>

            {submitError && (
              <span className="err" style={{ display: "block", marginBottom: 10 }}>
                {submitError}
              </span>
            )}
            <button type="submit" className="btn btn-primary" disabled={placing}>
              {placing ? "Placing Order…" : "Place Order (Pay on Delivery)"}
            </button>
            <Link to="/cart" className="btn btn-outline">
              Back to Cart
            </Link>
          </aside>
        </form>
      </div>
    </section>
  );
}
