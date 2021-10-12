import React, { useRef } from 'react';
import Button from '@components/common/Button/Button';
import Input from '@components/common/Input/Input';
import {
  FormContainer,
  FormName,
  Form,
  ButtonBar,
  DoctorCheckButton,
  QuestionWrapper,
  MedCentersSelect,
} from './FormStyle';
import { IDoctor } from './type';
import { useForm } from 'react-hook-form';
import { Email, Expiriens, Password, PhoneNumber, Required } from './validationConstants';

const SignUpDoctor: React.FC<IDoctor> = ({ setDoctor }) => {
  const onSubmit = (data: any) => console.log(data);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = useRef({});
  password.current = watch('password', '');

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormName>Сreate dodoctors account </FormName>

        <DoctorCheckButton>
          Are you patient?
          <span
            onClick={() => {
              setDoctor && setDoctor(false);
            }}
          >
            Click here.
          </span>
        </DoctorCheckButton>

        <Input
          primary
          label="Name"
          type="text"
          name="name"
          register={register('name', Required)}
          errors={errors}
        />

        <Input
          primary
          label="Last Name"
          type="text"
          name="last name"
          register={register('last name', Required)}
          errors={errors}
        />

        <Input
          primary
          type="text"
          name="email"
          register={register('email', Email)}
          label="Email"
          errors={errors}
        />

        <Input
          primary
          type="text"
          name="phone number"
          register={register('phone number', PhoneNumber)}
          label="Phone number"
          errors={errors}
        />

        <Input
          primary
          type="text"
          name="expiriens"
          register={register('expiriens', Expiriens)}
          label="Expiriens"
          errors={errors}
        />

        <QuestionWrapper>
          <span>-Indicate your direction</span>
          <Input
            primary
            label="Direction"
            type="text"
            name="direction"
            register={register('direction', Required)}
            errors={errors}
          />
        </QuestionWrapper>

        <QuestionWrapper>
          <span>-Choose a medical facility where you work</span>
          <Input
            primary
            type="text"
            name="work Place"
            register={register('work place', Required)}
            label="Work Place"
            errors={errors}
          />
          <MedCentersSelect>Select with submenu</MedCentersSelect>
        </QuestionWrapper>

        <Input
          primary
          name="password"
          type="password"
          label="Password"
          register={register('password', Password)}
          errors={errors}
        />

        <Input
          primary
          name="password_repeat"
          type="password"
          label="Repeat Password"
          register={register('password_repeat', {
            validate: (value) => value === password.current || 'The passwords do not match',
          })}
          errors={errors}
        />

        <ButtonBar>
          <Button type="submit" round>
            Sign Up
          </Button>
        </ButtonBar>
      </Form>
    </FormContainer>
  );
};

export default SignUpDoctor;
