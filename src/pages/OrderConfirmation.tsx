import { Link, Navigate, useLocation } from "react-router-dom";
import "./pages.css";

interface ConfirmationState {
  orderId: string;
  total: number;
  name: string;
  email: string;
  address: string;
}

export default function OrderConfirmation() {
  const { state } = useLocation() as { state: ConfirmationState | null };

  if (!state?.orderId) {
    return <Navigate to="/" replace />;
  }

  return (
    <section className="page">
      <div className="container">
        <div className="confirm">
          <div className="confirm__check" aria-hidden="true">
            ✓
          </div>
          <h1>Thank you for your order!</h1>
          <p>
            Hi <strong>{state.name}</strong>, your order has been placed
            successfully.
          </p>
          <div className="confirm__order">Order #{state.orderId}</div>
          <p>
            <strong>Payment Method:</strong> Pay on Delivery
          </p>
          <p>
            <strong>Amount Due on Delivery:</strong> ₹{state.total.toFixed(0)}
          </p>
          <p>
            <strong>Delivering to:</strong> {state.address}
          </p>
          <p style={{ marginTop: 16 }}>
            A confirmation has been sent to <strong>{state.email}</strong>.
            Please keep the exact cash amount ready when your order arrives.
          </p>
          <div className="confirm__actions">
            <Link to="/" className="btn btn-primary">
              Continue Shopping
            </Link>
            <Link to="/cart" className="btn btn-outline">
              View Cart
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
