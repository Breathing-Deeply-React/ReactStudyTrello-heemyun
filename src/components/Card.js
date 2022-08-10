import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import CardModal from '../components/CardModal';

const StyledCard = styled.div`
  .card {
    background-color: #d3d3d3;
    border-radius: 5px;
    padding: 10px;
    margin-top: 10px;
    box-shadow: 0px 3px 6px #091e4240;
    cursor: pointer;

    &-inner {
      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        padding: 3px 6px;
      }
    }

    &-title {
      padding: 5px 0;
    }

    &-content {
      font-size: 12px;
    }

    &-add {
      width: 100%;
      margin-top: 5px;
      padding: 5px;
      border-radius: 3px;
      text-align: left;

      &:hover {
        background-color: #d3d3d3;
      }
    }
  }
`;
const Card = ({ title, id, onRemoveCard }) => {
  const [isEditing, setIsEditing] = useState(false);
  // const [editTitle, setEditTitle] = useState('');

  const handleOpenModal = ({ target }, id) => {
    target.style.zIndex = '100';
    setIsEditing(isEditing => !isEditing);
  };
  const handleCloseModal = () => {
    setIsEditing(isEditing => !isEditing);
  };

  return (
    <>
      <StyledCard className='card' onClick={e => handleOpenModal(e, id)}>
        <div className='card-inner'>
          <h3 className='blind'>card title</h3>
          <p className='card-title'>{title}</p>
          <button onClick={() => onRemoveCard(id)}>x</button>
        </div>
      </StyledCard>
      {isEditing && (
        <CardModal
          title={title}
          id={id}
          key={id}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          handleCloseModal={handleCloseModal}
        />
      )}
    </>
  );
};
export default Card;
