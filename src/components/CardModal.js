import React from 'react';
import styled from 'styled-components';

const StyledCardModal = styled.div`
  .dimmed {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
  }

  .modal {
    &-content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-width: 300px;
      width: 100%;
      height: 400px;
      border-radius: 10px;
      box-shadow: 0px 3px 6px #091e4240;
      background-color: white;
      box-sizing: border-box;
    }

    &-inner {
      position: relative;
      height: 100%;
      padding: 50px 20px 20px;
      box-sizing: border-box;
    }

    &-close {
      position: absolute;
      top: 20px;
      right: 20px;
      padding: 5px;
    }
  }
`;

const CardModal = ({ title, id, desc, handleCloseModal }) => {
  const onEditTitle = () => {};
  const onEditDesc = () => {};
  return (
    <StyledCardModal>
      <div className='dimmed'></div>
      <div className='modal-content'>
        <div className='modal-inner'>
          <div className='modal-inner__title'>
            <strong>제목</strong>
            <p className='modal-title blind'>{title}</p>
            <textarea
              name='title'
              value={title}
              onChange={onEditTitle}
            ></textarea>
          </div>
          <div className='modal-inner__desc'>
            <strong>Description</strong>
            <textarea
              name='description'
              value={desc}
              onChange={onEditDesc}
            ></textarea>
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
        </div>
      </div>
    </StyledCardModal>
  );
};

export default CardModal;
