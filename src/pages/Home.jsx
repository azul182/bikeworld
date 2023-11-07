import CardC from "../components/CardC";
import CarouselC from "../components/CarouselC";

const cards = [
  { nome: "Bicicleta Azul", descricao: "Leve e ágil", img: "/bike_azul.jpg" },
  { nome: "Bicicleta Branca", descricao: "Excelente aderência", img:"/bike_branca.jpg"},
  { nome: "Bicicleta Vermelha", descricao: "Potência e controle" ,img:"/bike_vermelha.webp"},
  { nome: "Capacete", descricao: "Proteção e conforto",img:"capacete.jpg" },
  { nome: "Pedal", descricao: "Deslize nas ondas", img:"pedal.jpg"},
  { nome: "Capecete com furos", descricao:"Respire na cabeca", img:"/capacete_legal.webp"},
];

const Home = () => {
  return (
    <div>
      <CarouselC />
      <div style={{ padding: "80px 0" }}>
        <h2>Nossos produtos</h2>
        <div className="card-group">
          {cards.map((card, i) => (
            <CardC data={card} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
