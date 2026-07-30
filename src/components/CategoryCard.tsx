import { Link } from "react-router-dom";
import type { Category } from "../types/catalog";
import "./CategoryCard.css";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <article className="cat-card">
      <img src={category.image} alt={category.title} loading="lazy" />
      <div className="cat-card__overlay">
        <h3>{category.title}</h3>
        <p>{category.description}</p>
        <span className="cat-card__meta">{category.itemCount} items</span>
        <Link to={`/category/${category.id}`} className="cat-card__link">
          Explore →
        </Link>
      </div>
    </article>
  );
}
