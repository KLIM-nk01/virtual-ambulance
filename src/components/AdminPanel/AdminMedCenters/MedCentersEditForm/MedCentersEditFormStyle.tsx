import styled from 'styled-components';
import { STYLE_CONSTANTS } from '@constants/styleConstants';

export const MedCentersEditFormWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormName = styled.span`
  color: ${STYLE_CONSTANTS.COLORS.blue};
  font-size: ${STYLE_CONSTANTS.FONT_SIZE.medium};
  margin-bottom: 10px;
`;

export const MedCentersFormWrapper = styled.div`
  width: 600px;
  height: fit-content;
  background: ${STYLE_CONSTANTS.COLORS.white};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
`;
