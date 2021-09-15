import React from 'react';
import styled from "styled-components";
import Logo from "./Logo/Logo";
import LogIn from "./LogIn/LogIn";
import {HeaderContainerStyle, HeaderWrapper} from "./HeaderStyle";
import Search from "./Search/Search";


const Header: React.FC = () => {
    return (
        <HeaderWrapper>
            <HeaderContainerStyle>
                {/*<Location/>*/}
                <Logo/>
                <Search/>
                <LogIn/>
            </HeaderContainerStyle>
        </HeaderWrapper>
    );
};

export default Header;