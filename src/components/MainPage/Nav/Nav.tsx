import React from 'react';
import CenterLogo from '../../../assets/Center.png';
import DoctorsLogo from '../../../assets/doctorsLogo.png';
import Services from '../../../assets/Services.png';
import UserAccount from '../../../assets/Account.png';
import { NavLink } from 'react-router-dom';
import { NavWrapper, NavItem } from './NavStyle';
import { ROUTS } from '../../../constants/routs';

const Nav: React.FC = () => {
  return (
    <NavWrapper>
      <NavLink to={ROUTS.MEDCENTERS_PAGE_PATH}>
        <NavItem>
          <img src={CenterLogo} alt={'medCenter'} />
          <span>Finding a medical center</span>
        </NavItem>
      </NavLink>
      <NavLink to={ROUTS.DOCTORS_PAGE_PATH}>
        <NavItem>
          <img src={DoctorsLogo} alt={'medCenter'} />
          <span>Finding a doctor</span>
        </NavItem>
      </NavLink>
      <NavLink to={ROUTS.SERVICES_PATH}>
        <NavItem>
          <img src={Services} alt={'medCenter'} />
          <span>View services</span>
        </NavItem>
      </NavLink>
      <NavLink to={ROUTS.USERS_ACCOUNT}>
        <NavItem>
          <img src={UserAccount} alt={'medCenter'} />
          <span>Personal Area</span>
        </NavItem>
      </NavLink>
    </NavWrapper>
  );
};

export default Nav;
