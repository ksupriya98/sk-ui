import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__col footer__brand">
          <Link to="/" className="brand brand--light">
            <span className="brand__leaf" aria-hidden="true">
              🌿
            </span>
            <span className="brand__name">Urvara</span>
          </Link>
          <p>
            Practical fertilizer guidance for fruits, plants, and crops — so
            every grower can feed soil with purpose.
          </p>
        </div>

        <div className="footer__col">
          <h4>Browse</h4>
          <ul>
            <li>
              <Link to="/category/fruits">Fruits</Link>
            </li>
            <li>
              <Link to="/category/plants">Plants</Link>
            </li>
            <li>
              <Link to="/category/crops">Crops</Link>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>About</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#categories">Categories</a>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Note</h4>
          <p className="footer__contact">
            Recommendations are illustrative mock data for planning. Validate
            rates with local agronomy advice before applying.
          </p>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>
            © {new Date().getFullYear()} Urvara — Fertilizer Guide. Built with
            React.
          </p>
        </div>
      </div>
    </footer>
  );
}
