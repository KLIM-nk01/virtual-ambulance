import React from 'react';
import { useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';
import { userUnAuth } from '@store/actionCreators/auth';
import Button from '@components/common/Button/Button';
import { LogOutWrapper } from './LogOutStyle';
import NoAva from '@assets/NoAvatar.png';

const LogOut: React.FC = () => {
  const dispatch = useDispatch();
  const [cookies, setCookies, removeCookie] = useCookies();

  const logOut = () => {
    dispatch(userUnAuth());
    removeCookie('id');
  };
  
  return (
    <LogOutWrapper>
      <img src={NoAva} alt="" />
      <Button onClick={() => logOut()} round variant={'outlined'}>
        Sign out
      </Button>
    </LogOutWrapper>
  );
};

export default LogOut;
