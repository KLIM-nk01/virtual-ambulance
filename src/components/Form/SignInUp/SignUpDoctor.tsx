import React from 'react';
import Button from '@components/common/Button/Button';
import Input from '@components/common/Input/Input';
import {
  FormContainer,
  FormName,
  Form,
  ButtonBar,
  DoctorCheckButton,
  QuestionWrapper,
  MedCentersSelect
} from './FormStyle';
import { IDoctor } from './type';

const SignUpDoctor: React.FC<IDoctor> = ({ setDoctor }) => {
  return (
    <FormContainer>
      <Form>
        <FormName>Сreate dodoctors account </FormName>

        <DoctorCheckButton>
          <span
            onClick={() => {
              setDoctor && setDoctor(false);
            }}>
            Click here if you are patient
          </span>
        </DoctorCheckButton>

        <Input primary placeholder="phone" type="tel" />
        <Input primary placeholder="Last Name" type="text" />
        <Input primary placeholder="Phone number" type="tel" />
        <Input primary placeholder="Email" type="email" />
        <Input primary placeholder="Passord" type="password" />
        <Input primary placeholder="Reapeat Passord" type="password" />

        <QuestionWrapper>
          <span>-Indicate your direction</span>
          <Input primary placeholder="Direction" type="text" />
        </QuestionWrapper>

        <QuestionWrapper>
          <span>-What kind of work experience do you have? (years)</span>
          <Input primary placeholder="Age" type="text" />
        </QuestionWrapper>

        <QuestionWrapper>
          <span>-Choose a medical facility where you work</span>
          <MedCentersSelect>Select with submenu</MedCentersSelect>
        </QuestionWrapper>

        <ButtonBar>
          <Button round>Sign Up</Button>
        </ButtonBar>
      </Form>
    </FormContainer>
  );
};

export default SignUpDoctor;
