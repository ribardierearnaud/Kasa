import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';

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
      {images.length > 1 && (
        <>
          <div className='prevIMG' onClick={prevImage}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <div className='nextIMG' onClick={nextImage}>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;