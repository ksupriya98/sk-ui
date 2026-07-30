import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCategories } from "../api/catalog";
import CategoryCard from "../components/CategoryCard";
import type { Category } from "../types/catalog";
import "./pages.css";

export default function Home() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    fetchCategories()
      .then((data) => {
        if (active) setCategories(data);
      })
      .catch(() => {
        if (active) setError("Could not load categories.");
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <>
      <section className="home-hero">
        <div className="container home-hero__inner">
          <div>
            <span className="home-hero__badge">Fertilizer guidance by crop</span>
            <h1 className="home-hero__title">
              Choose what you grow, <span>feed it right</span>
            </h1>
            <p className="home-hero__text">
              Start with fruits, plants, or crops — then open any item to see
              the fertilizers that support healthy growth.
            </p>
            <div className="home-hero__actions">
              <a href="#categories" className="btn btn-primary">
                Browse categories →
              </a>
              <Link to="/category/fruits" className="btn btn-outline">
                Start with fruits
              </Link>
            </div>
          </div>
          <div className="home-hero__media">
            <img
              src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80"
              alt="Healthy green plants growing in rich soil"
            />
          </div>
        </div>
      </section>

      <section className="section" id="categories">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Browse by type</span>
            <h2>Fruits, Plants & Crops</h2>
            <p>
              Pick a category to explore items, then view the fertilizers each
              one typically needs.
            </p>
          </div>

          {loading && <p className="state-block">Loading categories…</p>}
          {error && <p className="state-block state-block--error">{error}</p>}

          {!loading && !error && (
            <div className="categories-grid">
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
