import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../index.css";

class NavbarC extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="/home">Employee Managent App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="https://github.com/baranacikgoz">
              <i className="fab fa-github fa-2x"></i>
            </Nav.Link>
            <Nav.Link href="www.linkedin.com/in/baran-acikgoz">
              <i className="fab fa-linkedin fa-2x"></i>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>

            <Nav.Link href="/users">Database & Operations</Nav.Link>
            <Nav.Link href="/adduser">Employee Add</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default NavbarC;
