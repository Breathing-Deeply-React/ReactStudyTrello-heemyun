import React, { useEffect, useState } from 'react';

const Card = ({ title, index }) => {
  return (
    <div>
      <div className='card'>
        <a href='/' role='button'>
          <h3 className='blind'>card title</h3>
          <div className='card-title'>{title}</div>
          <div className='card-content'>
            <p className='card-content__text'>card 상세 내용</p>
          </div>
        </a>
      </div>
    </div>
  );
};
export default Card;
