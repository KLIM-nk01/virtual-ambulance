import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import { ROUTS } from '@constants/routs';
import { USER_ROLE } from '@constants/userRole';
import { NavWrapper, NavItem } from './NavStyle';
import CenterLogo from '@assets/Center.svg';
import DoctorsLogo from '@assets/doctorsLogo.svg';
import UserAccount from '@assets/Account.svg';

const Nav: React.FC = () => {
  const user = useTypesSelector((state) => state.user);
  return (
    <NavWrapper>
      <NavLink to={ROUTS.MEDCENTERS_PAGE_PATH}>
        <NavItem>
          <img src={CenterLogo} alt='medCenter' />
          <span>Browse medical center</span>
          <p>Choose the right medical center for you.</p>
        </NavItem>
      </NavLink>

      {(!user.isAuth || user.currentUser.userRole === USER_ROLE.patient) && (
        <NavLink to={ROUTS.DOCTORS_PAGE_PATH}>
          <NavItem>
            <img src={DoctorsLogo} alt='medCenter' />
            <span>Choose doctor</span>
            <p>Make an appointment with the doctor, choose the date and time</p>
          </NavItem>
        </NavLink>
      )}

      <NavLink to={ROUTS.PERSONAL_ACCOUNT}>
        <NavItem>
          <img src={UserAccount} alt='medCenter' />
          <span>Personal Account</span>
          <p>Personal account where all your information is stored.</p>
        </NavItem>
      </NavLink>
    </NavWrapper>
  );
};

export default Nav;
