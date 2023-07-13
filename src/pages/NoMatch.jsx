import "../css/NoMatch.css";
import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <>
      <section className="no-match-section"></section>
      <div className="no-match-container">
        <h1 className="no-match-alert">Page Not Found</h1>
        <Link to="/" className="text-decoration-none">
          BACK TO HOME
        </Link>
      </div>
    </>
  );
}
export default NoMatch;
