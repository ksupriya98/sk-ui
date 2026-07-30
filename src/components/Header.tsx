import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Fruits", to: "/category/fruits" },
  { label: "Vegetables", to: "/category/vegetables" },
  { label: "Flowers", to: "/category/flowers" },
  { label: "Crops", to: "/category/crops" },
];

export default function Header() {
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

        <button
          className="icon-btn menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}
