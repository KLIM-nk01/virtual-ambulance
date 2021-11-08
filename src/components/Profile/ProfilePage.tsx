import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import { ROUTS } from '@constants/routs';
import Profile from './Profile/Profile';
import { ProfilePageWrapper } from './ProfilePageStyle';
import Loader from '@components/common/Loader/Loader';
import { fetchProfileData } from '@store/actionCreators/profileData';

const ProfilePage: React.FC = () => {
  const dispatch = useDispatch();
  const { currentUser } = useTypesSelector((state) => state.user);
  const profileData = useTypesSelector((state) => state.profile);

  useEffect(() => {
    dispatch(fetchProfileData(currentUser.userRole));
  }, []);

  const { isAuth } = useTypesSelector((state) => state.user);
  if (!isAuth) return <Redirect to={ROUTS.SIGNIN_FORM} />;

  return <ProfilePageWrapper>{profileData.loading ? <Loader /> : <Profile />}</ProfilePageWrapper>;
};

export default ProfilePage;
