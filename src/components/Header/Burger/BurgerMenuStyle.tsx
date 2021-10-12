import { STYLE_CONSTANTS } from '@constants/styleConstants';
import styled from 'styled-components';

export const BurgerMenuWrapper = styled.div`
  width: 30px;
`;

export const BurgerMenuHeader = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  border: 1px solid ${STYLE_CONSTANTS.COLORS.blue};
  background: ${STYLE_CONSTANTS.COLORS.white};

  span {
    width: 100%;
    height: 3px;
    border: 1px solid ${STYLE_CONSTANTS.COLORS.blue};
  }
`;
