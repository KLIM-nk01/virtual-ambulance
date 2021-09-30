import { STYLE_CONSTANTS } from '@constants/styleConstants';
import styled from 'styled-components';

export const Container = styled.div`
  background: ${STYLE_CONSTANTS.COLORS.white};
  box-shadow: 0px 0px 10px 1px ${STYLE_CONSTANTS.COLORS.gray};
  border-radius: 5px;
  padding: 20px;
`;
