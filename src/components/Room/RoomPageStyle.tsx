import styled from 'styled-components';
import { STYLE_CONSTANTS } from '@constants/styleConstants';
import Back from '@assets/Back.jpg';

export const RoomPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(${Back}) 100% 100% no-repeat;
  background-size: cover;
  overflow: auto;

  @media (max-width: ${STYLE_CONSTANTS.SCREEN.tablet}) {
    align-items: flex-start;
  }
`;

export const VideoWrapper = styled.video`
  width: 100%;
  height: 100%;
`;

export const VWrapper = styled.video`
  width: 100%;
  height: 100%;
  margin: 20px;
`;

export const ControlsWrapper = styled.div`
  margin-top: 50px;
  display: flex;
`;
