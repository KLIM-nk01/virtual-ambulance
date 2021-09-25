import styled from 'styled-components';
import { STYLE_CONSTANTS } from '@constants/styleConstants';
import { flex } from '@styleMixin/flex';

export const MedCenterItem = styled.div`
  width: 90%;
  height: fit-content;

  margin: 20px auto;
  background-color: ${STYLE_CONSTANTS.COLORS.white};
  border-radius: 15px;

  padding: 15px;
  box-shadow: 0px 0px 5px 1px ${STYLE_CONSTANTS.COLORS.darkGrey};

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  div {
    margin: 5px 0;
  }
`;

export const Title = styled.span`
  font-size: ${STYLE_CONSTANTS.FONT_SIZE.large};
  color: ${STYLE_CONSTANTS.COLORS.black};
  font-weight: 600;
`;

export const SubTitle = styled.span`
  font-size: ${STYLE_CONSTANTS.FONT_SIZE.little};
  color: ${STYLE_CONSTANTS.COLORS.darkGrey};
  font-weight: 500;
`;

export const ItemHeader = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
`;

export const ItemPhoto = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  border: 1px solid ${STYLE_CONSTANTS.COLORS.darkGrey};
  img {
    width: 100%;
  }
  overflow: hidden;
`;

export const ItemDescription = styled.div`
  width: 100%;
  p {
    color: ${STYLE_CONSTANTS.COLORS.darkGrey};
  }
`;

export const ItemButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
