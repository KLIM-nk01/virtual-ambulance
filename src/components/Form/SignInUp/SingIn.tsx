import React from 'react';
import Button from '@components/common/Button/Button';
import Input from '@components/common/Input/Input';
import { FormContainer, FormName, Form, ButtonBar } from './FormStyle';
import { NavLink } from 'react-router-dom';
import { ROUTS } from '@constants/routs';
import { useForm } from 'react-hook-form';
import { Email, Password } from './validationConstants';
import { useDispatch } from 'react-redux';
import { userAuth } from '@store/actionCreators/auth';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import { Redirect } from 'react-router';
import Loader from '@components/common/Loader/Loader';

interface SubmitData {
  email: string;
  password: string;
}

const SingInForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm() as any;

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
          placeholder="Email"
          // type='email'
          name="email"
          register={register('email', Email)}
          errors={errors}
        />

        <Input
          primary
          placeholder="Password"
          type="password"
          name="password"
          register={register('password', Password)}
          errors={errors}
        />

        <NavLink to={ROUTS.SINGUP_FORM}>
          <span>Don't have an account? Registration</span>
        </NavLink>

        <ButtonBar>
          <Button round type="submit">
            Sign In
          </Button>

          <Button round>G</Button>
        </ButtonBar>

        {authLoading && <Loader />}
      </Form>
    </FormContainer>
  );
};

export default SingInForm;
