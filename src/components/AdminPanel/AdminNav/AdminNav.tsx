import React, { useState } from 'react';
import { AdminNavWrapper, NavLinkStyled } from './AdminNavStyle';
import { ROUTS } from '@constants/routs';

const AdminNav: React.FC = () => {
  return (
    <AdminNavWrapper>
      <NavLinkStyled to={ROUTS.ADMIN_PANEL_DOCTORS}>Doctors</NavLinkStyled>
      <NavLinkStyled to={ROUTS.ADMIN_PANEL_MED_CENTERS_LIST}>Medical Centers</NavLinkStyled>
      <NavLinkStyled to={ROUTS.ADMIN_PANEL_PATIENTS}>Patients</NavLinkStyled>
    </AdminNavWrapper>
  );
};

export default AdminNav;
