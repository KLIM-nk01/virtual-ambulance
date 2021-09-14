import React from 'react';
import { NavLink } from 'react-router-dom'

const LogIn: React.FC = () => {
    return (
        <NavLink to={'/logInForm'}>
            LogIn
        </NavLink>
    );
};

export default LogIn;