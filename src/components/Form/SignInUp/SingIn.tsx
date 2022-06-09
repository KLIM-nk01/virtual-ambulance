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
import { isAdmin } from '@components/Helpers/AdminHelper';

const SingInForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const {  signInLoading, errorMessage } = useTypesSelector((state) => state.signIn);
  const { isAuth } = useTypesSelector((state) => state.user);
  const onSubmit = (data: ISignInData) => {
    dispatch(userSignIn(data));
  };

  return (
    <FormContainer>
      {isAuth && (
        <Redirect to={isAdmin() ? ROUTS.ADMIN_PANEL_MED_CENTERS_LIST : ROUTS.MAIN_PAGE_PATH} />
      )}

      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormName>Войти</FormName>

        <Input
          primary
          label="Почта"
          name="email"
          register={register('email', Email)}
          errors={errors}
        />

        <Input
          primary
          label="Пароль"
          type="password"
          name="password"
          register={register('password', Password)}
          errors={errors}
        />

        <ButtonBar>
          <Button round type="submit">
            Войти
          </Button>
        </ButtonBar>

        <NavLink to={ROUTS.SINGUP_FORM}>
         Нет аккаунта? Нажмите <span>здесь</span> для регистрации
        </NavLink>
        {signInLoading ? <Loader /> : errorMessage && <Error errorMessage={errorMessage} />}
      </Form>
    </FormContainer>
  );
};

export default SingInForm;
