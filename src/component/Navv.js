import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import "../CSS/Navbar.css";

function BasicExample() {
  return (
    <Navbar expand="lg" className=" ">
      <Container>
        <Navbar.Brand href="#home" className="brand">
          SPAC <span>DYNA</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto m-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/About">About</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Offer">Offers</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Services">Services</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Contact">Contact</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
