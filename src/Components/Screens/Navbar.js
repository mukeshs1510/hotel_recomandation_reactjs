import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { useAuth } from "../../database/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Navbar() {
  const { currentUser, logout } = useAuth();

  const history = useHistory();
  // const [status, setStatus] = useState("Signin");

  // const checkLoginStatus = () => {
  //   if (currentUser == null) {
  //     setStatus = "Signin";
  //   } else {
  //     setStatus = "Logout";
  //   }
  // };

  async function logOut() {
    try {
      await logout();
      history.push("/login");
    } catch (error) {}
  }

  function handleCurrentUser() {
    if (currentUser == null) {
      return "Login";
    } else {
      return currentUser.email;
    }
  }

  return (
    <ReactBootStrap.Navbar bg="dark" style={{ position: "fixed" }} expand="lg">
      <ReactBootStrap.Navbar.Brand href="#home">
        <h4 style={{ color: "#CAD5E2", paddingLeft: 30 }}>
          Hotel Recomandation System
        </h4>
      </ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
        <ReactBootStrap.Nav className="ml-auto">
          <ReactBootStrap.Nav.Link
            style={{ color: "white", fontSize: 18, marginTop: 5 }}
            className="hover"
            href="#home"
          >
            <Link style={{ color: "white", textDecoration: "none" }} to="/">
              Home
            </Link>
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link
            style={{
              color: "white",
              fontSize: 18,
              marginTop: 5,
            }}
            className="hover"
            // href="/"
          >
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/service"
            >
              Services
            </Link>
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link
            style={{ color: "white", fontSize: 18 }}
            className="hover"
            // href="/service"
          >
            <Button
              style={{
                alignItems: "center",
                backgroundColor: "#343A40",
                borderColor: "white",
                color: "white",
              }}
              onClick={logOut}
            >
              Logout
            </Button>
          </ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>
  );
}
