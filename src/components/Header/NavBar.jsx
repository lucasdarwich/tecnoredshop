import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "./CartWidget";
import logobrandnobg from "../../images/logobrandnobg.png";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { dataBase } from "../../services/FirebaseConfig";

function NavBar() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const collectionCategorias = collection(dataBase, "categorias");
    getDocs(collectionCategorias)
      .then((res) => {
        const categories = res.docs.map((cat) => {
          return {
            id: cat.id,
            ...cat.data(),
          };
        });
        setCategorias(categories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
              {categorias.map((cat) => (
                <NavLink
                  to={`/category/${cat.path}`}
                  key={cat.id}
                  className='navegacion'
                >
                  {cat.name}
                </NavLink>
              ))}
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
