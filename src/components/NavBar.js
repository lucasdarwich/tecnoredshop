import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "./CartWidget";
import logobrandnobg from "../images/logobrandnobg.png";

function NavBar() {
  const opciones = [
    "Fibra Óptica",
    "Equipos GPON",
    "Networking",
    "Herramientas",
    "Servicios",
  ];

  const styleMenu = { color: "rgb(42, 51, 183)", fontWeight: "600" };

  return (
    <Navbar
      sticky='top'
      collapseOnSelect
      style={{ padding: "0" }}
      expand='lg'
      bg='light'
    >
      <Container>
        <Navbar.Brand className='col-lg-2'>
          <img
            alt='Tecnored Shop'
            src={logobrandnobg}
            width='200'
            height='66'
            className='d-inline-block align-top'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav
            className='col-lg-1 offset-lg-1 flex-grow-1 '
            style={{ justifyContent: "space-between" }}
          >
            <Nav.Link href='index.html' style={styleMenu}>
              {opciones[0]}
            </Nav.Link>
            <Nav.Link href='index.html' style={styleMenu}>
              {opciones[1]}
            </Nav.Link>
            <Nav.Link href='index.html' style={styleMenu}>
              {opciones[2]}
            </Nav.Link>
            <Nav.Link href='index.html' style={styleMenu}>
              {opciones[3]}
            </Nav.Link>
            <Nav.Link href='index.html' style={styleMenu}>
              {opciones[4]}
            </Nav.Link>
            <Nav.Link href=''>
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
