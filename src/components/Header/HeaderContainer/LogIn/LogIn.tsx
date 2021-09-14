import React from 'react';
import { NavLink } from 'react-router-dom'
import styled from "styled-components";
import logInLogo from '../../../../assets/logIn.png'
import {flex} from "../../../../style/flex";

const LogInButton = styled.button`
  width: 95px;
  height: 40px;
  border-radius: 50px;
  ${flex};
  justify-content: center;
  color: black;
  border: none;
  transition: 0.5s;
  cursor: pointer;

  font-size: 16px;
  font-weight: 700;
  

  :hover {
    background: #6bc148;
    color: white;
    box-shadow: 0.4em 0.4em 5px rgba(69, 68, 68, 0.5);
  }
`

const LogIn: React.FC = () => {
    return (
        <NavLink to={'/logInForm'}>
            <LogInButton>
                Log In
            </LogInButton>
        </NavLink>
    );
};

export default LogIn;