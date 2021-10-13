import styled from 'styled-components';
import { STYLE_CONSTANTS } from '@constants/styleConstants';

export const DoctorsFeatureWrapper = styled.div`
  position: relative;
  width: 100%;
  border-top: 2px solid ${STYLE_CONSTANTS.COLORS.gray};
  padding: 30px 10px;
  display: flex;
  justify-content: space-around;
  display: flex;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const ContainerName = styled.span`
  position: absolute;
  text-transform: uppercase;
  color: ${STYLE_CONSTANTS.COLORS.blue};
  font-weight: 600;
  top: -15px;
  left: 30px;
  background: ${STYLE_CONSTANTS.COLORS.white};
  padding: 0 20px;
  font-size: ${STYLE_CONSTANTS.FONT_SIZE.large};
`;
