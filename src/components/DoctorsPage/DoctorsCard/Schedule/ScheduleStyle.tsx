import styled from 'styled-components';
import { scroll } from '@styleMixin/scroll';
import { STYLE_CONSTANTS } from '@constants/styleConstants';

export const ScheduleWrapper = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;

  button {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  @media (max-width: ${STYLE_CONSTANTS.SCREEN.mobileM}) {
    width: 240px;
  }
`;

export const WrapperHeader = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: ${STYLE_CONSTANTS.FONT_SIZE.medium};
    color: ${STYLE_CONSTANTS.COLORS.blue};
  }

  button {
    position: absolute;
    right: 0;
    min-width: 30px;
    width: 30px;
    height: 30px;

    :before,
    :after {
      position: absolute;
      top: 6px;
      left: 13px;
      content: '';
      width: 2px;
      height: 16px;
      background-color: ${STYLE_CONSTANTS.COLORS.blue};
      border-radius: 5px;
    }

    :before {
      transform: rotate(45deg);
    }

    :after {
      transform: rotate(-45deg);
    }
  }
`;

export const ItemWrapper = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  overflow: auto;
  ${scroll};
`;

export const SuccessOrErrorMessage = styled.div`
  margin-top: 30px;
  width: 60%;
  text-align: center;
`;
