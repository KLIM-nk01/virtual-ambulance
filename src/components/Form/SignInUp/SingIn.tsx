import React from 'react';
import Button from '@components/common/Button/Button';
import Input from '@components/common/Input/Input';
import { FormContainer, FormName, Form, ButtonBar } from './FormStyle';
import { NavLink } from 'react-router-dom';
import { ROUTS } from '@constants/routs';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { Email, Password } from './validationConstants';

const SingInForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    errors: test
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
          // error={!!Object.keys(errors.email).length}
          errors={test}>
          {console.log(test, '+')}
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => <p>{message}</p>}
          />
        </Input>

        <Input
          primary
          placeholder="Password"
          type="password"
          name="password"
          register={register('password', Password)}>
          <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => <p>{message}</p>}
          />
        </Input>

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
