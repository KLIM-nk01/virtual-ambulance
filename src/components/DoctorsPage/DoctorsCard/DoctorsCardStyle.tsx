import styled from 'styled-components';
import { STYLE_CONSTANTS } from '@constants/styleConstants';

export const Card = styled.div`
  width: 450px;
  height: 300px;
  margin: 20px 10px;

  border-radius: 15px;
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
  button {
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 0;
  }
`;

const Title = styled.span`
  font-size: ${STYLE_CONSTANTS.FONT_SIZE.large};
  font-weight: 700;
`;
const Subtitle = styled.span`
  color: ${STYLE_CONSTANTS.COLORS.pearl};
  font-size: ${STYLE_CONSTANTS.FONT_SIZE.little};
`;

export const NameSurname = styled(Title)``;
export const DoctorsDirection = styled(Title)``;

export const Expiriens = styled(Subtitle)`
  margin-bottom: 10px;
`;
export const Reviews = styled(Subtitle)``;
export const DegreeScience = styled(Subtitle)``;
export const Description = styled(Subtitle)``;
