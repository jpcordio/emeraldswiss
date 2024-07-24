import React from 'react';
import { Carousel } from 'react-bootstrap';
import home1 from "../assets/images/carousel/brita.webp";
import home2 from "../assets/images/carousel/brita-two.webp";
import home3 from "../assets/images/carousel/brita-three.webp";
import about1 from "../assets/images/carousel/ThreeDogs.webp";
import about2 from "../assets/images/carousel/fourDogs.webp";
import about3 from "../assets/images/carousel/ourDogs.webp";
import puppies1 from "../assets/images/carousel/puppies1.webp";
import puppies2 from "../assets/images/carousel/puppies2.webp";
import puppies3 from "../assets/images/carousel/puppies3.webp";

function MyCarousel(props) {

    let banner1 = "https://www.w3schools.com/bootstrap/newyork.jpg";
    let banner2 = "https://www.w3schools.com/bootstrap/paris.jpg";
    let banner3 = "https://www.w3schools.com/bootstrap/sanfran.jpg";

    if(props.page === "home"){      
        banner1 = home1;
        banner2 = home2;
        banner3 = home3;
    }
    else if (props.page === "about"){      
        banner1 = about1;
        banner2 = about2;
        banner3 = about3;      
    }
    else if (props.page === "availablepuppies"){      
        banner1 = puppies1;
        banner2 = puppies2;
        banner3 = puppies3;      
    }

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