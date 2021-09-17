import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../common/Button/Button';
// import { LogInButton } from './LogInButton';

const LogIn: React.FC = () => {
  return (
    <NavLink to={'/logInForm'}>
      <Button styleButton={{ backgroundColor: 'white' }}>LogIn</Button>
    </NavLink>
  );
};

export default LogIn;
