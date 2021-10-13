import styled from 'styled-components';
import { STYLE_CONSTANTS } from '@constants/styleConstants';

interface IScheduleItem {
  enable?: boolean;
}

export const ScheduleItem = styled.div<IScheduleItem>`
  width: 170px;
  height: 70px;
  margin: 10px;
  border: 1px solid ${STYLE_CONSTANTS.COLORS.blue};
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 10px;
  cursor: pointer;
  transition: 0.5s;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px ${STYLE_CONSTANTS.COLORS.darkGrey};
  background: ${({ enable }) => enable && STYLE_CONSTANTS.COLORS.whiteGrey};
  span {
    font-size: ${STYLE_CONSTANTS.COLORS.black};
    font-family: ${STYLE_CONSTANTS.FONT_SIZE.medium};
  }
  :hover {
    background: ${STYLE_CONSTANTS.COLORS.whiteGrey};
  }
`;
