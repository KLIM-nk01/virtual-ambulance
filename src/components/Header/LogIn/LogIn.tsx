import React from 'react';
import { ROUTS } from '@constants/routs';
import { NavLink } from 'react-router-dom';
import Button from '@components/common/Button/Button';
import { ButtonsWrapper } from './LogInButton';

const LogIn: React.FC = () => {
  return (
    <ButtonsWrapper>
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
    </ButtonsWrapper>
  );
};

export default LogIn;
