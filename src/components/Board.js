import React, { useState, useRef } from 'react';
import Card from '../components/Card';

const Board = ({ title, id, onRemove }) => {
  let cardId = useRef(1);

  const [cards, setCards] = useState([]);
  const [cardInputValue, setCardInputValue] = useState('');

  const onAddCard = () => {
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

  const onRemoveCard = targetId => {
    setCards(cards.filter(item => item.id !== targetId));
  };

  const onEditTitle = e => {
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
        return (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            index={index}
            onRemoveCard={onRemoveCard}
          />
        );
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
