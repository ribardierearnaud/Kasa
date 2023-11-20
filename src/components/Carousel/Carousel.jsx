import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className='carousel'>
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
      <div className='currentImageIndex'>{currentImageIndex + 1} / {images.length}</div>
      <button onClick={prevImage}>&lt;</button>
      <button onClick={nextImage}>&gt;</button>
    </div>

    
  );
};

export default Carousel;