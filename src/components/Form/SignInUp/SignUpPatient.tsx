import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router';
import { useDispatch } from 'react-redux';
import Button from '@components/common/Button/Button';
import Input from '@components/common/Input/Input';
import { FormContainer, FormName, Form, ButtonBar, DoctorCheckButton } from './FormStyle';
import { IPatientSubmitData, IUserRole } from './types';
import {
  Email,
  Required,
  Birthday,
  PhoneNumber,
  Password,
} from '@components/Form/SignInUp/formValidationConstants';
import { registrationUser } from '@store/actionCreators/signUp';
import { userSignIn } from '@store/actionCreators/signIn';
import { ROUTS } from '@constants/routs';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import Loader from '@components/common/Loader/Loader';
import Error from '@components/common/Error/Error';

const SignUpPatient: React.FC<IUserRole> = ({ setUserRole, userRole }) => {
  const dispatch = useDispatch();

  const onSubmit = (data: IPatientSubmitData) => {
    data.userRole = userRole;
    dispatch(registrationUser(data));
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = useRef({});
  password.current = watch('password', '');

  const state = useTypesSelector((state) => state);
  const myRef = React.createRef<HTMLInputElement>();

  return (
    <FormContainer>
      {state.user.isAuth && <Redirect to={ROUTS.PERSONAL_ACCOUNT} />}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormName>Сreate an account </FormName>
        <DoctorCheckButton>
          Are you doctor?
          <span
            onClick={() => {
              setUserRole('doctor');
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
          name="lastName"
          register={register('lastName', Required)}
          errors={errors}
        />

        <Input
          primary
          label="Birthday"
          type="text"
          name="birthday"
          register={register('birthday', Birthday)}
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
          name="phone"
          register={register('phone', PhoneNumber)}
          label="Phone number"
          errors={errors}
        />

        <Input
          primary
          type="text"
          name="address"
          register={register('address', Required)}
          label="Address"
          errors={errors}
        />
        {/* <Input
          primary
          type="file"
          name="photo"
          register={register('photo')}
          label="Photo"
          errors={errors}
        /> */}
        <input type="file" {...register('photo')} />

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
            validate: (value: string) => value === password.current || 'The passwords do not match',
          })}
          errors={errors}
        />

        <ButtonBar>
          <Button type="submit" round>
            Sign Up
          </Button>
        </ButtonBar>
        {state.signUp.requestLoading ? (
          <Loader />
        ) : (
          state.signUp.requestError && <Error errorMessage={state.signUp.requestError} />
        )}
      </Form>
    </FormContainer>
  );
};

export default SignUpPatient;
