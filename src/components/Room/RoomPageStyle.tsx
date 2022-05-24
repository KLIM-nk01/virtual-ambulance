import styled from 'styled-components';
import { STYLE_CONSTANTS } from '@constants/styleConstants';
import Back from '@assets/Back.jpg';

export const RoomPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${Back}) 100% 100% no-repeat;
  background-size: cover;
  overflow: auto;

  @media (max-width: ${STYLE_CONSTANTS.SCREEN.tablet}) {
    align-items: flex-start;
  }
`;