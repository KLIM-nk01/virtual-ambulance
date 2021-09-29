import { STYLE_CONSTANTS } from '@constants/styleConstants';
import styled from 'styled-components';

export const AccountWrapper = styled.div`
  width: 850px;
  height: 90%;
  border: 1px solid black;
`;

export const AccountInformation = styled.div`
  width: 100%;
  height: 400px;
  border: 1px solid blue;
  display: flex;
`;

export const PhotoContainer = styled.div`
  width: 30%;
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background: ${STYLE_CONSTANTS.COLORS.white};
  box-shadow: 0px 0px 10px 1px ${STYLE_CONSTANTS.COLORS.gray};
  border-radius: 5px;
  img {
    width: 90%;
  }
  button {
    width: 90%;
    margin: 0;
  }
`;

export const AboutContainer = styled.div`
  width: 65%;
  height: 100%;
  margin: 0 auto;
  padding: 20px;
  background: ${STYLE_CONSTANTS.COLORS.white};
  box-shadow: 0px 0px 10px 1px ${STYLE_CONSTANTS.COLORS.gray};
  border-radius: 5px;
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
  padding-top: 5px;
  display: flex;
`;

export const InfoLabel = styled.div`
  width: 160px;
  border: 1px solid black;
`;

export const DescriptionLabel = styled.div`
  width: 160px;
  border: 1px solid black;
`;
