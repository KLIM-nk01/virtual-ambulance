import React from 'react';
import { NavLink } from 'react-router-dom'
import {LogInButton} from "./LogInButton";


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