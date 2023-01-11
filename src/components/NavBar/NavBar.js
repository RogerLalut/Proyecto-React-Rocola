import CartWidget from "../CartWidgets/CartWidget";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./NavBarStyle.css";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              alt="Logo"
              src="./images/Logo.png"
              width="120"
              height="120"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">            
              <div>
                <ul className="listaNavBar">
                  <li>Poleras</li>
                  <li>Polerones</li>
                  <li>Musica</li>
                  <li>merchandising</li>
                  <li>Contacto</li>
                </ul>
              </div>
              <div>
                <CartWidget />
              </div>            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
