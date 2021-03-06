import styled from 'styled-components';
import { STYLE_CONSTANTS } from '@constants/styleConstants';

interface IBurgerMenu {
  menuActive: boolean;
}

export const BurgerMenuWrapper = styled.div<IBurgerMenu>`
  width: 30px;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 80px;
  right: 0;

  transform: ${(props) => (!props.menuActive ? 'translateX(-130%);' : 'translateX(0);')};
  transition: all 0.2s;
  display: none;
  @media (max-width: ${STYLE_CONSTANTS.SCREEN.tablet}) {
    display: flex;
  }
`;

export const MenuHeader = styled.div`
  width: 100%;
  padding: 10px;
  font-size: ${STYLE_CONSTANTS.FONT_SIZE.large};
  color: ${STYLE_CONSTANTS.COLORS.blue};
  border-bottom: 1px solid ${STYLE_CONSTANTS.COLORS.blue};
  text-align: center;
`;

export const BurgerMenuContent = styled.div`
  z-index: 1;
  width: 30%;
  height: 100%;
  background: ${STYLE_CONSTANTS.COLORS.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.2s;

  a {
    width: 100%;
  }

  button {
    width: 100%;
    margin: 0;
  }

  @media (max-width: ${STYLE_CONSTANTS.SCREEN.tablet}) {
    width: 100%;
  }
`;

export const BurgerButtonWrapper = styled.div`
  display: none;
  width: 20px;
  height: 20px;
  position: absolute;
  cursor: pointer;
  left: 0;
  :before,
  :after,
  span {
    position: absolute;
    content: '';
    width: 20px;
    background-color: ${STYLE_CONSTANTS.COLORS.white};
    height: 2px;
    border: 50px;
  }

  :before {
    top: 0;
  }

  span {
    top: 9px;
  }

  :after {
    bottom: 0;
  }

  @media (max-width: ${STYLE_CONSTANTS.SCREEN.tablet}) {
    display: block;
  }
`;
