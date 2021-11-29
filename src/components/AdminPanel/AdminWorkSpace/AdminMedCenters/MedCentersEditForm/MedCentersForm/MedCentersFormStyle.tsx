import styled from 'styled-components';
import { STYLE_CONSTANTS } from '@constants/styleConstants';

export const FormWrapper = styled.div`
  width: 55%;
  height: fit-content;
`;

export const Form = styled.form`
  display: grid;
  grid-template-rows: repeat(1fr);
  row-gap: 15px;
`;

export const FormSelect = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const FormSelectName = styled.span`
  color: ${STYLE_CONSTANTS.COLORS.blue};
  font-size: ${STYLE_CONSTANTS.FONT_SIZE.little};
`;

export const FormButtonBar = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  margin-top: 20px;
  button {
    width: 100%;
  }
`;