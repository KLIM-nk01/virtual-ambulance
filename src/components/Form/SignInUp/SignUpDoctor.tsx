import React, { useEffect, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { IDoctor } from './type';
import {
  Email,
  Expiriens,
  Password,
  PhoneNumber,
  Required
} from '@components/Form/SignInUp/formValidationConstants';
import Button from '@components/common/Button/Button';
import Input from '@components/common/Input/Input';
import {
  FormContainer,
  FormName,
  Form,
  ButtonBar,
  DoctorCheckButton,
  QuestionWrapper
} from './FormStyle';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import { fetchMedCenters } from '@store/actionCreators/medCenters';
import { SelectWrapper } from '@components/common/Select/SelectStyle';
import { fetchDoctorsDirection } from '@store/actionCreators/doctorsDirection';

const SignUpDoctor: React.FC<IDoctor> = ({ setDoctor }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMedCenters());
    dispatch(fetchDoctorsDirection());
  }, []);

  const onSubmit = (data: any) => console.log(data);

  const { medCenter, doctorsDirection } = useTypesSelector((state) => state);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control
  } = useForm();

  const password = useRef({});
  password.current = watch('password', '');

  const optionsMedcenter = medCenter.medCenters.map((medCenter) => {
    return {
      value: medCenter.id_medcenter,
      label: medCenter.name + ' Adress: ' + medCenter.address
    };
  });

  const optionsDoctorsDirection = doctorsDirection.directions.map(
    (direction) => {
      return {
        value: direction.id_direction,
        label: direction.direction
      };
    }
  );

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormName>Сreate dodoctors account </FormName>

        <DoctorCheckButton>
          Are you patient?
          <span
            onClick={() => {
              setDoctor && setDoctor(false);
            }}>
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
          {errors && errors['direction'] && (
            <p>{errors['direction']?.message}</p>
          )}
        </QuestionWrapper>

        <QuestionWrapper>
          <span>-Choose a medical facility where you work: </span>
          <Controller
            name="workPlace"
            control={control}
            rules={{ required: 'Please select a place where you work.' }}
            render={({ field }) => (
              <SelectWrapper>
                <Select {...field} options={optionsMedcenter} />
              </SelectWrapper>
            )}
          />
          {errors && errors['workPlace'] && (
            <p>{errors['workPlace']?.message}</p>
          )}
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
            validate: (value) =>
              value === password.current || 'The passwords do not match'
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
