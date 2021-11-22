import styled from 'styled-components';
import { Container } from '../ManagementStyle';

export const OrderManagementContainer = styled(Container)`
  width: 60%;
  border-radius: 5px;
  
  @media (max-width: 900px) {
    width: 100%;
  }
`;
