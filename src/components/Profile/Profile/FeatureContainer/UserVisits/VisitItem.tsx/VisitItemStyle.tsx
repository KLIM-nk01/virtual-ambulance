import styled from 'styled-components';
import { STYLE_CONSTANTS } from '@constants/styleConstants';

export const VisitItemContainer = styled.div`
  width: 240px;
  height: 190px;
  margin: 0 10px 20px 10px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  box-shadow: 0px 0px 5px 0px ${STYLE_CONSTANTS.COLORS.lightGrey};
  border-radius: 5px;
  padding: 5px 0;

  @media (max-width: ${STYLE_CONSTANTS.SCREEN.mobileL}) {
    width: 100%;
  }
`;

export const ContainerFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    min-width: 50px;
    font-size: ${STYLE_CONSTANTS.FONT_SIZE.little};
    margin-bottom: 5px;
    margin-right: 10px;
  }
`;

export const VisitInformation = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const MedCenterInformation = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;

  h2 {
    font-size: ${STYLE_CONSTANTS.FONT_SIZE.medium};
    font-weight: 600;
  }

  p {
    color: ${STYLE_CONSTANTS.COLORS.lightGrey};
    font-size: ${STYLE_CONSTANTS.FONT_SIZE.little};
  }
`;

export const GeneralInformation = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
  margin-top: 10px;
`;

export const Date = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  span {
    font-size: ${STYLE_CONSTANTS.FONT_SIZE.little};
  }
`;

export const DoctorsInformation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  margin: 10px;

  img {
    height: 100%;
    width: 60px;
  }
`;

export const DoctorsInfo = styled.span`
  margin: 0;
  font-size: ${STYLE_CONSTANTS.FONT_SIZE.little};
`;

export const DoctorsСabinet = styled.span`
  font-weight: 600;
`;
