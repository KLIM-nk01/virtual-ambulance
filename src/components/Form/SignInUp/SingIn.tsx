import React, { useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { userAuth, userUnAuth } from '@store/actionCreators/auth';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import { ROUTS } from '@constants/routs';
import { Email, Password } from '@components/Form/SignInUp/formValidationConstants';
import Button from '@components/common/Button/Button';
import Input from '@components/common/Input/Input';
import Loader from '@components/common/Loader/Loader';
import { FormContainer, FormName, Form, ButtonBar } from './FormStyle';
import { IAuthData } from '@store/types/authUser';
import Error from '@components/common/Error/Error';


const SingInForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  const dispatch = useDispatch();
  const { authedUser, authLoading, errorMessage } = useTypesSelector((state) => state.auth);
  const onSubmit = (data: IAuthData) => {
    dispatch(userAuth(data));
  
  };
  
  return (
    <FormContainer>
      {authedUser && <Redirect to={ROUTS.MAIN_PAGE_PATH} />}

      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormName>Sin In to your account</FormName>

        <Input
          primary
          label="Email"
          name="email"
          register={register('email', Email)}
          errors={errors}
        />

        <Input
          primary
          label="Password"
          type="password"
          name="password"
          register={register('password', Password)}
          errors={errors}
        />

        <ButtonBar>
          <Button round type="submit">
            Sign In
          </Button>
        </ButtonBar>

        <NavLink to={ROUTS.SINGUP_FORM}>
          Don't have an account? Click <span>here</span> to registration
        </NavLink>
        {authLoading ? <Loader /> : errorMessage && <Error errorMessage={errorMessage} />}
      </Form>
    </FormContainer>
  );
};

export default SingInForm;
