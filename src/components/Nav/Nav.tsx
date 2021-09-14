import React from 'react';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import medicneCenterLogo from '../../assets/medicneCenter.png'

const NavWrapper = styled.div`
  
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
  
  a {
    text-decoration: none;
    color: #fff;
  }
`

const NavItem = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid black;

  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 100%;
  }
  
`

const Nav: React.FC = () => {
    return (
        <NavWrapper>
            <NavLink to={'/medCentersPage'}><NavItem><img src={medicneCenterLogo} alt={'medCenter'}/></NavItem></NavLink>
            <NavLink to={'/doctorsPage'}><NavItem>doctorsPage</NavItem></NavLink>
            <NavLink to={'/servicesPage'}><NavItem>servicesPage</NavItem></NavLink>
            <NavLink to={'/usersAccount'}><NavItem>usersAccount</NavItem></NavLink>
        </NavWrapper>
    );
};

export default Nav;