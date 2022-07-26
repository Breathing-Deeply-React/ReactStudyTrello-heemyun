import React, { useState } from 'react';
import './styles/reset.css';
import { mixins } from './styles/layout';
import styled from 'styled-components';
import Board from './components/Board';

const StyledMain = styled.main`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: nowrap;
  flex-grow: 1;
  position: relative;
  height: 100vh;
  overflow-y: auto;
  background-color: #c5b8b1;
  font-size: 0;

  .board {
    display: inline-block;
    width: 250px;
    height: auto;
    margin: 10px;
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
      width: 85%;
      margin-top: 5px;
      padding: 5px;
      border-radius: 3px;
      text-align: left;
      &:hover {
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
  }
`;

const Main = () => {
  return (
    <StyledMain>
      <Board />
      <Board />
    </StyledMain>
  );
};
export default Main;
