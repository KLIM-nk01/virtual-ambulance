import React from 'react';
import styled from "styled-components";
import Logo from "./Logo/Logo";
import LogIn from "./LogIn/LogIn";
import {HeaderContainer} from "./HeaderContainer";
import Search from "./Search/Search";

const HeaderWrapper = styled.div`
  height: 10%;
  width: 100%;
  background-color: inherit;
  color: #fff;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, #4a88ed, #7e57f0);
  
`

const Header: React.FC = () => {
    return (
        <HeaderWrapper>
            <HeaderContainer>
                {/*<Location/>*/}
                <Logo/>
                <Search/>
                <LogIn/>
            </HeaderContainer>
        </HeaderWrapper>
    );
};

export default Header;