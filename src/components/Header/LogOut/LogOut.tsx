import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import { ROUTS } from '@constants/routs';
import { logOut } from '@store/actionCreators/user';
import { LogOutWrapper } from './LogOutStyle';
import Button from '@components/common/Button/Button';
import Avatar from '@mui/material/Avatar';

const LogOut: React.FC = () => {
  const dispatch = useDispatch();
  const { userRole } = useTypesSelector((state) => state.user.currentUser);
  const avatar = useTypesSelector((state) => state.user.currentUser.photo);
  return (
    <LogOutWrapper>
      {userRole === 'admin' ? (
        <span>Admin</span>
      ) : (
        <NavLink to={ROUTS.PERSONAL_ACCOUNT}>
          <Avatar sx={{ width: 56, height: 56 }} src={avatar} />
        </NavLink>
      )}
      <Button onClick={() => dispatch(logOut())} round variant="outlined">
        Sign out
      </Button>
    </LogOutWrapper>
  );
};

export default LogOut;
