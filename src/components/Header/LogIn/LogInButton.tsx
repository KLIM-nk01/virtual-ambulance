import styled from 'styled-components';
import { flex } from '../../../style/flex';
import { STYLE_CONSTANTS } from '../../../constants/styleConstants';

export const LogInButton = styled.button`
  width: 95px;
  height: 40px;
  border-radius: 50px;
  background-color: ${STYLE_CONSTANTS.COLORS.white};
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
    box-shadow: 5px 5px 5px ${STYLE_CONSTANTS.COLORS.darkGrey};
  }
`;
