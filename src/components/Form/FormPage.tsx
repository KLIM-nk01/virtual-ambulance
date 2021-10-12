import { ROUTS } from '@constants/routs';
import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { FormPageContainer } from './FormPageStyle';
import SignUpDoctor from './SignInUp/SignUpDoctor';
import SingInForm from './SignInUp/SingIn';
import SignUpUser from './SignInUp/SingUpUser';

const FormPage: React.FC = () => {
  const [doctorState, setDoctorState] = useState<boolean>(false);
  



  return (
    <FormPageContainer>
      <Route exact path={ROUTS.SIGNIN_FORM} render={() => <SingInForm />} />
      <Route
        exact
        path={ROUTS.SINGUP_FORM}
        render={() => {
          return doctorState ? (
            <SignUpDoctor setDoctor={setDoctorState} />
          ) : (
            <SignUpUser setDoctor={setDoctorState} />
          );
        }}
      />
    </FormPageContainer>
  );
};

export default FormPage;
