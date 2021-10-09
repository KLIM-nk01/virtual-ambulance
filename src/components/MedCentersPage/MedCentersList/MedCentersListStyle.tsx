import styled from 'styled-components';
import { scroll } from '@styleMixin/scroll';
import { STYLE_CONSTANTS } from '@constants/styleConstants';

interface IProps {
  loading: boolean;
}

export const MedCentersListWrapper = styled.div<IProps>`
  position: relative;
  width: 40%;
  height: 100%;
  background-color: ${STYLE_CONSTANTS.COLORS.smokyWhite};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  overflow: auto;
  padding: 20px 0;
`;
