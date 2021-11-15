import styled from 'styled-components';
import { STYLE_CONSTANTS } from '@constants/styleConstants';

export const ProfilePageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: ${STYLE_CONSTANTS.COLORS.lavender};
  overflow: auto;
  padding: 50px;
  
  @media (max-width: ${STYLE_CONSTANTS.SCREEN.tablet}) {
    padding: 15px;
  }
`;
