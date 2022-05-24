import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import { ROUTS } from '@constants/routs';
import { logOut } from '@store/actionCreators/user';
import { LogOutWrapper } from './LogOutStyle';
import Button from '@components/common/Button/Button';
import Avatar from '@mui/material/Avatar';
import * as cookies from '@core/cookies/cookies';

const LogOut: React.FC = () => {
  const dispatch = useDispatch();
  const { userRole } = useTypesSelector((state) => state.user.currentUser);
  const avatar = useTypesSelector((state) => state.user.currentUser.photo);
  const history = useHistory();

  const logOutAction = () => {
    dispatch(logOut());
    cookies.deleteCookie(['token']);
    console.log('выход');
    history.push('/');
  };

  return (
    <LogOutWrapper>
      {userRole === 'admin' ? (
        <span>Admin</span>
      ) : (
        <NavLink to={ROUTS.PERSONAL_ACCOUNT}>
          <Avatar sx={{ width: 56, height: 56 }} src={avatar} />
        </NavLink>
      )}
      <Button onClick={logOutAction} round variant="outlined">
        Sign out
      </Button>
    </LogOutWrapper>
  );
};

export default LogOut;
