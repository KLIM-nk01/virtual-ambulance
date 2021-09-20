import styled from 'styled-components';
import { STYLE_CONSTANTS } from '../../../../constants/styleConstants';
import { flex } from '../../../../style/flex';

export const MedCenterItem = styled.div`
  width: 90%;
  height: 300px;
  margin: 20px auto;
  background-color: ${STYLE_CONSTANTS.COLORS.white};
  border-radius: 15px;
  ${flex};
  flex-direction: column;
  padding: 15px;
  box-shadow: 5px 5px 5px ${STYLE_CONSTANTS.COLORS.darkGrey};
`;

export const MedcenterName = styled.div`
  color: ${STYLE_CONSTANTS.COLORS.black};
  font-size: ${STYLE_CONSTANTS.FONT_SIZE.large};
  font-weight: 700;
  width: 100%;
`;

export const MedcenterAddress = styled(MedcenterName)`
  color: ${STYLE_CONSTANTS.COLORS.black};
  font-size: ${STYLE_CONSTANTS.FONT_SIZE.small};
  font-weight: 400;
`;

export const Container = styled.div`
  width: 100%;
  height: 70%;
  ${flex};
  flex-direction: column;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  ${flex};
`;

export const PhotoCard = styled.div`
  width: 70px;
  height: 70px;
  border: 1px solid ${STYLE_CONSTANTS.COLORS.black};
`;

export const Description = styled.span`
  color: ${STYLE_CONSTANTS.COLORS.black};
`;
