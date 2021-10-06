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
import { ErrorMessage } from '@hookform/error-message';

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
          <span
            onClick={() => {
              setDoctor && setDoctor(false);
            }}
          >
            Click here if you are patient
          </span>
        </DoctorCheckButton>

        <Input
          primary
          placeholder="Name"
          type="text"
          name="name"
          register={register('name', Required)}
        >
          <ErrorMessage errors={errors} name="name" render={({ message }) => <p>{message}</p>} />
        </Input>

        <Input
          primary
          placeholder="Last Name"
          type="text"
          name="last name"
          register={register('last name', Required)}
        >
          <ErrorMessage
            errors={errors}
            name="last name"
            render={({ message }) => <p>{message}</p>}
          />
        </Input>

        <Input
          primary
          type="text"
          name="email"
          register={register('email', Email)}
          placeholder="Email"
          // error={!!Object.keys(errors.email).length}
        >
          <ErrorMessage errors={errors} name="email" render={({ message }) => <p>{message}</p>} />
        </Input>

        <Input
          primary
          type="text"
          name="phone number"
          register={register('phone number', PhoneNumber)}
          placeholder="Phone number"
          // error={!!Object.keys(errors.email).length}
        >
          <ErrorMessage
            errors={errors}
            name="phone number"
            render={({ message }) => <p>{message}</p>}
          />
        </Input>

        <Input
          primary
          type="text"
          name="expiriens"
          register={register('expiriens', Expiriens)}
          placeholder="Expiriens"
          // error={!!Object.keys(errors.email).length}
        >
          <ErrorMessage
            errors={errors}
            name="expiriens"
            render={({ message }) => <p>{message}</p>}
          />
        </Input>

        <QuestionWrapper>
          <span>-Indicate your direction</span>
          <Input
            primary
            placeholder="Direction"
            type="text"
            name="direction"
            register={register('direction', Required)}
          >
            <ErrorMessage
              errors={errors}
              name="direction"
              render={({ message }) => <p>{message}</p>}
            />
          </Input>
        </QuestionWrapper>

        <QuestionWrapper>
          <span>-Choose a medical facility where you work</span>
          <Input
            primary
            type="text"
            name="work Place"
            register={register('work place', Required)}
            placeholder="Work Place"
            // error={!!Object.keys(errors.email).length}
          >
            <ErrorMessage
              errors={errors}
              name="work place"
              render={({ message }) => <p>{message}</p>}
            />
          </Input>
          <MedCentersSelect>Select with submenu</MedCentersSelect>
        </QuestionWrapper>

        <Input
          primary
          name="password"
          type="password"
          placeholder="Password"
          register={register('password', Password)}
        >
          <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => <p>{message}</p>}
          />
        </Input>

        <Input
          primary
          name="password_repeat"
          type="password"
          placeholder="Repeat Password"
          register={register('password_repeat', {
            validate: (value) => value === password.current || 'The passwords do not match',
          })}
        >
          <ErrorMessage
            errors={errors}
            name="password_repeat"
            render={({ message }) => <p>{message}</p>}
          />
        </Input>

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
