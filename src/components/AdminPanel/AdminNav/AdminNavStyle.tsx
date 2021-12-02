import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { STYLE_CONSTANTS } from '@constants/styleConstants';

export const AdminNavWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${STYLE_CONSTANTS.COLORS.white};
`;

export const NavLinkStyled = styled(NavLink)`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  &.active {
    border-bottom: 2px solid ${STYLE_CONSTANTS.COLORS.blue};
  }
`;

export const NavLinkItemWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
