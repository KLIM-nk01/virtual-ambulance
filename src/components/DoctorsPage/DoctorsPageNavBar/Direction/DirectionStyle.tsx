import styled from 'styled-components';
import { STYLE_CONSTANTS } from '@constants/styleConstants';

interface IDirectionWrapperProps {
  enable: boolean;
}

export const DirectionWrapper = styled.div<IDirectionWrapperProps>`
  min-width: 100px;
  width: 100px;
  height: 100px;
  box-shadow: 0px 0px 5px 1px ${STYLE_CONSTANTS.COLORS.darkGrey};
  margin: 0 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  background: ${STYLE_CONSTANTS.COLORS.gray};

  img {
    width: 65%;
  }

  span {
    width: 100%;
    font-size: 11px;
    text-align: center;

    color: ${STYLE_CONSTANTS.COLORS.darkBlue};
  }

  :hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }

  ${({ enable }) =>
    enable &&
    `
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
    border: 1px solid ${STYLE_CONSTANTS.COLORS.blue};
    :hover {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }
  `}
`;
