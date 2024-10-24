import React, { useEffect, useRef } from 'react';
import Portfolio from '../Portfolio';
import Div from '../Div';
import Slider from 'react-slick';

export default function PortfolioSlider({ data }) {
  const sliderRef = useRef(null);

  /** Slider Settings **/
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '0',
    slidesToShow: 3,
    speed: 500,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 4000); 

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <Slider {...settings} ref={sliderRef} className="cs-slider cs-style3 cs-gap-24">
      {data.map((item, index) => (
        <Div key={index}>
          <Portfolio
            title={item.title}
            subtitle={item.subtitle}
            href={item.href}
            src={item.src}
          />
        </Div>
      ))}
    </Slider>
  );
}
