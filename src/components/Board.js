import React from 'react';
import Card from '../components/Card';

const Board = ({ title, cardsList, onEdit }) => {
  const onAdd = e => {
    // TODO: card CREATE
    console.log('add');
  };

  return (
    <div className='board'>
      <h2 className='blind'>board title</h2>
      <input
        className='board-title'
        name='title'
        value={title}
        onChange={onEdit}
      />
      {cardsList.map((card, index) => {
        if (index === cardsList.length - 1) {
          return (
            <button className='card-add' onClick={onAdd} key={index}>
              <i className='add-ico'>+</i>
              <span className='card-text'>Add a card</span>
            </button>
          );
        }
        return <Card key={card.id} title={card.title} index={index} />;
      })}
      <button className='board-more'></button>
    </div>
  );
};
export default Board;
