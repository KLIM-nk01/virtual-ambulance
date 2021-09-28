import React from 'react';
import { ROUTS } from '@constants/routs';
import { NavLink } from 'react-router-dom';
import Button from '@components/common/Button/Button';

const LogIn: React.FC = () => {
  return (
    <div>
      <NavLink to={ROUTS.SIGNIN_FORM}>
        <Button round variant={'outlined'}>
          sign in
        </Button>
      </NavLink>
      <NavLink to={ROUTS.SINGUP_FORM}>
        <Button round variant={'outlined'}>
          sign up
        </Button>
      </NavLink>
    </div>
  );
};

export default LogIn;
