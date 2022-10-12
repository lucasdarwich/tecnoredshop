import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "./CartWidget";
import logobrandnobg from "../../images/logobrandnobg.png";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  const styleMenu = { color: "rgb(42, 51, 183)", fontWeight: "600" };

  return (
    <header>
      <Navbar
        sticky='top'
        collapseOnSelect
        style={{ padding: "0" }}
        expand='lg'
        bg='light'
      >
        <Container>
          <Link to='/'>
            <Navbar.Brand className='col-lg-2'>
              <img
                alt='Tecnored Shop'
                src={logobrandnobg}
                width='200'
                height='66'
                className='d-inline-block align-top'
              />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav
              className='col-lg-1 offset-lg-1 flex-grow-1 '
              style={{ justifyContent: "space-between" }}
            >
              <NavLink to='/category/FO' style={styleMenu}>
                Fibra Óptica
              </NavLink>
              <NavLink to='/category/ONT' style={styleMenu}>
                GPON
              </NavLink>
              <NavLink to='/category/NETWORKING' style={styleMenu}>
                Networking
              </NavLink>
              <NavLink to='/category/TOOLS' style={styleMenu}>
                Herramientas
              </NavLink>
              <NavLink to='/cart'>
                <CartWidget />
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavBar;
