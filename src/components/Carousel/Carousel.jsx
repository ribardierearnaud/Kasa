import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // Dans le composant Carousel
console.log('Images:', images);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div>
      <button onClick={prevImage}>&lt;</button>
      <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />
      <button onClick={nextImage}>&gt;</button>
    </div>
  );
};

export default Carousel;