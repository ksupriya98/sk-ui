import { Link } from "react-router-dom";
import type { CatalogItem } from "../types/catalog";
import "./ItemCard.css";

interface ItemCardProps {
  item: CatalogItem;
}

export default function ItemCard({ item }: ItemCardProps) {
  return (
    <article className="item-card">
      <div className="item-card__media">
        <Link to={`/item/${item.slug}`} aria-label={item.name}>
          <img src={item.image} alt={item.name} loading="lazy" />
        </Link>
        <Link to={`/item/${item.slug}`} className="item-card__quick">
          View Fertilizers
        </Link>
      </div>
      <div className="item-card__body">
        <span className="item-card__cat">{item.category}</span>
        <h3 className="item-card__name">
          <Link to={`/item/${item.slug}`}>{item.name}</Link>
        </h3>
        <p className="item-card__desc">{item.description}</p>
        <div className="item-card__meta">
          <span>{item.growingSeason}</span>
          <span>{item.fertilizerIds.length} fertilizers</span>
        </div>
      </div>
    </article>
  );
}
