import styled from 'styled-components';
import { STYLE_CONSTANTS } from '@constants/styleConstants';

interface IProps {
  variant?: string;
  size?: string;
}

export const ButtonStyle = styled.button<IProps>`
  border: 1px solid ${STYLE_CONSTANTS.COLORS.blue};

  border-radius: 4px;
  cursor: pointer;
  transition: 0.5s;
  color: ${STYLE_CONSTANTS.COLORS.blue};
  font-weight: 500;
  text-transform: uppercase;
  min-width: 90px;
  width: fit-content;
  margin: 0 5px;
  padding: 5px;
  :hover {
    background: #d0deec;
  }

  :disabled {
    cursor: default;
    background: #e0e0e0;
    color: #7f8e9d;
    border: none;
  }

  ${(props) => {
    switch (props.variant) {
      case 'outlined':
        return `
        background: ${STYLE_CONSTANTS.COLORS.white};
        
        `;
        break;

      case 'contained':
        return `
        background: ${STYLE_CONSTANTS.COLORS.blue};
        color: ${STYLE_CONSTANTS.COLORS.white};
  
        :hover {
          background: ${STYLE_CONSTANTS.COLORS.darkBlue};
          box-shadow: 0px 0px 7px 0px #7f8e9d;
        }
        `;
        break;

      case 'text':
        return `
        background: ${STYLE_CONSTANTS.COLORS.blue};
        color: ${STYLE_CONSTANTS.COLORS.white};
        :hover {
          background: ${STYLE_CONSTANTS.COLORS.darkBlue};
        }
        :disabled {
        cursor: default;
        background: inherit;
        color: #7f8e9d;
        border: none;
        }
        `;
        break;
      default:
        return `background: ${STYLE_CONSTANTS.COLORS.white}; color: ${STYLE_CONSTANTS.COLORS.blue}`;
    }
  }};

  ${(props) => {
    switch (props.size) {
      case 'small':
        return `
        height: 30px;
        font-size: ${STYLE_CONSTANTS.FONT_SIZE.little}
        `;
        break;

      case 'medium':
        return `
        height: 36px;
        font-size: ${STYLE_CONSTANTS.FONT_SIZE.small}
        `;
        break;

      case 'large':
        return `
        height: 30px;
        font-size: ${STYLE_CONSTANTS.FONT_SIZE.small}
        `;
        break;

      case 'circle':
        return `
        height: 30px;
        width: 30px;
        font-size: ${STYLE_CONSTANTS.FONT_SIZE.small}
        `;
        break;
      default:
        return `
        width: 90px;
        height: 40px;
        font-size: ${STYLE_CONSTANTS.FONT_SIZE.small}
        `;
    }
  }};
`;
