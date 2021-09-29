import styled from 'styled-components';
import { scroll } from '@styleMixin/scroll';

export const ServicesPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
`;

export const ServicesContainer = styled.div`
  max-width: 1130px;
  width: 75%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0;
`;
