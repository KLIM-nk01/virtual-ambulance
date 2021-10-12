import React from 'react';
import { ROUTS } from '@constants/routs';
import { NavLink } from 'react-router-dom';
import Button from '@components/common/Button/Button';
import { useTypesSelector } from '@hooks/UseTypedSelector';

const LogIn: React.FC = () => {
  const state = useTypesSelector((state) => state.auth);
  return (
    <>
      {!state.authedUser ? (
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
      ) : (
        <span>sign out</span>
      )}
    </>
  );
};

export default LogIn;
