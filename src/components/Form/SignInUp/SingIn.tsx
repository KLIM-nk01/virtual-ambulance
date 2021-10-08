import React from 'react';
import Button from '@components/common/Button/Button';
import Input from '@components/common/Input/Input';
import { FormContainer, FormName, Form, ButtonBar } from './FormStyle';
import { NavLink } from 'react-router-dom';
import { ROUTS } from '@constants/routs';
import { useForm } from 'react-hook-form';
import { Email, Password } from './validationConstants';

const SingInForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm() as any;
  const onSubmit = (data: any) => console.log(data);
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
