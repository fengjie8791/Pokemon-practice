import React from 'react';

const Card = ({ id, name, img }) => {
  console.log(img);
  const immages = [];
  for (let key in img) {
    if (img[key] && (key !== 'other') & (key !== 'versions')) {
      immages.push(<img key={key} src={img[key]} alt='' />);
    }
  }

  return (
    <div className='card'>
      <div>{id}</div>
      <div>{name}</div>
      <div className='img'>
        {/* <img src={img} alt='' /> */}
        {immages.map((el) => el)}
      </div>
    </div>
  );
};

export default Card;
