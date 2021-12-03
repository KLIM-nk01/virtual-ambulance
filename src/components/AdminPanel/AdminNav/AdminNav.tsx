import React from 'react';
import { ROUTS } from '@constants/routs';
import { AdminNavWrapper, NavLinkStyled } from './AdminNavStyle';

const AdminNav: React.FC = () => {
  return (
    <AdminNavWrapper>
      <NavLinkStyled to={ROUTS.ADMIN_PANEL_MED_CENTERS_LIST}>Medical Centers</NavLinkStyled>
    </AdminNavWrapper>
  );
};

export default AdminNav;
