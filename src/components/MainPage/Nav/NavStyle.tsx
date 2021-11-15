import styled from 'styled-components';
import { STYLE_CONSTANTS } from '@constants/styleConstants';
import { flex } from '@styleMixin/flex';

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  a {
    display: block;
    height: 60%;
    min-height: 300px;
    text-decoration: none;
    color: ${STYLE_CONSTANTS.COLORS.white};
  }

  @media (max-width: ${STYLE_CONSTANTS.SCREEN.tablet}) {
    height: fit-content;
    align-items: flex-start;
    flex-direction: column;
    margin: 20px;

    a {
      height: 325px;
      margin-bottom: 20px;
    }
  }
`;

export const NavItem = styled.div`
  width: 220px;
  height: 100%;
  padding-bottom: 5px;
  transition: 0.5s;
  background: ${STYLE_CONSTANTS.COLORS.lavender};
  ${flex};
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 20px;
  box-shadow: 0px 0px 15px 1px ${STYLE_CONSTANTS.COLORS.darkGrey};
  border-radius: 5px;

  img {
    margin-top: 30px;
    width: 130px;
    height: 130px;
  }

  span {
    margin-top: 30px;
    font-size: 20px;
    color: ${STYLE_CONSTANTS.COLORS.blue};
    text-align: center;
    font-weight: 600;
    height: 65px;
  }
  
  p {
    margin-top: 20px;
    width: 95%;
    font-size: ${STYLE_CONSTANTS.FONT_SIZE.little};
    color: ${STYLE_CONSTANTS.COLORS.darkGrey};
    text-align: center;
  }

  :hover {
    box-shadow: 0px 0px 15px 1px ${STYLE_CONSTANTS.COLORS.darkGrey};
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;
