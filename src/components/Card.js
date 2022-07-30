import React from 'react';

const Card = ({ title }) => {
  return (
    <div className='card'>
      <a href='/' role='button'>
        <h3 className='blind'>card title</h3>
        <div className='card-title'>{title}</div>
      </a>
    </div>
  );
};
export default Card;
