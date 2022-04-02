import React from "react";
import { Carousel } from "react-bootstrap";

import image1 from "../../images/1.jpg";
import image2 from "../../images/2.jpg";
import image5 from "../../images/5.jpg";
export const CarouselContainer = () => {
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={image1} alt="First slide" />
        <Carousel.Caption>
          <h3>Watch the Trailer</h3>
          <p>"Fantastic Beasts: The Crimes of Grindelwald".</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={image2} alt="Second slide" />
        <Carousel.Caption>
          <h3>Watch the Trailer</h3>
          <p>"Fantastic Beasts: The Secrets of Dumbledore".</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image5} alt="Third slide" />
        <Carousel.Caption>
          <h3>Watch the Trailer</h3>
          <p>"The Moon Knight ".</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
