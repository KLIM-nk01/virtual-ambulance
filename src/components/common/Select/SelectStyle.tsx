import { STYLE_CONSTANTS } from '@constants/styleConstants';
import styled from 'styled-components';

export const SelectWrapper = styled.select`
  width: 100%;
  height: 40px;
  padding: 10px;
  :focus {
    outline: 0;
    /* border-color: ${STYLE_CONSTANTS.COLORS.blue}; */
    margin-bottom: 10px;
  }
`;

export const OptionsWrapper = styled.option`
    width: 100px;
`;
