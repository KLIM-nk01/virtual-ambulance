import React from 'react';
import { NavLink } from 'react-router-dom';
import AppLogo from '../../../assets/Logo.png';
import { Container, LogoStyle } from './LogoStyle';
import { ROUTS } from '../../../constants/routs';

const Logo: React.FC = () => {
  return (
    <div>
      <NavLink to={ROUTS.MAIN_PAGE_PATH}>
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
