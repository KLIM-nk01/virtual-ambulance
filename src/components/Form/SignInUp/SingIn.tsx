import React from 'react';
import Button from '@components/common/Button/Button';
import Input from '@components/common/Input/Input';
import { FormContainer, FormName, Form, ButtonBar } from './FormStyle';
import { NavLink } from 'react-router-dom';
import { ROUTS } from '@constants/routs';
import { useForm } from 'react-hook-form';
import { Email, Password } from './validationConstants';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import { useDispatch } from 'react-redux';
import { sendSignInData } from '@store/actionCreators/signIn';
import { store } from '@store/store';

interface SubmitData {
  email: string;
  password: string;
}

const SingInForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm() as any;

  const { email, password } = useTypesSelector((state) => state.signIn);
  const dispatch = useDispatch();

  const onSubmit = (data: SubmitData) => {
    dispatch(sendSignInData(data.email, data.password));
    console.log(store.getState());
  };

  return (
    <FormContainer>
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
      </Form>
    </FormContainer>
  );
};

export default SingInForm;
