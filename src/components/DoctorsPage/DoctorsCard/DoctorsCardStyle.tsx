import styled from 'styled-components';
import { STYLE_CONSTANTS } from '@constants/styleConstants';

export const Card = styled.div`
  width: 388px;
  height: 300px;
  margin: 20px 20px;

  border-radius: 5px;
  display: flex;
  background: ${STYLE_CONSTANTS.COLORS.smokyWhite};
  color: ${STYLE_CONSTANTS.COLORS.black};
  padding: 15px;
  box-shadow: 0px 0px 15px 0px ${STYLE_CONSTANTS.COLORS.darkGrey};
  transition: 0.5s;

  :hover {
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05);
  }

  @media (max-width: ${STYLE_CONSTANTS.SCREEN.mobileM}) {
    width: 280px;
    height: fit-content;
  }
`;

export const ContainerOne = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-right: 10px;

  img {
    width: 120px;
    margin-bottom: 10px;
  }
`;

export const ContainerTwo = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  padding-bottom: 50px;

  button {
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 0;
  }
`;

export const Experience = styled.span`
  color: ${STYLE_CONSTANTS.COLORS.pearl};
  font-size: ${STYLE_CONSTANTS.FONT_SIZE.little};
  margin-bottom: 10px;
`;

export const NameSurname = styled.span`
  color: ${STYLE_CONSTANTS.COLORS.pearl};
  font-size: ${STYLE_CONSTANTS.FONT_SIZE.large};
  font-weight: 700;
`;

export const DoctorsDirection = styled.span`
  color: ${STYLE_CONSTANTS.COLORS.pearl};
  font-size: ${STYLE_CONSTANTS.FONT_SIZE.small};
  font-weight: 700;
`;

export const Reviews = styled.span`
  margin-bottom: 10px;
`;

export const DegreeScience = styled.span`
  margin-bottom: 10px;
`;

export const Description = styled.div`
  color: ${STYLE_CONSTANTS.COLORS.pearl};
  font-size: ${STYLE_CONSTANTS.FONT_SIZE.little};
`;
