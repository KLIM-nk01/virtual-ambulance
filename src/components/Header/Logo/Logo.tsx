import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTS } from '@constants/routs';
import AppLogo from '@assets/Logo.png';
import { Container, LogoStyle } from './LogoStyle';
import { isAdmin } from '@components/Helpers/AdminHelper';

const Logo: React.FC = () => {
  return (
    <div>
      <NavLink to={isAdmin() ? ROUTS.ADMIN_PANEL_MED_CENTERS_LIST : ROUTS.MAIN_PAGE_PATH}>
        <Container>
          <LogoStyle src={AppLogo} alt="AppLogo" />
          <div>
            <span>Virtual</span>
            <span>Ambulance</span>
          </div>
        </Container>
      </NavLink>
    </div>
  );
};

export default Logo;
