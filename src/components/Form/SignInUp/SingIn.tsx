import React from 'react';
import Button from '@components/common/Button/Button';
import Input from '@components/common/Input/Input';
import { FormContainer, FormName, Form, ButtonBar } from './FormStyle';
import { NavLink } from 'react-router-dom';
import { ROUTS } from '@constants/routs';

const SingInForm: React.FC = () => {
  return (
    <FormContainer>
      <Form>
        <FormName>Sin In to your account</FormName>

        <Input primary placeholder="Email or Phone number" type="" />
        <Input primary placeholder="Password" type="password" />

        <NavLink to={ROUTS.SINGUP_FORM}>
          <span>Don't have an account? Registration</span>
        </NavLink>

        <ButtonBar>
          <Button>Sign In</Button>
          <Button round>G</Button>
        </ButtonBar>
      </Form>
    </FormContainer>
  );
};

export default SingInForm;
