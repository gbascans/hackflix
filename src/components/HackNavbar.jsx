import { Link } from "react-router-dom";
import "../css/HackNavbar.css"
function HackNavbar() {
  return (
    <section className="navbar-contenedor">
      <div className='navbar'>
      <Link to="/" className="hackflix">HACKFLIX</Link>
      <div>
      <Link to="/paginacion/1" className="link">Ver por Paginas</Link>
      <Link to="/buscar" className="link">Buscar</Link>
      <Link to="/sobre-nosotros" className="link">About Us</Link>
      <Link to="/contacto" className="link">Contact</Link>
      </div>
      </div>
    </section>
  );
}

export default HackNavbar;