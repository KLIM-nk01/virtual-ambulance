import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import { ROUTS } from '@constants/routs';
import { USER_ROLE } from '@constants/userRole';
import { NavWrapper, NavItem } from './NavStyle';
import CenterLogo from '@assets/Center.svg';
import DoctorsLogo from '@assets/doctorsLogo.svg';
import UserAccount from '@assets/Account.svg';
import AdminPanel from '@assets/Admin.svg';
import { isAdmin } from '@components/Helpers/AdminHelper';

const Nav: React.FC = () => {
  const user = useTypesSelector((state) => state.user);

  return (
    <NavWrapper>
      <NavLink to={ROUTS.MEDCENTERS_PAGE_PATH}>
        <NavItem>
          <img src={CenterLogo} alt="medCenter" />
          <span>Медцентры</span>
          <p>Выберите нужный медцентр для себя.</p>
        </NavItem>
      </NavLink>

      {(!user.isAuth || user.currentUser.userRole === USER_ROLE.patient) && (
        <NavLink to={ROUTS.DOCTORS_PAGE_PATH}>
          <NavItem>
            <img src={DoctorsLogo} alt="medCenter" />
            <span>Медперсонал</span>
            <p>Запишитесь на прием к доктору</p>
          </NavItem>
        </NavLink>
      )}
      {isAdmin() ? (
        <NavLink to={ROUTS.ADMIN_PANEL}>
          <NavItem>
            <img src={AdminPanel} alt="admin" />
            <span>Панель администратора</span>
            <p>Добавьт или удалите медицинский центр</p>
          </NavItem>
        </NavLink>
      ) : (
        <NavLink to={ROUTS.PERSONAL_ACCOUNT}>
          <NavItem>
            <img src={UserAccount} alt="medCenter" />
            <span>Личный кабинет</span>
            <p>Войдите в личный кабинет.</p>
          </NavItem>
        </NavLink>
      )}
    </NavWrapper>
  );
};

export default Nav;
