import React from 'react';
import Button from '@components/common/Button/Button';
import Input from '@components/common/Input/Input';
import { FormContainer, FormName, Form, ButtonBar } from './FormStyle';

const SingInForm: React.FC = () => {
  return (
    <FormContainer>
      <Form>
        <FormName>Sin In to your account</FormName>
        <Input primary placeholder="Login" type="" />
        <Input primary placeholder="Password" type="password" />

        <ButtonBar>
          <Button>Sign In</Button>
          <Button variant="circle">G</Button>
        </ButtonBar>
      </Form>
    </FormContainer>
  );
};

export default SingInForm;
