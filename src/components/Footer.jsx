import { Container, Row, Col } from "react-bootstrap";
import youtube_icon from "../../public/YoutubeLogo.png";
const Footer = () => {
  return (
    <footer className="bg-dark text-light" style={{ padding: "20px" }}>
      <Container>
        <Row>
          <Col md={4}>
            <h4>Sobre a BikeWorld</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
              distinctio rerum culpa perferendis sint rem, temporibus ad autem
              corrupti neque totam suscipit blanditiis aperiam molestias optio
              fuga et minima ut!
            </p>
          </Col>
          <Col md={4}>
            <h4>Links Rápidos</h4>
            <ul>
              <li>
                <a href="#">Página Inicial</a>
              </li>
              <li>
                <a href="#">Produtos</a>
              </li>
              <li>
                <a href="#">Contato</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h4>Redes Sociais</h4>
            <ul>
              <li>
                <a href="#">
                  <i className="fab fa-facebook"></i> Facebook
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center">
              © 2023 BikeWorld. Todos os direitos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
