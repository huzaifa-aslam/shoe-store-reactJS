import React,{useState} from 'react'
import {Carousel} from 'react-bootstrap'
import slide1 from '../img/revolt-164_6wVEHfI-unsplash.jpg'
import slide3 from '../img/jakob-owens-JzJSybPFb3s-unsplash.jpg'
import slide2 from '../img/plqml-felipe-pelaquim-6zO5VKogoZE-unsplash.jpg'
import slide4 from '../img/apostolos-vamvouras-YQbJLyY0hFU-unsplash.jpg'
import styles from './Slider.module.css'
export default function Slider() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img

            src={slide3}
            alt="First slide"
            className={styles.imgHeight}
          />

        </Carousel.Item>
        <Carousel.Item>
          <img

            src={slide2}
            alt="First slide"
            className={styles.imgHeight}
          />

        </Carousel.Item>
        <Carousel.Item>
          <img

            src={slide4}
            alt="First slide"
            className={styles.imgHeight}
          />

        </Carousel.Item>
        <Carousel.Item>
          <img

            src={slide1}
            alt="Second slide"
            className={styles.imgHeight}
          />


        </Carousel.Item>

      </Carousel>
    );
  }

//   render(<Slider />);