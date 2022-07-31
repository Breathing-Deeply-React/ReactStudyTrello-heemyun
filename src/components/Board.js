import React, { useState, useRef } from 'react';
import Card from '../components/Card';

const Board = ({ title, id, onRemove }) => {
  let cardId = useRef(1);

  const [cards, setCards] = useState([]);
  const [cardInputValue, setCardInputValue] = useState('');

  const onAddCard = listId => {
    if (!cardInputValue) return;
    setCards(prevState => {
      return [...cards, { title: cardInputValue, id: cardId.current }];
    });
    setCardInputValue('');

    cardId.current++;
  };

  const onClickRemove = () => {
    onRemove(id);
  };

  const onInputTitle = e => {
    setCardInputValue(e.target.value);
  };

  return (
    <div className='board'>
      <h2 className='blind'>board title</h2>

      <input
        className='board-title'
        name='title'
        value={title}
        onChange={onAddCard}
      />
      <button onClick={onClickRemove}>X</button>
      {cards.map((card, index) => {
        return <Card key={card.id} title={card.title} index={index} />;
      })}
      <button className='card-add'>
        <i className='add-ico'>+</i>
        <span className='card-text' onClick={onAddCard}>
          Add a card
        </span>
        <input
          className='board-title'
          name='title'
          value={cardInputValue}
          onChange={onInputTitle}
          placeholder='Enter list title...'
        />
      </button>
    </div>
  );
};
export default Board;
