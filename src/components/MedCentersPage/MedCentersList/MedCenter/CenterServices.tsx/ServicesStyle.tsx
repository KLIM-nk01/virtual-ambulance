import styled from 'styled-components';
import { STYLE_CONSTANTS } from '@constants/styleConstants';

interface IServiceProps {
  adminPanel?: boolean;
}

export const CenterServices = styled.div`
  position: relative;
  width: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: ${STYLE_CONSTANTS.COLORS.white};
  margin-bottom: 30px;

  span {
    margin-left: 10px;
    color: ${STYLE_CONSTANTS.COLORS.blue};
    font-size: ${STYLE_CONSTANTS.FONT_SIZE.large};
  }
`;

export const ServicesWrapper = styled.div<IServiceProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 10px;

  ::-webkit-scrollbar {
    width: 0;
  }
  ${({ adminPanel }) =>
    adminPanel &&
    `
    padding: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  `}
`;

export const ServiceItem = styled.div<IServiceProps>`
  width: 100%;
  height: 40px;
  background: ${STYLE_CONSTANTS.COLORS.smokyWhite};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0;
  font-size: ${STYLE_CONSTANTS.FONT_SIZE.little};

  ${({ adminPanel }) =>
    adminPanel &&
    `
    margin: 0;
  `}

  @media (max-width: ${STYLE_CONSTANTS.SCREEN.tablet}) {
    font-size: ${STYLE_CONSTANTS.FONT_SIZE.little};
  }
`;
