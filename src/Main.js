import React from 'react';
import './styles/reset.css';
import { mixins } from './styles/layout';
import styled from 'styled-components';

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
  overflow-y: auto;
  height: 100vh;
  background-color: #fcdfd4;
`;

const Main = () => {
  return <StyledMain></StyledMain>;
};
export default Main;
