import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Navigation = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">해양쓰레기 현황</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="커뮤니티" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">**시</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                **시
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">**시</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;