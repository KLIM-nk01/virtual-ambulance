import React, { useRef } from 'react';
import Button from '@components/common/Button/Button';
import Input from '@components/common/Input/Input';
import { FormContainer, FormName, Form, ButtonBar, DoctorCheckButton } from './FormStyle';
import { IDoctor } from './type';
import { ErrorMessage } from '@hookform/error-message';
import { Email, Required, Birthday, PhoneNumber, Password } from './validationConstants';
import { useForm } from 'react-hook-form';

const SignUpUser: React.FC<IDoctor> = ({ setDoctor }) => {
  const onSubmit = (data: any) => console.log(data);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    // errors,
  } = useForm() as any;

  const password = useRef({});
  password.current = watch('password', '');

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormName>Сreate an account </FormName>
        <DoctorCheckButton>
          <span
            onClick={() => {
              setDoctor(true);
            }}
          >
            Click here if you are doctor
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
          placeholder="Birthday"
          type="text"
          name="birthday"
          register={register('Birthday', Birthday)}
        >
          <ErrorMessage
            errors={errors}
            name="Birthday"
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
          name="address"
          register={register('address', Required)}
          placeholder="Address"
          // error={!!Object.keys(errors.email).length}
        >
          <ErrorMessage errors={errors} name="address" render={({ message }) => <p>{message}</p>} />
        </Input>

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
            validate: (value: any) => value === password.current || 'The passwords do not match',
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

export default SignUpUser;
