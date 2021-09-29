import { STYLE_CONSTANTS } from '@constants/styleConstants';
import styled from 'styled-components';

export const Container = styled.div`
  width: 67%;
  height: 100%;
  padding: 20px;
  background: ${STYLE_CONSTANTS.COLORS.white};
  box-shadow: 0px 0px 10px 1px ${STYLE_CONSTANTS.COLORS.gray};
  border-radius: 5px;
  margin-left: 25px;
`;

export const UserName = styled.div`
  height: 60px;
  width: 100%;

  border-bottom: 1px solid ${STYLE_CONSTANTS.COLORS.gray};
  span {
    color: ${STYLE_CONSTANTS.COLORS.black};
    font-size: ${STYLE_CONSTANTS.FONT_SIZE.veryLarge};
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
`;

export const DescriptionLabel = styled.span`
  width: fit-content;
  font-size: ${STYLE_CONSTANTS.FONT_SIZE.small};
  display: flex;
  align-items: center;
  color: ${STYLE_CONSTANTS.COLORS.black};
`;
