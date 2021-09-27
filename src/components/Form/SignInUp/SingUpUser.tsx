import React from 'react';
import Button from '@components/common/Button/Button';
import Input from '@components/common/Input/Input';
import { FormContainer, FormName, Form, ButtonBar, DoctorCheckButton } from './FormStyle';
import { NavLink } from 'react-router-dom';

const SignUpUser: React.FC = () => {
  return (
    <FormContainer>
      <Form>
        <FormName>Сreate an account </FormName>
        <DoctorCheckButton>
          <span>
            <NavLink to="#">Are you doctor? Click here</NavLink>
          </span>
        </DoctorCheckButton>
        <Input primary placeholder="Name" type="text" />
        <Input primary placeholder="Last Name" type="text" />
        <Input primary placeholder="Email" type="email" />
        <Input primary placeholder="Passord" type="password" />

        <Input primary placeholder="Reapeat Passord" type="password" />

        <ButtonBar>
          <Button>Sign Up</Button>
          <Button variant="circle">G</Button>
        </ButtonBar>
      </Form>
    </FormContainer>
  );
};

export default SignUpUser;
