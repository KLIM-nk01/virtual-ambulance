import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { IDoctor } from './type';
import { Email, Expiriens, Password, PhoneNumber, Required } from './validationConstants';
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
import Select from '@components/common/Select/Select';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import Options from '@components/common/Select/Options';
import { useDispatch } from 'react-redux';
import { medCenterData } from '@data/medCenterData';
import { fetchMedCenters } from '@store/actionCreators/medCenters';

const SignUpDoctor: React.FC<IDoctor> = ({ setDoctor }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMedCenters());
  }, []);
  const onSubmit = (data: any) => console.log(data);
  const state = useTypesSelector((state) => state.medCenter);
  console.log(state);

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

        <QuestionWrapper>
          <span>-Choose a medical facility where you work</span>
          <Select name="WorkPlace">
            {state.medCenters.map((center) => {
              return <Options value={center.id}>{center.name}, Address: {center.address}</Options>;
            })}
          </Select>
        </QuestionWrapper>

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
