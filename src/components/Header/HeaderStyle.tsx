import styled from 'styled-components';
import { STYLE_CONSTANTS } from '@constants/styleConstants';

export const HeaderWrapper = styled.header`
  height: 80px;
  width: 100%;
  background-color: inherit;
  color: ${STYLE_CONSTANTS.COLORS.white};
  font-size: ${STYLE_CONSTANTS.FONT_SIZE.small};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${STYLE_CONSTANTS.COLORS.blue};
`;

export const HeaderContainerStyle = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media (max-width: ${STYLE_CONSTANTS.SCREEN.tablet}) {
    position: relative;
    justify-content: center;
  }
`;

export const LogInOutWrapper = styled.div`
  @media (max-width: ${STYLE_CONSTANTS.SCREEN.tablet}) {
    display: none;
  }
`;
