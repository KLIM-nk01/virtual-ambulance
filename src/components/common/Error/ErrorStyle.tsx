import styled from 'styled-components';
import { STYLE_CONSTANTS } from '@constants/styleConstants';

export const ErrorWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 !important;
`;

export const ErrorContent = styled.div`
  width: 310px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
  span {
    margin-top: 10px;
    text-align: center;
    font-size: ${STYLE_CONSTANTS.FONT_SIZE.small};
    color: ${STYLE_CONSTANTS.COLORS.red};
  }
`;
