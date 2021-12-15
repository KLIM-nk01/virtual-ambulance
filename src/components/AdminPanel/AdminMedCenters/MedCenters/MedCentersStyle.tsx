import { NavLink } from 'react-router-dom';
import { STYLE_CONSTANTS } from '@constants/styleConstants';
import styled from 'styled-components';

export const MedCenterWrapper = styled.div`
  width: 90%;
  height: fit-content;
  background: ${STYLE_CONSTANTS.COLORS.white};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;

  @media (max-width: ${STYLE_CONSTANTS.SCREEN.laptop}) {
    width: 100%;
    padding: 0;
  }
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

  @media (max-width: ${STYLE_CONSTANTS.SCREEN.tablet}) {
    width: 100%;
    margin-top: 10px;
  }
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

  @media (max-width: ${STYLE_CONSTANTS.SCREEN.tablet}) {
    width: 150px;
    margin-left: 20px;
    font-size: ${STYLE_CONSTANTS.FONT_SIZE.little};
  }
`;
