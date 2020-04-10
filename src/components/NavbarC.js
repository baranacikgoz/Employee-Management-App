import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

class NavbarC extends Component {
  render() {
    return (
      <Container className="container-fluid" style={{ marginBottom: "55px" }}>
        <Navbar className="fixed-top navbar-expand-lg" bg="primary" variant="dark">
          <Navbar.Brand href="https://baranacikgoz.github.io/Employee-Management-App/">Employee Management App</Navbar.Brand>
          <Nav className="ml-auto">
            <Link className="nav nav-link active" to="Employee-Management-App/">
              Home
            </Link>
            <Link className="nav nav-link active" to="Employee-Management-App/adduser">
              Add User
            </Link>
            <Link className="nav nav-link active" to="Employee-Management-App/users">
              Employee Database
            </Link>
          </Nav>
        </Navbar>
      </Container>
    );
  }
}
export default NavbarC;
