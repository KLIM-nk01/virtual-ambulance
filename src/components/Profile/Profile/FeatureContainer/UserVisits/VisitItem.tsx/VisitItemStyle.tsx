import { STYLE_CONSTANTS } from '@constants/styleConstants';
import styled from 'styled-components';

export const VisitItemContainer = styled.div`
  width: 240px;
  height: 255px;

  margin: 0 10px 20px 10px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  box-shadow: 0px 0px 5px 0px ${STYLE_CONSTANTS.COLORS.lightGrey};
  border-radius: 10px;
  padding: 5px 0;
`;

export const ContainerFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  button {
    min-width: 50px;
    font-size: 10px;
  }
`;

export const VisitInformation = styled.div`
  width: 100%;
  height: 100%;
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
  justify-content: space-around;
  margin-top: 10px;
`;

export const TicketInfo = styled.div`
  width: 100px;

  p {
    font-size: ${STYLE_CONSTANTS.FONT_SIZE.veryLittle};
  }
`;
export const Date = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  span {
    font-weight: 600;
    font-size: ${STYLE_CONSTANTS.FONT_SIZE.veryLittle};
  }
`;

export const DoctorsInformation = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  margin: 0 10px;
  margin-top: 10px;
  img {
    height: 100%;
    width: 60px;
  }
`;

export const DoctorsDirection = styled.span`
  font-size: ${STYLE_CONSTANTS.FONT_SIZE.little};
`;
export const DoctorsName = styled.span`
  font-size: ${STYLE_CONSTANTS.FONT_SIZE.little};
`;
export const DoctorsСabinet = styled.span`
  font-weight: 600;
`;