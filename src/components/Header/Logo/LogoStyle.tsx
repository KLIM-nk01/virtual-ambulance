import styled from 'styled-components';
import { STYLE_CONSTANTS } from '@constants/styleConstants';
import { flex } from '@styleMixin/flex';
import { fonts } from '@styleMixin/fonts';

export const Container = styled.div`
  width: 180px;
  height: 100%;
  padding: 0 5px;
  ${flex};
  border-bottom: 1px solid inherit;
  transition: 0.5s;
  border-radius: 25px;

  div {
    ${flex};
    flex-direction: column;
  }

  span {
    ${fonts};
    font-family: 'Poppins';
    font-size: ${STYLE_CONSTANTS.FONT_SIZE.medium};
    color: ${STYLE_CONSTANTS.COLORS.white};
  }

  @media (max-width: ${STYLE_CONSTANTS.SCREEN.tablet}) {
    width: fit-content;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 40%;
    top: 0;
  }
  
  @media (max-width: ${STYLE_CONSTANTS.SCREEN.mobileL}) {
    left: 30%;
  }
`;

export const LogoStyle = styled.img`
  height: 60px;
`;
