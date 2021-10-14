import styled from 'styled-components';
import { STYLE_CONSTANTS } from '@constants/styleConstants';

export const ProfileWrapper = styled.div`
  width: 850px;
  height: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ProfileInformation = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: ${STYLE_CONSTANTS.SCREEN.laptop}) {
    height: 900px;
    justify-content: center;
  }
`;

export const ProfileFeature = styled.div`
  width: 100%;
  margin-top: 25px;
`;
