import React from 'react';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { userAuth } from '@store/actionCreators/auth';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import { ROUTS } from '@constants/routs';
import { Email, Password } from '@components/Form/SignInUp/formValidationConstants';
import Button from '@components/common/Button/Button';
import Input from '@components/common/Input/Input';
import Loader from '@components/common/Loader/Loader';
import { FormContainer, FormName, Form, ButtonBar } from './FormStyle';

interface SubmitData {
  email: string;
  password: string;
}

const SingInForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const dispatch = useDispatch();
  const { authedUser, authLoading } = useTypesSelector((state) => state.auth);
  const onSubmit = (data: SubmitData) => {
    dispatch(userAuth(data.email, data.password));
  };

  return (
    <FormContainer>
      {authedUser && <Redirect to={ROUTS.MAIN_PAGE_PATH} />}

      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormName>Sin In to your account</FormName>

        <Input
          primary
          label="Email"
          // type='email'
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
        {authLoading && <Loader />}
      </Form>
    </FormContainer>
  );
};

export default SingInForm;
