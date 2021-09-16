import styled from 'styled-components';
import { STYLE_CONSTANTS } from '../../constants/styleConstants';

interface IInput {
  style: {
    width: string;
    color: string;
    boxShadow: boolean;
    border: boolean;
  };
}

export const Input = styled.input`
  height: 40px;
  width: 25%; //
  color: ${STYLE_CONSTANTS.COLORS.white};
  background: inherit;
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 5px ${STYLE_CONSTANTS.COLORS.white};
  padding: 20px;
  font-size: 16px;

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
