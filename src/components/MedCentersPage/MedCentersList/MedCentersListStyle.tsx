import styled from 'styled-components';
import { scroll } from '@styleMixin/scroll';
import { STYLE_CONSTANTS } from '@constants/styleConstants';

export const MedCentersListWrapper = styled.div`
  width: 40%;
  height: 100%;
  background-color: ${STYLE_CONSTANTS.COLORS.smokyWhite};
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: auto;
  padding: 20px 0;
  /* ${scroll}; */
`;
