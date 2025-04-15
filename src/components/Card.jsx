import React from 'react';

const Card = ({ id, name, img, onFlip, isFlipped }) => {
  const nameWithUpperCase = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div
      className={`flip-container ${isFlipped ? '' : 'flip'}`}
      onClick={onFlip}
    >
      <div className='card-flipper'>
        <div className='card card-front'>
          <div className='title'>
            {id}
            <span className='font-600'> {nameWithUpperCase}</span>
          </div>
          <div className='img-box'>
            <img
              className='img-big'
              src={img.other['official-artwork'].front_default}
              alt=''
            />
          </div>
        </div>
        <div className='card card-back'></div>
      </div>
    </div>
  );
};

export default Card;
