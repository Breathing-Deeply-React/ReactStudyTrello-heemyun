import { useState, useRef } from 'react';
import { mixins } from '../styles/layout';
import styled, { css } from 'styled-components';
import Modal from './Modal.js';

const StyledButton = styled.button`
  position: relative;
  margin-right: 5px;
  padding: ${({ type }) => (type === 'dropdown' ? '8px 20px 8px 8px' : '8px')};
  border-radius: 4px;
  background-color: transparent;
  white-space: nowrap;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  ${({ type }) => {
    if (type === 'dropdown') {
      return css`
        &:before {
          ${({ mixins }) => mixins.positionXY('absolute', '50%')};
          right: 8px;
          width: 6px;
          height: 1px;
          background-color: red;
          content: '';
        }
      `;
    }
  }}
`;

const CustomButton = ({ text, type, onClick }) => {
  const buttonType = [
    'dropdown',
    'information',
    'notification',
    'user'
  ].includes(type)
    ? type
    : 'default';

  // el : TODO 외부 영역 누르면 닫히겡
  const el = useRef();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = ({ target }) => {
    target.style.zIndex = '100';
    setModalOpen(true);
  };

  const handleCloseModal = e => {
    console.log(e);
    setModalOpen(false);
  };

  return (
    <>
      <StyledButton
        className={['customButton', `customButton_${buttonType}`].join(' ')}
        type={type}
        mixins={{ ...mixins }}
        onClick={handleOpenModal}
      >
        {text}
      </StyledButton>
      {isModalOpen && (
        <Modal ref={el} title={text} handleCloseModal={handleCloseModal} />
      )}
    </>
  );
};

CustomButton.defaultProps = {
  type: 'default'
};

export default CustomButton;
