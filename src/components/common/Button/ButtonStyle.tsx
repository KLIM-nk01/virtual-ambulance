import styled from 'styled-components';
import { STYLE_CONSTANTS } from '@constants/styleConstants';
import { flex } from '@styleMixin/flex';

interface IProps {
  width?: string;
  backgroundColor?: string;
  primary?: boolean;
  secondary?: boolean;
}

export const ButtonStyle = styled.button<IProps>`
  width: ${({ width }) => width || '95px'};
  height: 40px;
  border: none;

  background: ${({ primary }) =>
    primary
      ? STYLE_CONSTANTS.COLORS.moderateTurquoise
      : STYLE_CONSTANTS.COLORS.smokyWhite};

  border-radius: 50px;
  ${flex};
  justify-content: center;
  color: ${({ primary }) =>
    primary ? STYLE_CONSTANTS.COLORS.white : STYLE_CONSTANTS.COLORS.black};

  transition: 0.5s;
  cursor: pointer;
  font-size: ${STYLE_CONSTANTS.FONT_SIZE.small};
  font-weight: 700;

  :hover {
    color: ${STYLE_CONSTANTS.COLORS.white};
    box-shadow: 5px 5px 5px ${STYLE_CONSTANTS.COLORS.darkGrey};
    background: ${({ primary }) =>
      primary
        ? STYLE_CONSTANTS.COLORS.slateBlue
        : STYLE_CONSTANTS.COLORS.darkYellowGreen};
  }
`;
