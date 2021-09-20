import styled from 'styled-components';
import { flex } from '../../../style/flex';
import { fonts } from '../../../style/fonts';
import { STYLE_CONSTANTS } from '../../../constants/styleConstants';

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
    font-family: 'Parisienne', cursive;
    font-size: 24px;
    color: ${STYLE_CONSTANTS.COLORS.white};
  }

  :hover {
    box-shadow: 5px 5px 5px ${STYLE_CONSTANTS.COLORS.darkGrey};
  }
`;

export const LogoStyle = styled.img`
  height: 60px;
`;
