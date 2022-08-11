import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import useOnClickOutside from '../hooks/useOnClickOutside';

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

      &__desc {
        padding-top: 20px;
      }
    }

    &-close {
      position: absolute;
      top: 20px;
      right: 20px;
      padding: 5px;
    }

    &-btns {
      position: absolute;
      right: 20px;
      bottom: 20px;
    }
  }

  strong {
    display: inline-block;
    vertical-align: middle;
    min-width: 40px;
    margin-right: 14px;
  }

  textarea {
    display: inline-block;
    vertical-align: middle;
    padding: 7px;
    font-size: 14px;
    line-height: 14px;
    border: 0;
    border-bottom: 1px solid grey;

    &.modal-title__textarea {
      height: 14px;
    }
  }

  button {
    padding: 4px;
    border-radius: 4px;
    box-shadow: 2px 4px 10px #dedede;
  }
`;

const CardModal = ({
  title,
  id,
  desc,
  isEditing,
  setIsEditing,
  onEditDesc,
  onAddDesc,
  handleCloseModal
}) => {
  const ref = useRef();
  useOnClickOutside(ref, () => setIsEditing(!isEditing));

  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);

  const [localTitle, setLocalTitle] = useState(title);
  const [localDesc, setLocalDesc] = useState(desc);

  const quitEdit = () => {
    setIsEdit(false);
    setLocalDesc(localDesc);
  };

  return (
    <StyledCardModal>
      <div className='dimmed'></div>
      <div className='modal-content' ref={ref}>
        <div className='modal-inner'>
          <div className='modal-inner__title'>
            <strong>할 일</strong>
            <p className='modal-title blind'>{title}</p>
            <textarea
              className='modal-title__textarea'
              name='title'
              value={localTitle}
              onChange={e => setLocalTitle(e.target.value)}
            ></textarea>
          </div>
          <div className='modal-inner__desc'>
            <strong>설명</strong>
            {isEdit ? (
              <textarea
                className='modal-desc__textarea'
                name='description'
                value={localDesc}
                onChange={e => setLocalDesc(e.target.value)}
              ></textarea>
            ) : (
              <>{localDesc}</>
            )}
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
          <div className='modal-btns'>
            {isEdit ? (
              <>
                <button onClick={quitEdit}>취소</button>
                <button
                  onClick={e => {
                    onAddDesc(e, id, localDesc);
                    toggleIsEdit();
                  }}
                >
                  완료
                </button>
              </>
            ) : (
              <>
                <button onClick={toggleIsEdit}>수정하기</button>
              </>
            )}
          </div>
        </div>
      </div>
    </StyledCardModal>
  );
};

export default CardModal;
