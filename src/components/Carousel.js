import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from "../assets/images/carousel/brita.webp";
import banner2 from "../assets/images/carousel/brita-two.webp";
import banner3 from "../assets/images/carousel/brita-three.webp";

function MyCarousel() {

    return (
        <Carousel className="custom-carousel" interval={3000}>
            <Carousel.Item>
                <img
                className="d-block w-100 carousel"
                src={banner1}
                alt="A bernese Dog"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 carousel"
                src={banner2}
                alt="A bernese Dog"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 carousel"
                src={banner3}
                alt="A bernese Dog"
                />
            </Carousel.Item>
        </Carousel>
    );
  }
  
  export default MyCarousel;