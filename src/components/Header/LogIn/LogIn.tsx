import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@components/common/Button/Button';

const LogIn: React.FC = () => {
  return (
    <NavLink to={'/logInForm'}>
      <Button>LogIn</Button>
    </NavLink>
  );
};

export default LogIn;
