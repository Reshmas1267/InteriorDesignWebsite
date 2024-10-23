import React, { useRef } from 'react';
import Slider from 'react-slick';

const Home = () => {
  const sliderRef = useRef(null); 

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  
  const handleImageClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="home" id="home">
      <div className="slider-container">
        <Slider {...settings} ref={sliderRef}>
          <div onClick={handleImageClick}> 
            <img src="/images/interior1.jpg" alt="Interior 1" />
          </div>
          <div onClick={handleImageClick}>
            <img src="/images/interior2.jpg" alt="Interior 2" />
          </div>
          <div onClick={handleImageClick}>
            <img src="/images/interior3.jpg" alt="Interior 3" />
          </div>
        </Slider>
      </div>
      
    </div>
  );
};

export default Home;
