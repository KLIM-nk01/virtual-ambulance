import styled from 'styled-components';
import { STYLE_CONSTANTS } from '@constants/styleConstants';
import { flex } from '@styleMixin/flex';
import { scroll } from '@styleMixin/scroll';

export const DoctorsPageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: linear-gradient(
    45deg,
    ${STYLE_CONSTANTS.COLORS.basil},
    ${STYLE_CONSTANTS.COLORS.moderateTurquoise}
  );
`;

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 14%;
  height: 100%;

  ${flex};
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  overflow: auto;
  ${scroll}
`;
