import React from 'react';
import styled from "styled-components";
import Logo from "../../Logo/Logo";
import Nav from "../../Nav/Nav";
import Location from "./Location/Location";
import LogIn from "./LogIn/LogIn";

const HeaderContainerStyle = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const HeaderContainer: React.FC = () => {
    return (
        <HeaderContainerStyle>
            <Location/>
            <Logo/>
            <LogIn/>
        </HeaderContainerStyle>
    );
};

export default HeaderContainer;