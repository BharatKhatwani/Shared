import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';

const SliderComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: 'Bad talks',
      subtitle: 'Subtitle for Slide 1',
      details: 'Details for Slide 1',
      link: 'https://iesipsacademystudentclubs.org/'
    },
    {
      title: 'Slide 2',
      subtitle: 'Subtitle for Slide 2',
      details: 'Details for Slide 2',
      link: 'https://example.com'
    },
    {
      title: 'Slide 3',
      subtitle: 'Subtitle for Slide 3',
      details: 'Details for Slide 3',
      link: 'https://example.com'
    },
    {
      title: 'Coming Soon'
    },
    {
      title: 'Coming Soon'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 1000); // Change interval to 1000 milliseconds (1 second)

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div>
      <h1>COMING EVENTS</h1>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className={`card ${index === currentSlide ? 'active' : ''}`}>
            <h2>{slide.title}</h2>
            {slide.subtitle && <h3>{slide.subtitle}</h3>}
            {slide.details && <h4>{slide.details}</h4>}
            {slide.link && <a href={slide.link}>Click Here</a>}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
