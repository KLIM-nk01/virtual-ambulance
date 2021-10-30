import React from 'react';
import { useDispatch } from 'react-redux';
import { userUnAuth } from '@store/actionCreators/signIn';
import Button from '@components/common/Button/Button';
import { LogOutWrapper } from './LogOutStyle';
import NoAva from '@assets/NoAvatar.png';
import { logOut } from '@store/actionCreators/user';

const LogOut: React.FC = () => {
  const dispatch = useDispatch();

  // const logOut = () => {
  //   dispatch(lo());
  //   cookies.deleteCookie(['id', 'userRole', 'token']);
  // };

  return (
    <LogOutWrapper>
      <img src={NoAva} alt="" />
      <Button onClick={() => dispatch(logOut())} round variant={'outlined'}>
        Sign out
      </Button>
    </LogOutWrapper>
  );
};

export default LogOut;
