import styled from 'styled-components';
// import { flex } from '@styleMixin/flex';
import { scroll } from '@styleMixin/scroll';
import { flex } from '@styleMixin/flex';
import { STYLE_CONSTANTS } from '@constants/styleConstants';

interface IContainer {
  width?: string;
}

export const AccountContainer = styled.div`
  width: 850px;
  height: 90%;
  ${scroll}
  overflow: auto;
`;

export const InformationContainer = styled.div`
  width: 100%;
  height: 50%;
  border: 1px solid black;
  ${flex};
  justify-content: flex-start;
`;

export const ContainerOne = styled.div<IContainer>`
  width: fit-content;
  height: fit-content;
  ${flex};
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;

  background: ${STYLE_CONSTANTS.COLORS.white};

  box-shadow: 0 0 5px ${STYLE_CONSTANTS.COLORS.darkGrey};
`;

export const ContainerTwo = styled.div<IContainer>`
  width: ${({ width }) => width};
  height: fit-content;
  margin-left: 20px;
  ${flex};
  flex-direction: column;
  background: ${STYLE_CONSTANTS.COLORS.white};
  box-shadow: 0 0 5px ${STYLE_CONSTANTS.COLORS.darkGrey};
`;

export const PossibilitiesContainer = styled.div`
  width: 100%;
  height: 60%;
  border: 1px solid black;
`;

export const AccountAvatar = styled.img`
  width: 180px;
  height: 250px;
  margin-bottom: 20px;
  box-shadow: 0 0 5px ${STYLE_CONSTANTS.COLORS.darkGrey};
`;
