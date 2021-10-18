import { STYLE_CONSTANTS } from '@constants/styleConstants';
import styled from 'styled-components';

interface IProps {
  active: boolean;
}

export const ModalWrapper = styled.div<IProps>`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  ${(props) =>
    props.active &&
    `opacity: 1; 
     pointer-events: all;`}
  transform: 0.5s;
`;

export const ModalContent = styled.div`
  position: relative;
  padding: 20px;
  border-radius: 15px;
  background: ${STYLE_CONSTANTS.COLORS.white};
`;

export const CloseButton = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  position: relative;
  z-index: 1;
  cursor: pointer;

  :after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    background: ${STYLE_CONSTANTS.COLORS.white};
    z-index: 1;
    transition: all 0.3s cubic-bezier(0.77, 0, 0.2, 0.85);
    transform: scale(0.01);
    :hover {
      transform: scale(1);
    }
  }

  :before {
    content: '+';
    color: ${STYLE_CONSTANTS.COLORS.white};
    position: absolute;
    z-index: 2;
    transform: rotate(45deg);
    font-size: 50px;
    line-height: 1;
    top: -235px;
    left: 5px;
    transition: all 0.3s cubic-bezier(0.77, 0, 0.2, 0.85);
    :hover {
      transform: scale(0.8) rotate(45deg);
      color: #fff;
    }
  }
`;
