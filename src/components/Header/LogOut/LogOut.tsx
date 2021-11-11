import React from 'react';
import { useDispatch } from 'react-redux';
import { userUnAuth } from '@store/actionCreators/signIn';
import Button from '@components/common/Button/Button';
import { LogOutWrapper } from './LogOutStyle';
import { logOut } from '@store/actionCreators/user';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import Avatar from '@mui/material/Avatar';

const LogOut: React.FC = () => {
  const dispatch = useDispatch();

  const avatar = useTypesSelector((state) => state.user.currentUser.photo);
  return (
    <LogOutWrapper>
      <Avatar sx={{ width: 56, height: 56 }} src={avatar}/>
      <Button onClick={() => dispatch(logOut())} round variant='outlined'>
        Sign out
      </Button>
    </LogOutWrapper>
  );
};

export default LogOut;
