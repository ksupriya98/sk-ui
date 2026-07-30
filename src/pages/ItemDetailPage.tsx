import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchFertilizersForItem } from "../api/catalog";
import FertilizerCard from "../components/FertilizerCard";
import type { CatalogItem, Fertilizer } from "../types/catalog";
import "./pages.css";

export default function ItemDetailPage() {
  const { itemSlug = "" } = useParams();
  const [item, setItem] = useState<CatalogItem | undefined>();
  const [fertilizers, setFertilizers] = useState<Fertilizer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError(null);

    fetchFertilizersForItem(itemSlug)
      .then((result) => {
        if (!active) return;
        if (!result) {
          setError("Item not found.");
          return;
        }
        setItem(result.item);
        setFertilizers(result.fertilizers);
      })
      .catch(() => {
        if (active) setError("Could not load fertilizers.");
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [itemSlug]);

  return (
    <>
      <div className="page-banner">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            {item ? (
              <>
                <Link to={`/category/${item.category}`}>
                  {item.category.charAt(0).toUpperCase() +
                    item.category.slice(1)}
                </Link>
                <span aria-hidden="true">/</span>
                <span>{item.name}</span>
              </>
            ) : (
              <span>{itemSlug}</span>
            )}
          </nav>
          <h1>{item?.name ?? "Item"}</h1>
          <p>Recommended fertilizers and when to apply them.</p>
        </div>
      </div>

      <div className="page">
        <div className="container">
          {loading && <p className="state-block">Loading fertilizers…</p>}
          {error && <p className="state-block state-block--error">{error}</p>}

          {!loading && !error && item && (
            <>
              <div className="item-detail">
                <div className="item-detail__media">
                  <img src={item.image} alt={item.name} />
                </div>
                <div>
                  <span className="item-detail__cat">{item.category}</span>
                  <h2>{item.name}</h2>
                  <p className="item-detail__desc">{item.description}</p>
                  <div className="item-detail__meta">
                    <div>
                      <strong>Growing season:</strong> {item.growingSeason}
                    </div>
                    <div>
                      <strong>Soil preference:</strong> {item.soilPreference}
                    </div>
                    <div>
                      <strong>Fertilizers listed:</strong> {fertilizers.length}
                    </div>
                  </div>
                </div>
              </div>

              <div className="section-head" style={{ marginTop: 56 }}>
                <span className="eyebrow">Nutrition plan</span>
                <h2>Necessary fertilizers</h2>
                <p>
                  Use this list as a starting guide for {item.name.toLowerCase()}{" "}
                  nutrition across the season.
                </p>
              </div>

              <div className="fertilizer-list">
                {fertilizers.map((fertilizer, index) => (
                  <FertilizerCard
                    key={fertilizer.id}
                    fertilizer={fertilizer}
                    index={index}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
