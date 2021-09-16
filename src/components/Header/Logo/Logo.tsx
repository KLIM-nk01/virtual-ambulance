import React from 'react';
import {NavLink} from 'react-router-dom'
import AppLogo from '../../../assets/Logo.png'
import styled, {css} from "styled-components";
import {fonts} from "../../../style/fonts";
import { flex } from "../../../style/flex";

const Container = styled.div`
  width: 180px;
  height: 100%;
  padding: 0 5px;
  ${flex};
  border-bottom: 1px solid inherit;
  transition: 0.5s;
  border-radius: 25px;
  
  div {
    ${flex};
    flex-direction: column;
  }

  span {
    ${fonts};
    font-family: 'Parisienne', cursive;
    font-size: 1.5em;
  }
  
  :hover{
    box-shadow: 0.4em 0.4em 5px rgba(69, 68, 68, 0.5);
    
  }
`

const LogoStyle = styled.img`
  height: 60px;
`

const Logo: React.FC = () => {
    return (
        <div>
            <NavLink to={'/'}>
                <Container>
                    <LogoStyle src={AppLogo} alt='AppLogo'/>
                    <div>
                        <span>Virtual</span>
                        <span>Ambulance</span>
                    </div>

                </Container>
            </NavLink>
        </div>
    );
};

export default Logo;
