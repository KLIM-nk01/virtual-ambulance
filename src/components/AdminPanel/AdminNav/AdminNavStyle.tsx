import { STYLE_CONSTANTS } from '@constants/styleConstants';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AdminNavWrapper = styled.div`
  width: 240px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${STYLE_CONSTANTS.COLORS.white};
`;

export const NavLinkStyled = styled(NavLink)`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${STYLE_CONSTANTS.COLORS.blue};

  &.active {
    border-left: 5px solid ${STYLE_CONSTANTS.COLORS.blue};
  }
`;

export const NavLinkItemWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
