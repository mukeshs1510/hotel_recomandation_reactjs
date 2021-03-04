import "./App.css";
import * as ReactBootStrap from "react-bootstrap";

function App() {
  return (
    <div className="App">
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
            <ReactBootStrap.Nav.Link href="#link">
              Services
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  );
}

export default App;
