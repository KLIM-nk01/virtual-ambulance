import styled from 'styled-components';
import { STYLE_CONSTANTS } from '../../constants/styleConstants';

export const HeaderWrapper = styled.div`
  height: 10%;
  width: 100%;
  background-color: inherit;
  color: ${STYLE_CONSTANTS.COLORS.white};
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(
    45deg,
    ${STYLE_CONSTANTS.COLORS.basil},
    ${STYLE_CONSTANTS.COLORS.slateBlue}
  );
`;

export const HeaderContainerStyle = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
