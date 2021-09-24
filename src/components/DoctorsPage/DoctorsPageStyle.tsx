import styled from 'styled-components';
import { STYLE_CONSTANTS } from '@constants/styleConstants';
import { flex } from '@styleMixin/flex';
import { scroll } from '@styleMixin/scroll';

export const DoctorsPageWrapper = styled.div`
  /* position: relative; */
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* background: linear-gradient(
    45deg,
    ${STYLE_CONSTANTS.COLORS.basil},
    ${STYLE_CONSTANTS.COLORS.moderateTurquoise}
  ); */
`;

export const DoctorsPageNavBar = styled.div`
  width: 160px;
  height: 100%;

  ${flex};
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  overflow: auto;
  ${scroll}
`;

export const DortorsWrapper = styled.div`
  width: 900px;
  height: 95%;
  margin: 0 auto;
  /* overflow: auto; */
  justify-content: space-around;
  flex-wrap: wrap;
  ${flex};
  
  border-radius: 15px;
`;
