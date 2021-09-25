import styled from 'styled-components';
import { STYLE_CONSTANTS } from '@constants/styleConstants';

export const InputGroup = styled.div`
  position: relative;
  width: 300px;
  height: 35px;

  input {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border: 2px solid ${STYLE_CONSTANTS.COLORS.gray};
    border-radius: 50px;
    color: ${STYLE_CONSTANTS.COLORS.darkGrey};
    padding: 10px;
    background: inherit;
    transition: 0.3s;
    color: white;

    :hover {
      border-color: ${STYLE_CONSTANTS.COLORS.darkGrey};
    }
    :focus ~ label {
      top: -8px;
      font-size: 12px;
    }
  }

  label {
    position: absolute;
    top: 5px;
    left: 10px;
    color: ${STYLE_CONSTANTS.COLORS.white};
    transition: 0.3s;
    cursor: text;
    transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
    padding-left: 10px;
  }
`;

export const InputWrapper = styled.input`
  height: 40px;
  width: 25%; //
  padding: 20px;
  box-shadow: 0 0 5px ${STYLE_CONSTANTS.COLORS.white};
  background: inherit;
  color: ${STYLE_CONSTANTS.COLORS.white};
  transition: 0.3s;
  border-radius: 50px;
  border: none;

  font-size: ${STYLE_CONSTANTS.FONT_SIZE.small};

  ::placeholder {
    color: ${STYLE_CONSTANTS.COLORS.white};
    opacity: 0.5;
  }

  :focus {
    ::placeholder {
      color: transparent;
    }
  }
`;
