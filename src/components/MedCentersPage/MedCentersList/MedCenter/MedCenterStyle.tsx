import styled from 'styled-components';
import { STYLE_CONSTANTS } from '../../../../constants/styleConstants';

export const MedCenterItem = styled.div`
  width: 90%;
  height: 250px;
  margin: 20px auto;
  background-color: white;
  border-radius: 15px;
`;

export const MedcenterName = styled.span`
  color: ${STYLE_CONSTANTS.COLORS.black};
`;

export const MedcenterPhoto = styled.img`
  width: 100%;
  height: 70%;
  border: 1px solid ${STYLE_CONSTANTS.COLORS.black};
`;
