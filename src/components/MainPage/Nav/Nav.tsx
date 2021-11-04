import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTS } from '@constants/routs';
import CenterLogo from '@assets/Center.svg';
import DoctorsLogo from '@assets/doctorsLogo.svg';
import UserAccount from '@assets/Account.svg';
import { NavWrapper, NavItem } from './NavStyle';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import * as cookies from '@core/cookies/cookies';

const Nav: React.FC = () => {
  const user = useTypesSelector((state) => state.user);
  return (
    <NavWrapper>
      <NavLink to={ROUTS.MEDCENTERS_PAGE_PATH}>
        <NavItem>
          <img src={CenterLogo} alt={'medCenter'} />
          <span>Browse medical center</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, placeat minus</p>
        </NavItem>
      </NavLink>

      {(!user.isAuth || user.currentUser.userRole === 'patient') && (
        <NavLink to={ROUTS.DOCTORS_PAGE_PATH}>
          <NavItem>
            <img src={DoctorsLogo} alt={'medCenter'} />
            <span>Choose doctor</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, placeat minus</p>
          </NavItem>
        </NavLink>
      )}

      <NavLink to={ROUTS.PERSONAL_ACCOUNT}>
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
