import React from 'react';
import { HeaderContainerStyle, HeaderWrapper } from './HeaderStyle';
import Logo from './Logo/Logo';
import LogIn from './LogIn/LogIn';
import Search from './Search/Search';
import Input from '@components/common/Input/Input';

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <HeaderContainerStyle>
        {/*<Location/>*/}
        <Logo />
        {/* <Search /> */}
        <Input />
        <LogIn />
      </HeaderContainerStyle>
    </HeaderWrapper>
  );
};

export default Header;
