import React from 'react';
import { AccountPage } from './PersonalAccountPageStyle';
// import Account from '@components/PesonalAccount/Account/Account';
import SingUpForm from '@components/Form/SingUpForm';

const PersonalAccountPage: React.FC = () => {
  return (
    <AccountPage>
      <SingUpForm />
    </AccountPage>
  );
};

export default PersonalAccountPage;
