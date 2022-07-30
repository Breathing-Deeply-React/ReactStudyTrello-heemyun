import React, { useState, useRef, useEffect } from 'react';
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
      margin-bottom: 8px;
      padding: 5px;
      overflow-wrap: break-word;
      background: #ebebeb;
      border-radius: 3px;
      box-shadow: none;
      font-weight: 600;
      border: none;
      box-sizing: border-box;
    }

    &-add {
      width: 100%;
      min-width: 200px;
      max-width: 200px;
      padding: 5px;
      border-radius: 3px;
      text-align: left;
      font-size: 14px;
      opacity: 0.5;
      background-color: #d3d3d3;
      &:hover {
        opacity: 1;
        background-color: #d3d3d3;
      }

      &-list {
        padding: 5px;
        margin-right: 8px;
        border-radius: 5px;
        background-color: pink;
      }

      &-another {
        &:focus-visible {
          background-color: #a3b1ff;
        }
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
  let listId = useRef(1);

  const [listState, setListState] = useState([]);
  const [inputValue, setinputValue] = useState('');

  const [inputFocus, setInputFocus] = useState(false);

  const boardTitlefocus = useRef();

  const onAddList = () => {
    if (!inputValue) return;
    setListState(prevState => {
      return [...prevState, { title: inputValue, id: listId.current }];
    });

    setinputValue('');
    listId.current++;
  };

  useEffect(() => {
    if (!inputFocus) boardTitlefocus.current.focus();
  }, [inputFocus]);

  const onAddToggle = () => {
    setInputFocus(!inputFocus); // 비동기다. 함수형 업데이트를 해줘야한다.
    // if (!inputFocus) boardTitlefocus.current.focus();
  };

  const onInputTitle = e => {
    setinputValue(e.target.value);
  };

  return (
    <StyledMain>
      {listState.map(board => (
        <Board key={board.id} id={board.id} title={board.title} />
      ))}
      <div className='board-add'>
        {inputFocus ? (
          <div className='board-add-another' onClick={onAddToggle}>
            <i className='add-ico'>+</i>
            <span className='add-text'>
              {listState.length === 0 ? 'Add a list' : 'Add another list'}
            </span>
          </div>
        ) : (
          <div>
            <input
              className='board-title'
              ref={boardTitlefocus}
              name='title'
              value={inputValue}
              onChange={onInputTitle}
              placeholder='Enter list title...'
            />
            <button className='board-add-list' onClick={onAddList}>
              + Add list
            </button>
            <span className='board-close' onClick={onAddToggle}>
              close
            </span>
          </div>
        )}
      </div>
    </StyledMain>
  );
};
export default Main;
