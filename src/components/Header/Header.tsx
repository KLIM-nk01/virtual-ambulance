import React from 'react';
import styled from "styled-components";
import Container from "../Container/Container";
import HeaderContainer from "./HeaderContainer/HeaderContainer";

const HeaderWrapper = styled.div`
  height: 5%;
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
            <HeaderContainer/>
        </HeaderWrapper>
    );
};

export default Header;