import styled from 'styled-components';
import { scroll } from '../../../style/scroll';
import { STYLE_CONSTANTS } from '../../../constants/styleConstants';

export const MedCentersListWrapper = styled.div`
  width: 40%;
  height: 100%;
  background-color: ${STYLE_CONSTANTS.COLORS.smokyWhite};

  overflow: auto;
  ${scroll};
`;
