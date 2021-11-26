import { STYLE_CONSTANTS } from '@constants/styleConstants';
import styled from 'styled-components';

export const MedCenterWrapper = styled.div`
  width: 100%;
  height: fit-content;
  background: ${STYLE_CONSTANTS.COLORS.white};
  display: flex;
  padding: 20px;
`;

export const MedCentersListWrapper = styled.div`
  width: 400px;
  height: 100%;
`;

export const CenterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 5px 0px ${STYLE_CONSTANTS.COLORS.darkGrey};
  margin-bottom: 20px;
  padding-bottom: 20px;
`;

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 50px;
  position: relative;
  span {
    color: ${STYLE_CONSTANTS.COLORS.blue};
    font-size: ${STYLE_CONSTANTS.FONT_SIZE.large};
  }
`;
