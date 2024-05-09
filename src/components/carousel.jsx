// nodes
import React, { useState, useEffect } from 'react';

// modules
import CardOne from './cards/card_one';
import CardTwo from './cards/card_two';
import CardThree from './cards/card_three';
import CardFour from './cards/card_four';

//css
import '../css/carousel.css';

const cards = [
  <CardOne />,
  <CardTwo />,
  <CardThree />,
  <CardFour />
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pause, setPause] = useState(false);

  const handleSelect = (index) => {
    setActiveIndex(index);
    setPause(true); // Pause the auto-scroll when a bullet is clicked
  };

  useEffect(() => {
    if (!pause) {
      const timer = setTimeout(() => {
        setActiveIndex((current) => (current + 1) % cards.length);
      }, 5000); // Rotate every 3 seconds

      return () => clearTimeout(timer);
    }
  }, [activeIndex, pause]);

  useEffect(() => {
    const resumeAutoScroll = () => {
      if (pause) {
        setTimeout(() => setPause(false), 2000); // Resume after no interaction for 3 seconds
      }
    };

    document.addEventListener('mousemove', resumeAutoScroll);

    return () => document.removeEventListener('mousemove', resumeAutoScroll);
  }, [pause]);

  return (
    <div className="carousel-container">
      <div className="carousel-card">
        {cards[activeIndex]}
      </div>
      <div className="carousel-nav">
        {cards.map((_, index) => (
          <button
            key={index}
            className={`nav-button ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          ></button>
        ))}
        </div>
        <div id="top-left-lily"></div>
      <div id="bottom-right-lily"></div>
    </div>
  );
};

export default Carousel;
