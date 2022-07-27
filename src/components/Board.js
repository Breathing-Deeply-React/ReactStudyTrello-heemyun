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
      <textarea
        className='board-title'
        name='title'
        value={title}
        onChange={onEdit}
      >
        {title}
      </textarea>
      {cardsList.map((card, index) => {
        if (index === cardsList.length - 1) {
          return (
            // 인덱스 마지막일 때 add card 버튼 추가
            // [Q] 이 버튼 추가를 card 컴포넌트 내에서 할 수는 없나요?
            <button className='card-add' onClick={onAdd}>
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
