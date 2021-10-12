import React from 'react';
import { HeaderContainerStyle, HeaderWrapper } from './HeaderStyle';
import Logo from './Logo/Logo';
import LogIn from './LogIn/LogIn';
import Input from '@components/common/Input/Input';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import LogOut from './LogOut/LogOut';

const Header: React.FC = () => {
  const { authedUser } = useTypesSelector((state) => state.auth);
  return (
    <HeaderWrapper>
      <HeaderContainerStyle>
        <Logo />
        <Input name="search" type="text" />
        {!authedUser ? <LogIn /> : <LogOut />}
      </HeaderContainerStyle>
    </HeaderWrapper>
  );
};

export default Header;
