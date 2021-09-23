import styled from 'styled-components';
import { STYLE_CONSTANTS } from '@constants/styleConstants';
import { flex } from '@styleMixin/flex';

export const ServiceItem = styled.div`
  width: 277px;
  height: 240px;
  display: flex;
  padding: 15px;
  height: fit-content;
`;

export const DirectionIcone = styled.div`
  width: 25px;
  height: 25px;
  ${flex}
  justify-content: center;
  border-radius: 50px;
  background: ${STYLE_CONSTANTS.COLORS.moderateTurquoise};

  font-size: ${STYLE_CONSTANTS.FONT_SIZE.little};
`;

export const ServiceDirection = styled.div`
  width: 85%;
  display: flex;
  margin-left: 10px;
  flex-direction: column;
`;

export const DirectionName = styled.span`
  font-size: ${STYLE_CONSTANTS.FONT_SIZE.small};
  color: ${STYLE_CONSTANTS.COLORS.black};
  margin-bottom: 5px;
  cursor: pointer;
  :hover {
    color: ${STYLE_CONSTANTS.COLORS.moderateTurquoise};
  }
`;

export const DirectionCategories = styled.div`
  width: 100%;
  ${flex};
  flex-direction: column;
  justify-content: flex-start;
`;

export const Category = styled.span`
  width: 100%;
  height: fit-content;
  color: ${STYLE_CONSTANTS.COLORS.gray};
  display: flex;
  align-items: center;
  font-size: ${STYLE_CONSTANTS.FONT_SIZE.little};
  cursor: pointer;
  margin-bottom: 20px;
  :hover {
    color: ${STYLE_CONSTANTS.COLORS.moderateTurquoise};
  }
`;
