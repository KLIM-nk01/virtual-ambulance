import styled from 'styled-components';
import { STYLE_CONSTANTS } from '@constants/styleConstants';

export const MedCentersListWrapper = styled.div`
  width: 90%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  @media (max-width: ${STYLE_CONSTANTS.SCREEN.tablet}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CenterWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 5px 0px ${STYLE_CONSTANTS.COLORS.darkGrey};
  padding-bottom: 20px;
`;
