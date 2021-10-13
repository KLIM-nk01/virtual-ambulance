import styled from 'styled-components';
import { STYLE_CONSTANTS } from '@constants/styleConstants';

export const FormPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  background: ${STYLE_CONSTANTS.COLORS.lavender};
  overflow: auto;
  padding: 40px;
`;
