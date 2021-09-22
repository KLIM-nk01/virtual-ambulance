import styled from 'styled-components';
import { scroll } from '@styleMixin/scroll';

export const ServicesPageWrapper = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ServicesContainer = styled.div`
  max-width: 1130px;
  width: 75%;
  max-height: 90%;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  ${scroll};
`;
