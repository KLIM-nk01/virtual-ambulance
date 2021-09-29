import React from 'react';
import Account from './Account/Account';
import { AccountPage } from './PersonalAccountPageStyle';

const PersonalAccountPage: React.FC = () => {
  return (
    <AccountPage>
      <Account />
    </AccountPage>
  );
};

export default PersonalAccountPage;
