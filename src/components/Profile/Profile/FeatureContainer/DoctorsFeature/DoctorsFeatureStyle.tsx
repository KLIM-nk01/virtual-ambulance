import { STYLE_CONSTANTS } from '@constants/styleConstants';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  border-top: 2px solid ${STYLE_CONSTANTS.COLORS.gray};
  padding: 25px 10px;
  display: flex;
`;

export const ContainerName = styled.span`
  position: absolute;
  text-transform: uppercase;
  color: ${STYLE_CONSTANTS.COLORS.blue};
  font-weight: 600;
  top: -15px;
  left: 30px;
  background: ${STYLE_CONSTANTS.COLORS.white};
  padding: 0 20px;
  font-size: ${STYLE_CONSTANTS.FONT_SIZE.large};
`;