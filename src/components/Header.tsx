import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Header.css";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Fruits", to: "/category/fruits" },
  { label: "Vegetables", to: "/category/vegetables" },
  { label: "Flowers", to: "/category/flowers" },
  { label: "Crops", to: "/category/crops" },
];

export default function Header() {
  const { count, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="topbar">
        <div className="container topbar__inner">
          <span>Grow smarter — match fertilizers to what you cultivate</span>
          <span className="topbar__contact">Urvara Fertilizer Guide</span>
        </div>
      </div>

      <div className="container header__inner">
        <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
          <span className="brand__leaf" aria-hidden="true">
            🌿
          </span>
          <span className="brand__name">Urvara</span>
        </Link>

        <nav className={`nav ${menuOpen ? "nav--open" : ""}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `nav__link ${isActive ? "nav__link--active" : ""}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="header__actions">
          <button
            className="icon-btn cart-btn"
            aria-label="Open cart"
            onClick={openCart}
            type="button"
          >
            <CartIcon />
            {count > 0 && <span className="cart-badge">{count}</span>}
          </button>
          <button
            className="icon-btn menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}

function CartIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}
