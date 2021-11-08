import React, { useState } from 'react';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import { HeaderContainerStyle, HeaderWrapper, LogInOutWrapper } from './HeaderStyle';
import Logo from './Logo/Logo';
import LogIn from './LogIn/LogIn';
import LogOut from './LogOut/LogOut';
import Search from './Search/Search';
import BurgerMenu from './Burger/BurgerMenu';
import BurgerButton from './Burger/BurgerButton';
import Portal from '@components/common/Portal/Portal';

const Header: React.FC = () => {
  const isAuth = useTypesSelector((state) => state.user.isAuth);
  const [menuActive, setMenuActive] = useState<boolean>(false);
  return (
    <HeaderWrapper>
      <HeaderContainerStyle>
        <Logo />
        <Search />
        <LogInOutWrapper>{!isAuth ? <LogIn /> : <LogOut />}</LogInOutWrapper>

        <BurgerButton setMenuActive={setMenuActive} menuActive={menuActive} />

        <Portal>
          <BurgerMenu setMenuActive={setMenuActive} menuActive={menuActive}>
            {!isAuth ? <LogIn /> : <LogOut />}
          </BurgerMenu>
        </Portal>
      </HeaderContainerStyle>
    </HeaderWrapper>
  );
};

export default Header;
