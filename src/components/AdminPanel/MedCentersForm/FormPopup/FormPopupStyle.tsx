import styled from 'styled-components';
import { STYLE_CONSTANTS } from '@constants/styleConstants';

export const EditPopupWrapper = styled.div`
  width: 380px;
  height: 100px;
`;

export const PopupContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  span {
    text-align: center;
    font-size: ${STYLE_CONSTANTS.FONT_SIZE.large};
    font-weight: 600;
  }

  a {
    text-align: center;
  }
`;
