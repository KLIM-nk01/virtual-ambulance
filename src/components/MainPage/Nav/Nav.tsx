import React from 'react';
import CenterLogo from '@assets/Center.svg';
import DoctorsLogo from '@assets/doctorsLogo.svg';
import Services from '@assets/Services.svg';
import UserAccount from '@assets/Account.svg';
import { NavLink } from 'react-router-dom';
import { NavWrapper, NavItem } from './NavStyle';
import { ROUTS } from '@constants/routs';

const Nav: React.FC = () => {
  return (
    <NavWrapper>
      <NavLink to={ROUTS.MEDCENTERS_PAGE_PATH}>
        <NavItem>
          <img src={CenterLogo} alt={'medCenter'} />
          <span>Browse medical center</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, placeat minus</p>
        </NavItem>
      </NavLink>

      <NavLink to={ROUTS.DOCTORS_PAGE_PATH}>
        <NavItem>
          <img src={DoctorsLogo} alt={'medCenter'} />
          <span>Choose doctor</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, placeat minus</p>
        </NavItem>
      </NavLink>

      <NavLink to={ROUTS.SERVICES_PATH}>
        <NavItem>
          <img src={Services} alt={'medCenter'} />
          <span>View services</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, placeat minus</p>
        </NavItem>
      </NavLink>

      <NavLink to={ROUTS.FORM_PAGE}>
        <NavItem>
          <img src={UserAccount} alt={'medCenter'} />
          <span>Personal Account</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, placeat minus</p>
        </NavItem>
      </NavLink>
    </NavWrapper>
  );
};

export default Nav;
