import styled from 'styled-components';
import { STYLE_CONSTANTS } from '@constants/styleConstants';

export const CenterStaff = styled.div`
  position: relative;
  width: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: ${STYLE_CONSTANTS.COLORS.white};
  margin-bottom: 30px;
  span {
    margin-left: 10px;
    color: ${STYLE_CONSTANTS.COLORS.blue};
    font-size: ${STYLE_CONSTANTS.FONT_SIZE.large};
  }
`;

export const StaffWrapper = styled.div`
  width: 100%;
  /* height: 180px; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  padding: 0 10px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const StaffItem = styled.div`
  width: 45%;
  height: 40px;
  background: ${STYLE_CONSTANTS.COLORS.smokyWhite};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0;
`;
