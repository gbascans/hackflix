import "../css/HackNavbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
function HackNavbar() {
  return (
    <section className="navbar-contenedor">
      <Navbar expand="lg" className="navbar" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/" className="hackflix">
            HACKFLIX
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/paginacion/1" className="navbar-link">
                By Pages
              </Nav.Link>
              <Nav.Link href="/buscar" className="navbar-link">
                Search
              </Nav.Link>
              <Nav.Link href="/sobre-nosotros" className="navbar-link">
                About The Project
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
}

export default HackNavbar;
