import { NavLink } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";


const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark" className="mt-4 mb-4 rounded">
      <Container>
        <Navbar.Brand as={NavLink} to="/">Blog.app</Navbar.Brand>
        <Nav>
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/categories">Categories</Nav.Link>
          <Nav.Link as={NavLink} to="/about">About</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar;