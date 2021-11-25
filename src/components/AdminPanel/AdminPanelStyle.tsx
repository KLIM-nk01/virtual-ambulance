import styled from 'styled-components';
import { STYLE_CONSTANTS } from '@constants/styleConstants';

export const AdminPanelWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${STYLE_CONSTANTS.COLORS.lavender};
  overflow: auto;
  color: ${STYLE_CONSTANTS.COLORS.black};
`;
