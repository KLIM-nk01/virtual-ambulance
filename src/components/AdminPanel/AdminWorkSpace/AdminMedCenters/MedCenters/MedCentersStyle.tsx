import { STYLE_CONSTANTS } from '@constants/styleConstants';
import styled from 'styled-components';

export const MedCenterWrapper = styled.div`
  width: 100%;
  height: fit-content;
  background: ${STYLE_CONSTANTS.COLORS.white};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
`;

export const MedCentersListWrapper = styled.div`
  width: 90%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;

export const CenterWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 5px 0px ${STYLE_CONSTANTS.COLORS.darkGrey};

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

export const MedCentersFormWrapper = styled.div`
  width: 100%;
  height: 400px;
  border: 1px solid blue;
`;

export const MedCentersHeaderWrapper = styled.div``