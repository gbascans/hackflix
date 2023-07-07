import { Link } from "react-router-dom";
import "../css/HackNavbar.css";
function HackNavbar() {
  return (
    <section className="navbar-contenedor">
      <div className="navbar">
        <Link to="/" className="hackflix">
          HACKFLIX
        </Link>
        <div>
          <Link to="/paginacion/1" className="navbar-link">
            Ver por Paginas
          </Link>
          <Link to="/buscar" className="navbar-link">
            Buscar
          </Link>
          <Link to="/sobre-nosotros" className="navbar-link">
            About The Project
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HackNavbar;
