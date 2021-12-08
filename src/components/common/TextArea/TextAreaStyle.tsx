import { STYLE_CONSTANTS } from '@constants/styleConstants';
import styled from 'styled-components';

export const TextAreaWrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  `;

export const TextAreaContainer = styled.textarea`
  resize: none;
  width: 100%;
  height: 100%;
  padding: 15px;

  border: 1px solid ${STYLE_CONSTANTS.COLORS.gray};
  border-radius: 10px;

  :focus {
    border: 1px solid ${STYLE_CONSTANTS.COLORS.blue};
  }
`;

export const TextAreaLabel = styled.label`
  color: ${STYLE_CONSTANTS.COLORS.blue};
  font-size: ${STYLE_CONSTANTS.FONT_SIZE.little};
  margin-bottom: 5px;
`;
