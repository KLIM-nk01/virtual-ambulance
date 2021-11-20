import styled from 'styled-components';
import { STYLE_CONSTANTS } from '@constants/styleConstants';

export const LogOutWrapper = styled.div`
  width: 160px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    margin-right: 10px;
  }

  @media (max-width: ${STYLE_CONSTANTS.SCREEN.tablet}) {
    margin: 10px 0;
    width: 160px;
  }
`;
