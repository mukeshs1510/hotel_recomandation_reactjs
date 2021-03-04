import React from "react";
import * as ReactBootStrap from "react-bootstrap";

export default function Navbar() {
  return (
    <ReactBootStrap.Navbar bg="light" expand="lg">
      <ReactBootStrap.Navbar.Brand href="#home">
        <h2>HRS</h2>
      </ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
        <ReactBootStrap.Nav className="ml-auto mr-50">
          <ReactBootStrap.Nav.Link className="hover" href="#home">
            Home
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link className="hover" href="#home">
            Services
          </ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>
  );
}
