import { STYLE_CONSTANTS } from '@constants/styleConstants';
import styled from 'styled-components';
import { Container } from '../ManagementStyle';

export const TimeManagementContainer = styled(Container)`
  width: 35%;
  border-radius: 5px;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const DateTimePickerWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 13px 0 13px;
  position: relative;
  span {
    margin-top: 5px;
    color: ${STYLE_CONSTANTS.COLORS.red};
    font-size: ${STYLE_CONSTANTS.FONT_SIZE.little};
  }
`;

export const AddButton = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid black;
`;
