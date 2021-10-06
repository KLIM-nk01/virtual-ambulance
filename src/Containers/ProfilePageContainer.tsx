import React from 'react';

const ProfilePage = React.lazy(() => import('@components/Profile/ProfilePage'));

const ProfilePageContainer = () => <ProfilePage />;

export default ProfilePageContainer;
