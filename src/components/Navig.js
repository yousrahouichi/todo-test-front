import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
const Navig = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">Todo App</Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>
            <Link to="/todos">My Todos</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/addTodo">Add Todo</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/signin">Signin</Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navig;
