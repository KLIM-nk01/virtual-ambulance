import styled from 'styled-components';
import { STYLE_CONSTANTS } from '@constants/styleConstants';
import { flex } from '@styleMixin/flex';


export const DirectionWrapper = styled.div`
  width: 130px;
  height: 130px;
  margin: 15px 0;
  ${flex};
  flex-direction: column;
  box-shadow: 0 0 15px ${STYLE_CONSTANTS.COLORS.white};
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s;

  img {
    width: 80%;
  }

  span {
    width: 100%;
    font-size: 14px;
    text-align: center;
  }

  :hover {
    box-shadow: 5px 5px 5px ${STYLE_CONSTANTS.COLORS.darkGrey};
  }
`;
