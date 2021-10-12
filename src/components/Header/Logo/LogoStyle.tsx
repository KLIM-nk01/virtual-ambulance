import styled from 'styled-components';
import { flex } from '@styleMixin/flex';
import { fonts } from '@styleMixin/fonts';
import { STYLE_CONSTANTS } from '@constants/styleConstants';

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

    /* @media (max-width: 768px) {
      display: none;
    } */
  }

  span {
    ${fonts};
    font-family: 'Poppins';
    font-size: ${STYLE_CONSTANTS.FONT_SIZE.medium};
    color: ${STYLE_CONSTANTS.COLORS.white};
  }

  @media (max-width: 768px) {
    width: fit-content;
    align-items: center;
    justify-content: center;
  }
`;

export const LogoStyle = styled.img`
  height: 60px;
`;
