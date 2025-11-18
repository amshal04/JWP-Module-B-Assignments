import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from "./Carosuel.module.css";
import pic1 from "../../assets/caro1.webp";
import pic2 from "../../assets/caro2.webp";
import pic3 from "../../assets/caro3.webp";
import pic4 from "../../assets/caro4.webp";
import pic5 from "../../assets/caro5.webp";
import pic6 from "../../assets/caro6.webp";
import pic7 from "../../assets/caro7.webp";

function Carosel() {
  return (
    <div className={styles.carouselWrapper}>
      <Carousel fade indicators={false} controls={false} interval={3000}>
        <Carousel.Item>
          <img className="d-block w-100" src={pic1} alt="slide 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={pic2} alt="slide 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={pic3} alt="slide 3" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={pic4} alt="slide 4" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={pic5} alt="slide 5" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={pic6} alt="slide 6" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={pic7} alt="slide 7" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carosel;
