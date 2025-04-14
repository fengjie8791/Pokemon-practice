import React from 'react';

const Button = ({ handleOnClick, name }) => {
  const fetchId = Math.floor(Math.random() * 151);
  return (
    <div>
      <button className='btn' onClick={() => handleOnClick(fetchId)}>
        {name}
      </button>
    </div>
  );
};

export default Button;
