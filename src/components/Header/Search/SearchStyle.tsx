import styled from 'styled-components';
import { STYLE_CONSTANTS } from '@constants/styleConstants';

export const SearchWrapper = styled.div`
  width: 30%;
  display: none;
  
  @media (max-width: ${STYLE_CONSTANTS.SCREEN.tablet}) {
    display: none;
  }
`;
