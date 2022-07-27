import React, { useState } from 'react';
import './styles/reset.css';
import styled from 'styled-components';
import Board from './components/Board';

const StyledMain = styled.main`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: nowrap;
  flex-grow: 1;
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 20px 10px 0;
  overflow-x: auto;
  background-color: #c5b8b1a8;
  font-size: 0;
  box-sizing: border-box;

  .board {
    display: inline-block;
    width: 100%;
    max-width: 250px;
    min-width: 250px;
    height: auto;
    margin: 0 10px;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    background-color: #ebebeb;
    box-sizing: border-box;

    &-title {
      width: 100%;
      height: 28px;
      min-height: 28px;
      max-height: 256px;
      padding: 5px;
      overflow-wrap: break-word;
      background: #ebebeb;
      border-radius: 3px;
      box-shadow: none;
      font-weight: 600;
      border: none;
      box-sizing: border-box;

      &:focus-visible {
        background-color: #a3b1ff;
      }
    }

    &-add {
      width: 100%;
      min-width: 200px;
      max-width: 200px;
      padding: 5px;
      border-radius: 3px;
      text-align: left;
      opacity: 0.5;
      background-color: #d3d3d3;
      &:hover {
        opacity: 1;
        background-color: #d3d3d3;
      }
    }
  }

  .card {
    background-color: #d3d3d3;
    border-radius: 5px;
    padding: 10px;
    margin-top: 10px;
    box-shadow: 0 1px 0 #091e4240;
    cursor: pointer;

    &-title {
      padding: 5px 0;
    }

    &-content {
      font-size: 12px;
    }
    &-add {
      width: 85%;
      max-width: 200px;
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

const Main = () => {
  const [data, setData] = useState([
    {
      title: '1 board title',
      id: 0,
      cards: [
        {
          id: 0,
          title: '1-0 card title'
        },
        {
          id: 1,
          title: '1-1 card title'
        },
        {
          id: 2,
          title: '1-2 card title'
        }
      ]
    },
    {
      title: '2 board title',
      id: 1,
      cards: [
        {
          id: 0,
          title: '2-0 card title'
        },
        {
          id: 1,
          title: '2-1 card title'
        },
        {
          id: 2,
          title: '2-2 card title'
        },
        {
          id: 3,
          title: '2-3 card title'
        }
      ]
    },
    {
      title: '3 board title',
      id: 2,
      cards: [
        {
          id: 0,
          title: '3-0 card title'
        },
        {
          id: 1,
          title: '3-1 card title'
        }
      ]
    },
    {
      title: '4 board title',
      id: 2,
      cards: [
        {
          id: 0,
          title: '3-0 card title'
        },
        {
          id: 1,
          title: '3-1 card title'
        }
      ]
    }
  ]);

  const onEdit = e => {
    const [name, value] = e.target;
    setData({ ...data, [name]: value });
  };
  return (
    <StyledMain>
      {data.map(board => (
        <Board
          key={board.id}
          title={board.title}
          cardsList={board.cards}
          onEdit={onEdit}
        />
      ))}
      <button className='board-add' onClick={e => console.log('board add')}>
        <i className='add-ico'>+</i>
        <span className='add-text'>Add a Board</span>
      </button>
    </StyledMain>
  );
};
export default Main;
