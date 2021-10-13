import { STYLE_CONSTANTS } from '@constants/styleConstants';
import styled from 'styled-components';

export const Container = styled.div`
  width: 255px;
  height: 300px;
  padding: 10px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background: ${STYLE_CONSTANTS.COLORS.white};
  box-shadow: 0px 0px 10px 1px ${STYLE_CONSTANTS.COLORS.gray};
  border-radius: 5px;
  @media (max-width: 900px) {
    display: none;
    
  }
  img {
    max-width: 90%;
    height: 230px;
    border: 2px solid ${STYLE_CONSTANTS.COLORS.gray};
    border-radius: 5px;
  }

  button {
    width: 90%;
    margin-top: 30px;
  }
`;
