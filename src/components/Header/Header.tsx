import React from 'react';
import { HeaderContainerStyle, HeaderWrapper } from './HeaderStyle';
import Logo from './Logo/Logo';
import LogIn from './LogIn/LogIn';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import LogOut from './LogOut/LogOut';
import Search from './Search/Search';
import BurgerMenu from './Burger/BurgerMenu';

const Header: React.FC = () => {
  const { authedUser } = useTypesSelector((state) => state.auth);
  return (
    <HeaderWrapper>
      <HeaderContainerStyle>
        <Logo />
        <Search />
        {!authedUser ? <LogIn /> : <LogOut />}
        {/* <BurgerMenu></BurgerMenu> */}
      </HeaderContainerStyle>
    </HeaderWrapper>
  );
};

export default Header;
