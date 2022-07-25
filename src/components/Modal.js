import { mixins } from '../styles/layout';
import styled, { css } from 'styled-components';

const StyledModal = styled.div`
  position: fixed;
  top: 40px;
  width: 305px;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 8px 16px -4px rgb(9 30 66 / 25%), 0 0 0 1px rgb(9 30 66 / 8%);
  background-color: white;
  box-sizing: border-box;
  z-index: 1000;

  .modal-title {
    max-height: 40px;
    padding: 12px 0;
    text-align: center;
  }

  .modal-content {
    height: 300px;
  }

  .modal-close {
    ${({ mixins }) => mixins.positionXY('absolute', '13px')}
    right: 13px;
    padding: 3px;
    font-size: 0;
  }
`;

const Modal = ({ title, handleCloseModal }) => {
  return (
    <StyledModal className='modal' mixins={{ ...mixins }}>
      <div className='modal-inner'>
        <div className='modal-title'>{title}</div>
        <div className='modal-content'></div>
      </div>
      <button className='modal-close' onClick={handleCloseModal}>
        <svg
          width='14'
          height='14'
          viewBox='0 0 14 14'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683418 0.292893 0.292893C0.683418 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683418 14.0976 1.31658 13.7071 1.70711L8.41421 7L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L7 8.41421L1.70711 13.7071C1.31658 14.0976 0.683418 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7Z'
            fill='currentColor'
          ></path>
        </svg>
        <span className='blind'>close</span>
      </button>
    </StyledModal>
  );
};
export default Modal;
