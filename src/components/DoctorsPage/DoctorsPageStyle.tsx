import styled from 'styled-components';
import { flex } from '@styleMixin/flex';
import { STYLE_CONSTANTS } from '@constants/styleConstants';

export const DoctorsPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

export const DoctorsWrapper = styled.div`
  max-width: 860px;
  height: fit-content;
  margin: 30px auto;
  justify-content: space-around;
  flex-wrap: wrap;
  ${flex};

  border-radius: 15px;
  
  @media (max-width: ${STYLE_CONSTANTS.SCREEN.tablet}) {
    flex-wrap: nowrap;
    flex-direction: column;
  }
`;
