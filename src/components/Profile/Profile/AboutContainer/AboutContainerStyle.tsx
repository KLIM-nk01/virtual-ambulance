import styled from 'styled-components';
import { STYLE_CONSTANTS } from '@constants/styleConstants';

export const Container = styled.div`
  width: 67%;
  height: fit-content;
  padding: 20px;
  background: ${STYLE_CONSTANTS.COLORS.white};
  box-shadow: 0px 0px 10px 1px ${STYLE_CONSTANTS.COLORS.gray};
  border-radius: 5px;
  @media (max-width: ${STYLE_CONSTANTS.SCREEN.laptop}) {
    width: 100%;
  }
`;

export const UserName = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  border-bottom: 1px solid ${STYLE_CONSTANTS.COLORS.gray};
  padding-bottom: 10px;

  img {
    width: 100px;
    margin-right: 10px;
    @media (min-width: ${STYLE_CONSTANTS.SCREEN.laptop}) {
      display: none;
    }
  }

  span {
    color: ${STYLE_CONSTANTS.COLORS.black};
    font-size: ${STYLE_CONSTANTS.FONT_SIZE.veryLarge};
    margin-right: 5px;
  }
`;

export const AboutUser = styled.div`
  width: 100%;
`;

export const ProfileInfoRow = styled.div`
  width: 100%;
  height: 50px;
  padding-top: 5px;
  display: flex;
`;

export const InfoLabel = styled.span`
  width: 160px;
  display: flex;
  align-items: center;

  font-size: ${STYLE_CONSTANTS.FONT_SIZE.medium};
  color: ${STYLE_CONSTANTS.COLORS.lightGrey};
  @media (max-width: ${STYLE_CONSTANTS.SCREEN.laptop}) {
    width: 75px;
    font-size: ${STYLE_CONSTANTS.FONT_SIZE.little};
  }
`;

export const DescriptionLabel = styled.span`
  width: fit-content;
  font-size: ${STYLE_CONSTANTS.FONT_SIZE.small};
  display: flex;
  align-items: center;
  color: ${STYLE_CONSTANTS.COLORS.black};
  @media (max-width: ${STYLE_CONSTANTS.SCREEN.laptop}) {
    font-size: ${STYLE_CONSTANTS.FONT_SIZE.little};
  }
`;
