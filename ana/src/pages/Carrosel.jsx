import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-bootstrap/Carousel';
import Navbar from './navbar'

function Carrosel() {
  return (
    <div>
        <Navbar></Navbar>
    <Carousel data-bs-theme="dark">
        <a href=""></a>
        <h1>Coisas Legais</h1>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/originals/dc/d1/c9/dcd1c9e31142f00d67f3d12e6d936c0f.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Pokemon</h5>
          <p>Parabens ao Mudkip</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://imgb.ifunny.co/images/b009aa6de964ea9ac518900e44ad81ce191de456cab7464c1cb9b6f1ecf8c357_3.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Sherek</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          id="pinochio"
          src="https://i0.wp.com/apublica.org/wp-content/uploads/2017/01/pinochet-1.jpg?fit=2450%2C1470&ssl=1"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  ); 
}

export default Carrosel;