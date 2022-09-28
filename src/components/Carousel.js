import Carousel from "react-bootstrap/Carousel";
import somostecnored from "../images/slideone.png";
import servicios from "../images/servicios.jpg";

function CarouselGreet() {
  const styleCarousel = { fontSize: "14px" };

  return (
    <Carousel fluid>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src={somostecnored}
          alt='Primera Slide'
        />
        <Carousel.Caption>
          <h3>Somos Tecnored</h3>
          <p style={styleCarousel}>
            Somos líderes del sector TIC con más de 100 CLIENTES que avalan
            nuestros productos y servicios.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={servicios} alt='Second slide' />

        <Carousel.Caption>
          <h3>Especialistas proyección de Redes</h3>
          <p style={styleCarousel}>
            Diseño e implementación de redes troncales, sub-troncales, FTTx
            pasivas y/o activas, aéreas, subterráneas y subacuáticas.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselGreet;
