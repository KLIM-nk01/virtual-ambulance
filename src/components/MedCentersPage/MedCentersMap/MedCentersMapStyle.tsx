import styled from 'styled-components';
import { STYLE_CONSTANTS } from '@constants/styleConstants';

interface IMarkerStyleProps {
  medCenterHover: boolean;
}

export const MedCentersMapStyle = styled.div`
  width: 70%;
  height: 100%;
  color: ${STYLE_CONSTANTS.COLORS.black};

  @media (max-width: ${STYLE_CONSTANTS.SCREEN.tablet}) {
    display: none;
  }
`;
export const MarkerStyle = styled.img<IMarkerStyleProps>`
  width: 30px;
  cursor: pointer;
  transition: 0.5s;

  :hover {
    -webkit-transform: scale(1.3);
    -ms-transform: scale(1.3);
    transform: scale(1.3);
  }
`;

export const MarkerWrapper = styled.div`
  position: relative;
`;
