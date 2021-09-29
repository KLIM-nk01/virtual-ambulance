import React from 'react';
import Account from './Profile/Profile';
import { ProfilePageWrapper } from './ProfilePageStyle';

const ProfilePage: React.FC = () => {
  return (
    <ProfilePageWrapper>
      <Account />
    </ProfilePageWrapper>
  );
};

export default ProfilePage;
