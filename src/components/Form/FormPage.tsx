import { ROUTS } from '@constants/routs';
import React from 'react';
import { Route } from 'react-router';
import { FormPageContainer } from './FormPageStyle';
import SignUpDoctor from './SignInUp/SignUpDoctor';
import SingInForm from './SignInUp/SingIn';
import SignUpUser from './SignInUp/SingUpUser';

const FormPage: React.FC = () => {
  return (
    <FormPageContainer>
      <SingInForm />
      <SignUpUser />
      <SignUpDoctor />
    </FormPageContainer>
  );
};

export default FormPage;
