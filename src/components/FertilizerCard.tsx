import type { Fertilizer } from "../types/catalog";
import { useCart } from "../context/CartContext";
import "./FertilizerCard.css";

interface FertilizerCardProps {
  fertilizer: Fertilizer;
  index: number;
}

function formatInr(amount: number) {
  return `₹${amount.toFixed(0)}`;
}

export default function FertilizerCard({
  fertilizer,
  index,
}: FertilizerCardProps) {
  const { addToCart } = useCart();

  return (
    <article className="fert-card">
      <div className="fert-card__media">
        <span className="fert-card__step">{index + 1}</span>
        <img src={fertilizer.image} alt={fertilizer.name} loading="lazy" />
      </div>
      <div className="fert-card__body">
        <div className="fert-card__title-row">
          <h3>{fertilizer.name}</h3>
          {fertilizer.npk && (
            <span className="fert-card__npk">NPK {fertilizer.npk}</span>
          )}
        </div>
        <p className="fert-card__purpose">{fertilizer.purpose}</p>
        <dl className="fert-card__details">
          <div>
            <dt>When</dt>
            <dd>{fertilizer.timing}</dd>
          </div>
          <div>
            <dt>How</dt>
            <dd>{fertilizer.application}</dd>
          </div>
        </dl>
        <div className="fert-card__buy">
          <div className="fert-card__price">
            <strong>{formatInr(fertilizer.price)}</strong>
            <span>/ {fertilizer.unit}</span>
          </div>
          <button
            type="button"
            className="btn btn-primary fert-card__btn"
            onClick={() => addToCart(fertilizer)}
          >
            Buy
          </button>
        </div>
      </div>
    </article>
  );
}
