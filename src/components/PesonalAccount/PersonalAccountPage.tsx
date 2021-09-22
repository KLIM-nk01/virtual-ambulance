import React from 'react';
import { AccountPage } from './PersonalAccountPageStyle';
import UserAccount from '@components/PesonalAccount/UserAccount/UserAccount';

const PersonalAccountPage: React.FC = () => {
  return (
    <AccountPage>
      <UserAccount></UserAccount>
    </AccountPage>
  );
};

export default PersonalAccountPage;
