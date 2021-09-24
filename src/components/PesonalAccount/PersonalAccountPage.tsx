import React from 'react';
import { AccountPage } from './PersonalAccountPageStyle';
import Account from '@components/PesonalAccount/Account/Account';

const PersonalAccountPage: React.FC = () => {
  return (
    <AccountPage>
      <Account></Account>
    </AccountPage>
  );
};

export default PersonalAccountPage;
