import React, { useState, useEffect } from 'react';

const SwitchingTextComponent = () => {
  const [currentText, setCurrentText] = useState('Fastest');
  const texts = ['Fastest', 'Cheapest', 'Best Reviewd' , 'Trusted']; // Array of texts to switch

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setCurrentText(texts[currentIndex]);
      currentIndex = (currentIndex + 1) % texts.length;
    }, 2000); // Interval in milliseconds (e.g., 2000ms = 2 seconds)

    return () => {
      clearInterval(intervalId); // Cleanup the interval on component unmount
    };
  }, []); // Empty dependency array to run the effect only once

  return <div>{currentText}</div>;
};

export default SwitchingTextComponent;
