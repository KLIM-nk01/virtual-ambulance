import { STYLE_CONSTANTS } from '@constants/styleConstants';
import styled from 'styled-components';

export const Container = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  padding: 10px 0;
  align-items: center;
  flex-direction: column;
  background: ${STYLE_CONSTANTS.COLORS.white};
  box-shadow: 0px 0px 10px 1px ${STYLE_CONSTANTS.COLORS.gray};
  border-radius: 5px;
  img {
    width: 90%;
    height: 230px;
    border: 2px solid ${STYLE_CONSTANTS.COLORS.gray};
    border-radius: 5px;
  }
  button {
    width: 90%;
    margin-top: 30px;
  }
`;
