import styled from 'styled-components';
import { STYLE_CONSTANTS } from '@constants/styleConstants';
import { flex } from '@styleMixin/flex';

export const DirectionWrapper = styled.div`
  width: 130px;
  height: 130px;
  margin: 15px 0;
  ${flex};
  box-shadow: 5px 5px 5px ${STYLE_CONSTANTS.COLORS.darkGrey};
  flex-direction: column;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s;
  /* background: ${STYLE_CONSTANTS.COLORS.smokyWhite}; */
  background: #e7e4e4;
  img {
    width: 80%;
  }

  span {
    width: 100%;
    font-size: 14px;
    text-align: center;
    height: 50px;
    color: black;
  }

  :hover {
    box-shadow: 3px 3px 3px ${STYLE_CONSTANTS.COLORS.white};
  }
`;
