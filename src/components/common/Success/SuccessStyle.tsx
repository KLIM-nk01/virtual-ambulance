import styled from 'styled-components';
import { STYLE_CONSTANTS } from '@constants/styleConstants';

export const SuccessWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

export const SuccessContent = styled.div`
  width: 310px;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    text-align: center;
    font-size: ${STYLE_CONSTANTS.FONT_SIZE.small};
    color: ${STYLE_CONSTANTS.COLORS.black};
  }
`;
