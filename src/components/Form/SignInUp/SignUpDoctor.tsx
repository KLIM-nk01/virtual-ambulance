import React, { useEffect, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { Redirect } from 'react-router-dom';
import { IDoctorSubmitData, IUserRole } from './types';
import {
  Email,
  Experience,
  Password,
  PhoneNumber,
  Required,
} from '@components/Form/SignInUp/formValidationConstants';
import Button from '@components/common/Button/Button';
import Input from '@components/common/Input/Input';
import {
  FormContainer,
  FormName,
  Form,
  ButtonBar,
  DoctorCheckButton,
  QuestionWrapper,
} from './FormStyle';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import { fetchMedCenters } from '@store/actionCreators/medCenters';
import { SelectWrapper } from '@components/common/Select/SelectStyle';
import { fetchDoctorsDirection } from '@store/actionCreators/doctorsDirection';
import { registrationUser } from '@store/actionCreators/signUp';
import { userSignIn } from '@store/actionCreators/signIn';
import { ROUTS } from '@constants/routs';
import Loader from '@components/common/Loader/Loader';
import Error from '@components/common/Error/Error';

const SignUpDoctor: React.FC<IUserRole> = ({ setUserRole, userRole }) => {
  const dispatch = useDispatch();
  const { medCenter, doctorsDirection, signIn, signUp, user } = useTypesSelector((state) => state);
  const password = useRef({});
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm();

  password.current = watch('password', '');

  useEffect(() => {
    dispatch(fetchMedCenters());
    dispatch(fetchDoctorsDirection());
  }, []);

  const onSubmit = (data: IDoctorSubmitData) => {
    data.userRole = userRole;
    dispatch(registrationUser(data));
  };

  const optionsMedCenter = medCenter.medCenters.map((medCenter) => {
    return {
      value: medCenter.id_medcenter,
      label: medCenter.name + ' Address: ' + medCenter.address,
    };
  });

  const optionsDoctorsDirection = doctorsDirection.directions.map((direction) => {
    return {
      value: direction.id_direction,
      label: direction.direction,
    };
  });

  return (
    <FormContainer>
      {user.isAuth && <Redirect to={ROUTS.PERSONAL_ACCOUNT} />}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormName>Сreate doctors account </FormName>

        <DoctorCheckButton>
          Are you patient?
          <span
            onClick={() => {
              setUserRole('patient');
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
          name="experience"
          register={register('experience', Experience)}
          label="Experience"
          errors={errors}
        />

        <QuestionWrapper>
          <span>-Select your direction</span>
          <Controller
            name="direction"
            control={control}
            rules={{ required: 'Please select your direction.' }}
            render={({ field }) => (
              <SelectWrapper>
                <Select {...field} options={optionsDoctorsDirection} />
              </SelectWrapper>
            )}
          />
          {errors && errors['direction'] && <p>{errors['direction']?.message}</p>}
        </QuestionWrapper>

        <QuestionWrapper>
          <span>-Choose a medical facility where you work: </span>
          <Controller
            name="workPlace"
            control={control}
            rules={{ required: 'Please select a place where you work.' }}
            render={({ field }) => (
              <SelectWrapper>
                <Select {...field} options={optionsMedCenter} />
              </SelectWrapper>
            )}
          />
          {errors && errors['workPlace'] && <p>{errors['workPlace']?.message}</p>}
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
        {signUp.requestLoading ? (
          <Loader />
        ) : (
          signUp.requestError && <Error errorMessage={signUp.requestError} />
        )}
      </Form>
    </FormContainer>
  );
};

export default SignUpDoctor;
