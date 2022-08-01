import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  .card {
    background-color: #d3d3d3;
    border-radius: 5px;
    padding: 10px;
    margin-top: 10px;
    box-shadow: 0 1px 0 #091e4240;
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
  const onRemove = () => {
    onRemoveCard(id);
  };
  return (
    <StyledCard className='card'>
      <div className='card-inner'>
        <h3 className='blind'>card title</h3>
        <div className='card-title'>{title}</div>
        <button onClick={onRemove}>x</button>
      </div>
    </StyledCard>
  );
};
export default Card;
