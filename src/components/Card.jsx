import React from 'react';
const type = {
  normal: 1,
  fighting: 2,
  flying: 3,
  poison: 4,
  ground: 5,
  rock: 6,
  bug: 7,
  ghost: 8,
  steel: 9,
  fire: 10,
  water: 11,
  grass: 12,
  electric: 13,
  psychic: 14,
  ice: 15,
  dragon: 16,
  dark: 17,
  fairy: 18,
};
const Card = ({ id, name, img, onFlip, isFlipped, isHidden, types }) => {
  // const randomId = Math.floor(Math.random() * 4) + 1;
  const nameWithUpperCase = name.charAt(0).toUpperCase() + name.slice(1);
  console.log(types);
  return (
    <div
      className={`flip-container ${isFlipped ? '' : 'flip'} ${
        isHidden ? 'hide' : ''
      }`}
      onClick={onFlip}
    >
      <div className='card-flipper'>
        <div
          className='card card-front'
          // style={{
          //   backgroundImage: `url('/src/assets/images/card-bg-1.png')`,
          // }}
        >
          <div className='title'>
            <span className='card-font-name'> {nameWithUpperCase}</span>
            <span className='card-font-id'>{id}</span>
          </div>
          <div className='img-box'>
            <img className='img-big' src={img} alt='' />
          </div>
          <div className='types'>
            {types.map((el, index) => (
              <img
                key={index}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/${
                  type[el.type.name]
                }.png`}
                alt=''
              />
            ))}
          </div>
        </div>
        <div className='card card-back'></div>
      </div>
    </div>
  );
};

export default Card;
