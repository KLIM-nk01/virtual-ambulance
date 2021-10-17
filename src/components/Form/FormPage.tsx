import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { ROUTS } from '@constants/routs';
import { FormPageContainer } from './FormPageStyle';
import SignUpDoctor from './SignInUp/SignUpDoctor';
import SingInForm from './SignInUp/SingIn';
import SignUpUser from './SignInUp/SignUpPatient';
const FormPage: React.FC = () => {
  const [userRole, setUserRole] = useState('patient');
  return (
    <FormPageContainer>
      <Route exact path={ROUTS.SIGNIN_FORM} render={() => <SingInForm />} />
      <Route
        exact
        path={ROUTS.SINGUP_FORM}
        render={() => {
          return userRole === 'doctor' ? (
            <SignUpDoctor userRole={userRole} setUserRole={setUserRole} />
          ) : (
            <SignUpUser userRole={userRole} setUserRole={setUserRole} />
          );
        }}
      />
    </FormPageContainer>
  );
};

export default FormPage;
