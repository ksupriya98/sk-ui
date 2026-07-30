import { Link } from "react-router-dom";
import "./pages.css";

export default function NotFound() {
  return (
    <div className="page">
      <div className="container">
        <div className="state-block">
          <h1>Page not found</h1>
          <p style={{ margin: "12px 0 24px" }}>
            That route does not exist in the fertilizer guide.
          </p>
          <Link to="/" className="btn btn-primary">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
