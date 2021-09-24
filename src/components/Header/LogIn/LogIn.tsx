import React from 'react';
import { ROUTS } from '@constants/routs';
import { NavLink } from 'react-router-dom';
import Button from '@components/common/Button/Button';

const LogIn: React.FC = () => {
  return (
    <NavLink to={ROUTS.LOGIN_FORM}>
      <Button variant={'outlined'}>sign in</Button>
      <Button variant={'outlined'}>sign up</Button>
    </NavLink>
  );
};

export default LogIn;
