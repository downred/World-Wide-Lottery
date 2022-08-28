import React from "react";
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/home">World Wide Lottery</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/winners">Winners</Nav.Link>
            <Nav.Link as={Link} to="/players">Players</Nav.Link>
            <Nav.Link as={Link} to="/statistics">Statistics</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
