import styled from 'styled-components';
import { STYLE_CONSTANTS } from '@constants/styleConstants';

export const DoctorsPageWrapper = styled.div`
  width: 100%;
  height: 90%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(45deg, ${STYLE_CONSTANTS.COLORS.basil}, ${STYLE_CONSTANTS.COLORS.slateBlue});
`;
