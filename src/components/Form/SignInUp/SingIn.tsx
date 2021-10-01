import React from 'react';
import Button from '@components/common/Button/Button';
import Input from '@components/common/Input/Input';
import { FormContainer, FormName, Form, ButtonBar } from './FormStyle';
import { NavLink } from 'react-router-dom';
import { ROUTS } from '@constants/routs';
import { useForm } from 'react-hook-form';
interface FormValue {
  email: string;
  password?: any;
  message?: string | React.ReactElement;
  name?: string;
}

const SingInForm: React.FC = () => {
  const { register, handleSubmit } = useForm<FormValue>();
  const onSubmit = (data: any) => console.log(data);

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormName>Sin In to your account</FormName>
        {/* {errors.email && <div>sdfsdfsdf</div>} */}
        <Input
          register={register('email', {
            pattern:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          })}
          primary
          placeholder="Email"
          type="email"
        />
        <Input
          register={register('password', {
            min: 8
          })}
          primary
          placeholder="Password"
          type="password"
        />

        <NavLink to={ROUTS.SINGUP_FORM}>
          <span>Don't have an account? Registration</span>
        </NavLink>

        <ButtonBar>
          <Button round type="submit">
            Sign In
          </Button>
          {/* <Input type="submit" placeholder="Sign In" /> */}
          <Button round>G</Button>
        </ButtonBar>
      </Form>
    </FormContainer>
  );
};

export default SingInForm;
