import React from 'react';
import { HeaderContainerStyle, HeaderWrapper } from './HeaderStyle';
import Logo from './Logo/Logo';
import LogIn from './LogIn/LogIn';
import Input from '@components/common/Input/Input';

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <HeaderContainerStyle>
        <Logo />
        <Input placeholder={'Search'} type='text'/>
        <LogIn />
      </HeaderContainerStyle>
    </HeaderWrapper>
  );
};

export default Header;
