import React, { useEffect, useState, useRef } from 'react';
import Card from '../components/Card';

const Board = ({ title, id, onRemove }) => {
  let cardId = useRef(1);

  const [cards, setCards] = useState([]);
  const [cardInputValue, setCardInputValue] = useState('');
  const [cardDesc, setCardDesc] = useState('');

  const onAddCard = e => {
    if (!cardInputValue) return;
    setCards(prevState => {
      return [
        ...cards,
        { title: cardInputValue, id: cardId.current, desc: cardDesc }
      ];
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

  const onSetTitle = e => {
    setCardInputValue(e.target.value);
  };

  const onEditDesc = e => {
    setCardDesc(e.target.value);
  };

  const onAddDesc = (e, id, localDesc) => {
    setCards(cards.map(it => (it.id === id ? { ...it, desc: localDesc } : it)));
  };

  const handleEnd = result => {
    console.log(result);
    if (!result.destination) return;
    const newCards = cards;

    const [reorderedItem] = newCards.splice(result.source.index, 1);
    console.log(newCards);

    newCards.splice(result.source.index, 0, reorderedItem);
    setCards(newCards);
  };

  return (
    <div className="board">
      <h2 className="blind">board title</h2>
      <input
        className="board-title"
        name="title"
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
            desc={card.desc}
            index={index}
            onRemoveCard={onRemoveCard}
            onEditDesc={onEditDesc}
            onAddDesc={onAddDesc}
            handleEnd={handleEnd}
          />
        );
      })}
      <button className="card-add">
        <i className="add-ico">+</i>
        <span className="card-text" onClick={onAddCard}>
          Add a card
        </span>
        <input
          className="board-title"
          name="title"
          value={cardInputValue}
          onChange={onSetTitle}
          placeholder="Enter list title..."
        />
      </button>
    </div>
  );
};
export default Board;
