import React from 'react';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { ROUTS } from '@constants/routs';
import { userSignIn } from '@store/actionCreators/signIn';
import { ISignInData } from '@store/types/signIn';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import { FormContainer, FormName, Form, ButtonBar } from './FormStyle';
import { Email, Password } from '@components/Form/SignInUp/formValidationConstants';
import Button from '@components/common/Button/Button';
import Input from '@components/common/Input/Input';
import Loader from '@components/common/Loader/Loader';
import Error from '@components/common/Error/Error';
import { USER_ROLE } from '@constants/userRole';

const SingInForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { signInUser, signInLoading, errorMessage } = useTypesSelector((state) => state.signIn);
  const { isAuth, currentUser } = useTypesSelector((state) => state.user);
  const onSubmit = (data: ISignInData) => {
    dispatch(userSignIn(data));
  };

  return (
    <FormContainer>
      {isAuth && (
        <Redirect
          to={
            currentUser.userRole === USER_ROLE.admin
              ? ROUTS.ADMIN_PANEL_MED_CENTERS_LIST
              : ROUTS.MAIN_PAGE_PATH
          }
        />
      )}

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
        {signInLoading ? <Loader /> : errorMessage && <Error errorMessage={errorMessage} />}
      </Form>
    </FormContainer>
  );
};

export default SingInForm;
