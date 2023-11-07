import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Bicycle } from "react-bootstrap-icons";

function NavBarC() {
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "#e03b3b", flexDirection: "column" }}
    >
      <Bicycle  size={64}/>
      <Container>
        <Navbar.Brand href="/">
          <h1>bikeworld</h1>
        </Navbar.Brand>
        <div className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Logar</Nav.Link>
            <Nav.Link href="/cadastro">Inserir Produtos</Nav.Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBarC;
