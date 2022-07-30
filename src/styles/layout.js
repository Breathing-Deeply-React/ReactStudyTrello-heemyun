import { css } from 'styled-components';

export const mixins = {
  // flex
  flexBox: (direction = 'row', align = 'center', justify = 'center') => `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
  `,

  // position
  positionXY: (type = 'absolute', top = 'auto', left = 'auto') => {
    if (type === 'absolute') {
      return `
        position: ${type};
        top: ${top};
        left: ${left}
        ${({ top, left }) => {
          if (top === '50%' && left === '50%') {
            return css`
              transform: translate(-50%, -$50%);
            `;
          }
        }}
    `;
    }
  },

  absoluteFull: () => `
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left:0;
  `,

  // multi ellipsis
  multiEllipsis: (line = '1') => `
    display:block;
    display:-webkit-box;
    overflow:hidden;
    -webkit-line-clamp: ${line};
    -webkit-box-orient:vertical;
    text-overflow:ellipsis;
  `,

  // blind
  blind: () => `
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
  `
};
