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
  div {
    background: ${STYLE_CONSTANTS.COLORS.white};
    box-shadow: 0px 0px 10px 1px ${STYLE_CONSTANTS.COLORS.gray};
    border-radius: 5px;
  }
`;

export const PhotoContainer = styled.div`
  width: 30%;
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

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
`;
