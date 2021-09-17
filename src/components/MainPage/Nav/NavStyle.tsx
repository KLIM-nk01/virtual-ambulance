import styled from 'styled-components';
import { flex } from '../../../style/flex';
import { STYLE_CONSTANTS } from '../../../constants/styleConstants';

export const NavWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;

  a {
    text-decoration: none;
    color: ${STYLE_CONSTANTS.COLORS.white};
  }
`;

export const NavItem = styled.div`
  width: 300px;
  height: 300px;
  box-shadow: 0 0 15px ${STYLE_CONSTANTS.COLORS.white};
  padding-bottom: 5px;
  transition: 0.5s;

  ${flex};
  flex-direction: column;

  border-radius: 15px;

  img {
    height: 85%;
  }

  span {
    font-size: 20px;
    color: ${STYLE_CONSTANTS.COLORS.white};
  }

  :hover {
    box-shadow: 0.4em 0.4em 5px ${STYLE_CONSTANTS.COLORS.darkGrey};
  }
`;
