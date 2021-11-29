import { STYLE_CONSTANTS } from '@constants/styleConstants';
import { NavLink } from 'react-router-dom';
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
`;

export const MedCentersHeaderWrapper = styled.div`
  width: 100%;
  height: 65px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
`;

export const MedCentersHeaderSearch = styled.div`
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-size: ${STYLE_CONSTANTS.FONT_SIZE.little};
  }
`;

export const CreateNewOrEditLink = styled(NavLink)`
  padding-top: 10px;
  :hover {
    color: ${STYLE_CONSTANTS.COLORS.blue};
  }
`;
