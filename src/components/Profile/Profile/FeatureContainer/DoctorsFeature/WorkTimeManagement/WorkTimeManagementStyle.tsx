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
  padding: 10px;
  position: relative;
  button {
    width: 100%;
    margin-top: 10px;
  }
`;

export const AddButton = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid black;
`;
