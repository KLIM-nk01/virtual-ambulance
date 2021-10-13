import React, { useState } from 'react';
import {
  HeaderContainerStyle,
  HeaderWrapper,
  LogInOutWrapper
} from './HeaderStyle';
import Logo from './Logo/Logo';
import LogIn from './LogIn/LogIn';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import LogOut from './LogOut/LogOut';
import Search from './Search/Search';
import BurgerMenu from './Burger/BurgerMenu';
import BurgerButton from './Burger/BurgerButton';
import Portal from '@components/common/Portal/Portal';

const Header: React.FC = () => {
  const { authedUser } = useTypesSelector((state) => state.auth);
  const [menuActive, setMenuActive] = useState<boolean>(false);
  return (
    <HeaderWrapper>
      <HeaderContainerStyle>
        <Logo />
        <Search />
        <LogInOutWrapper>
          {!authedUser ? <LogIn /> : <LogOut />}
        </LogInOutWrapper>

        <BurgerButton setMenuActive={setMenuActive} menuActive={menuActive} />

        <Portal>
          <BurgerMenu setMenuActive={setMenuActive} menuActive={menuActive}>
            {!authedUser ? <LogIn /> : <LogOut />}
          </BurgerMenu>
        </Portal>
      </HeaderContainerStyle>
    </HeaderWrapper>
  );
};

export default Header;
