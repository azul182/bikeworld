import Carousel from 'react-bootstrap/Carousel';
import './CarouselC.css'

function CarouselC() {
  return (
    <Carousel className='carousel'>
      <Carousel.Item>
        <img src='/banner_legal.jpg' alt="" />
        <Carousel.Caption>
          <h3>As Melhores Bikes</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='/banner_nao_tao_legal.jpg' alt="" />
        <Carousel.Caption>
          <h3>Sinta o poder das Bikes</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselC;