import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const star = <FontAwesomeIcon icon={faStar} />
const emptyStar = <FontAwesomeIcon icon={faStar} />

const Rating = (rating) => {
  const rate = rating.rate;

  console.log('Rating:', rate);

  const range = [1, 2, 3, 4, 5];

  return (
    <div className='rating' aria-label={`${rate} étoiles sur 5`}>
      {range.map((rangeElem) =>
      rate >= rangeElem ? <span key={rangeElem.toString()} className='star'>{star}</span> : <span key={rangeElem.toString()} className='emptyStar'>{emptyStar}</span>
      )}
    </div>
  );
};

export default Rating;