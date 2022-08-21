import React, { useState } from 'react';
import styled from 'styled-components';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

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
const Card = ({ title, id, index, onRemoveCard, onEditDesc, onAddDesc }) => {
  const [isEditing, setIsEditing] = useState(false);
  // const [editTitle, setEditTitle] = useState('');

  const handleOpenModal = ({ target }, id) => {
    target.style.zIndex = '100';
    setIsEditing(isEditing => !isEditing);
  };
  const handleCloseModal = () => {
    setIsEditing(isEditing => !isEditing);
  };
  const handleEnd = result => {
    console.log(result);
  };

  return (
    <DragDropContext onDragEnd={handleEnd}>
      <Droppable droppableId="card-list">
        {provided => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <Draggable key={id} draggableId={id.toString()} index={index}>
              {(provided, snapshot) => {
                return (
                  <div
                    key={id}
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                  >
                    <StyledCard
                      className="card"
                      onClick={e => handleOpenModal(e, id)}
                    >
                      <div className="card-inner">
                        <h3 className="blind">card title</h3>
                        <p className="card-title">{title}</p>
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
                        onEditDesc={onEditDesc}
                        onAddDesc={onAddDesc}
                        handleCloseModal={handleCloseModal}
                      />
                    )}
                  </div>
                );
              }}
            </Draggable>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
export default Card;
