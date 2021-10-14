import styled from 'styled-components';
import { STYLE_CONSTANTS } from '@constants/styleConstants';

export const MedCentersMapStyle = styled.div`
  width: 60%;
  height: 100%;
  color: ${STYLE_CONSTANTS.COLORS.black};
  @media (max-width: ${STYLE_CONSTANTS.SCREEN.tablet}) {
    display: none;
  }
`;
export const MarkerStyle = styled.img`
  width: 30px;
  cursor: pointer;
`;
