import styled from 'styled-components';
import { STYLE_CONSTANTS } from '../../../constants/styleConstants';
import { flex } from '../../../style/flex';

interface IProps {
  width?: string;
  backgroundColor?: string;
}

export const ButtonStyle = styled.button<IProps>`
  width: ${({ width }) => width || '95px'};
  height: 40px;

  background: ${({ backgroundColor }) => backgroundColor || 'white'};

  border-radius: 50px;
  ${flex};
  justify-content: center;
  color: ${STYLE_CONSTANTS.COLORS.black};
  border: none;
  transition: 0.5s;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;

  :hover {
    background: ${STYLE_CONSTANTS.COLORS.darkYellowGreen};
    color: ${STYLE_CONSTANTS.COLORS.white};
    box-shadow: 0.2em 0.2em 5px ${STYLE_CONSTANTS.COLORS.darkGrey};
  }
`;
