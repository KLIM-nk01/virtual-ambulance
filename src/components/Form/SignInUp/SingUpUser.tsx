import React from 'react';
import Button from '@components/common/Button/Button';
import Input from '@components/common/Input/Input';
import {
  FormContainer,
  FormName,
  Form,
  ButtonBar,
  DoctorCheckButton
} from './FormStyle';
import { IDoctor } from './type';

const SignUpUser: React.FC<IDoctor> = ({ setDoctor }) => {
  return (
    <FormContainer>
      <Form>
        <FormName>Сreate an account </FormName>
        <DoctorCheckButton>
          <span
            onClick={() => {
               setDoctor(true);
            }}>
            Click here if you are doctor
          </span>
        </DoctorCheckButton>
        <Input primary placeholder="Name" type="text" />
        <Input primary placeholder="Last Name" type="text" />
        <Input primary placeholder="Email" type="email" />
        <Input primary placeholder="Passord" type="password" />
        <Input primary placeholder="Reapeat Passord" type="password" />

        <ButtonBar>
          <Button round>Sign Up</Button>
          <Button round>G</Button>
        </ButtonBar>
      </Form>
    </FormContainer>
  );
};

export default SignUpUser;
