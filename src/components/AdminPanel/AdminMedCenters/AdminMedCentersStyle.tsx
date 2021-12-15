import styled from 'styled-components';
import { STYLE_CONSTANTS } from '@constants/styleConstants';

export const AdminMedCentersWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 25px;
  display: flex;
  justify-content: center;
  background-color: ${STYLE_CONSTANTS.COLORS.smokyWhite};
  overflow: auto;

  @media (max-width: ${STYLE_CONSTANTS.SCREEN.tablet}) {
    padding: 0;
    padding: 25px 0 0;
  }
`;
