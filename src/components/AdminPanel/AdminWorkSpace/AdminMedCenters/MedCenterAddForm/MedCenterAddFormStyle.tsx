import { STYLE_CONSTANTS } from '@constants/styleConstants';
import styled from 'styled-components';

export const MedCenterAddFormWrapper = styled.form`
  width: 350px;
  height: 100%;

  min-height: 300px;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 5px;
  background: ${STYLE_CONSTANTS.COLORS.white};
  border-right: 10px solid ${STYLE_CONSTANTS.COLORS.blue};
  box-shadow: 0px 0px 20px 5px ${STYLE_CONSTANTS.COLORS.gray};
  margin-right: 20px;
`;
