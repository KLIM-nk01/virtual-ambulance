import styled from 'styled-components';
import { STYLE_CONSTANTS } from '@constants/styleConstants';

export const ButtonsWrapper = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${STYLE_CONSTANTS.SCREEN.tablet}) {
    margin: 10px 0;
    flex-direction: column;

    a {
      display: block;
      margin: 10px 0;
    }
  }
`;
