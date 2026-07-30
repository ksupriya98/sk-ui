import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  fetchCategory,
  fetchItemsByCategory,
  isCategorySlug,
} from "../api/catalog";
import ItemCard from "../components/ItemCard";
import type { CatalogItem, Category } from "../types/catalog";
import "./pages.css";

export default function CategoryPage() {
  const { categorySlug = "" } = useParams();
  const valid = isCategorySlug(categorySlug);

  const [category, setCategory] = useState<Category | undefined>();
  const [items, setItems] = useState<CatalogItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!valid) {
      setLoading(false);
      setError("Unknown category.");
      return;
    }

    let active = true;
    setLoading(true);
    setError(null);

    Promise.all([
      fetchCategory(categorySlug),
      fetchItemsByCategory(categorySlug),
    ])
      .then(([cat, list]) => {
        if (!active) return;
        if (!cat) {
          setError("Category not found.");
          return;
        }
        setCategory(cat);
        setItems(list);
      })
      .catch(() => {
        if (active) setError("Could not load this category.");
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [categorySlug, valid]);

  return (
    <>
      <div className="page-banner">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>{category?.title ?? categorySlug}</span>
          </nav>
          <h1>{category?.title ?? "Category"}</h1>
          <p>
            {category?.description ??
              "Browse items in this category and open one to see fertilizers."}
          </p>
        </div>
      </div>

      <div className="page">
        <div className="container">
          {loading && <p className="state-block">Loading items…</p>}
          {error && <p className="state-block state-block--error">{error}</p>}

          {!loading && !error && items.length === 0 && (
            <p className="state-block">No items in this category yet.</p>
          )}

          {!loading && !error && items.length > 0 && (
            <div className="item-grid">
              {items.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
