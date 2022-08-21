import { useState, forwardRef } from 'react';
import { mixins } from '../styles/layout';
import styled, { css } from 'styled-components';
import HeaderModal from './HeaderModal.js';

const StyledButton = styled.div`
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

const CustomButton = forwardRef(({ text, type }, ref) => {
  const buttonType = [
    'dropdown',
    'information',
    'notification',
    'user'
  ].includes(type)
    ? type
    : 'default';

  const [isModalOpen, setModalOpen] = useState(false);
  const [left, setLeft] = useState(0);

  const handleOpenModal = e => {
    setModalOpen(true);
    setLeft(e.currentTarget.offsetLeft);
  };

  const handleCloseModal = e => {
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
        <HeaderModal
          ref={ref}
          title={text}
          handleCloseModal={handleCloseModal}
          left={left}
        />
      )}
    </>
  );
});

CustomButton.defaultProps = {
  type: 'default'
};

export default CustomButton;
