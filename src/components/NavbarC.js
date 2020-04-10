import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

class NavbarC extends Component {
  render() {
    return (
      <Container className="container-fluid" style={{ marginBottom: "55px" }}>
        <Navbar className="fixed-top" bg="primary" variant="dark">
          <Navbar.Brand href="/">Employee Management App</Navbar.Brand>
          <Nav className="ml-auto">
            <Link className="nav nav-link active" to="/">
              Home
            </Link>
            <Link className="nav nav-link active" to="/adduser">
              Add User
            </Link>
            <Link className="nav nav-link active" to="/users">
              Employee Database
            </Link>
          </Nav>
        </Navbar>
      </Container>
    );
  }
}
export default NavbarC;
