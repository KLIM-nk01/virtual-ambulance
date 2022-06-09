import React, { useEffect, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { Redirect } from 'react-router-dom';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import { IUserRole } from './types';
import { fetchMedCenters } from '@store/actionCreators/medCenters';
import { IUserData } from '@store/types/signUp';
import { fetchDoctorsDirection } from '@store/actionCreators/doctorsDirection';
import { registrationUser } from '@store/actionCreators/signUp';
import {
  FormContainer,
  FormName,
  Form,
  ButtonBar,
  DoctorCheckButton,
  QuestionWrapper,
  SelectWrapper,
} from './FormStyle';
import {
  Email,
  Experience,
  Password,
  PhoneNumber,
  Required,
} from '@components/Form/SignInUp/formValidationConstants';
import Button from '@components/common/Button/Button';
import Input from '@components/common/Input/Input';
import { ROUTS } from '@constants/routs';
import Loader from '@components/common/Loader/Loader';
import Error from '@components/common/Error/Error';
import { ErrorStyled } from '@components/common/Input/InputStyle';

const SignUpDoctor: React.FC<IUserRole> = ({ setUserRole, userRole }) => {
  const dispatch = useDispatch();
  const { medCenter, doctorsDirection, signUp, user } = useTypesSelector((state) => state);
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

  const onSubmit = (data: IUserData) => {
    data.userRole = userRole;
    dispatch(registrationUser(data));
  };

  const optionsMedCenter = medCenter.medCenters.map((medCenter) => {
    return {
      value: medCenter._id,
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
      {user.isAuth ? (
        <Redirect to={ROUTS.PERSONAL_ACCOUNT} />
      ) : (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormName>Регистрация для доктора </FormName>

          <DoctorCheckButton>
            Вы пациент?
            <span
              onClick={() => {
                setUserRole('patient');
              }}
            >
             Нажмите здесь
            </span>
          </DoctorCheckButton>

          <Input
            primary
            label="Имя"
            type="text"
            name="name"
            register={register('name', Required)}
            errors={errors}
          />

          <Input
            primary
            label="Фамилия"
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
            label="Почта"
            errors={errors}
          />

          <Input
            primary
            type="text"
            name="phone"
            register={register('phone', PhoneNumber)}
            label="Номер телефона"
            errors={errors}
          />

          <Input
            primary
            type="text"
            name="experience"
            register={register('experience', Experience)}
            label="Опыт"
            errors={errors}
          />
          <Input
            primary
            type="file"
            name="photo"
            register={register('photo')}
            label="Фото"
            errors={errors}
            id={'photo'}
          />

          <QuestionWrapper>
            <span>Выберите ваше направние</span>
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
              <ErrorStyled>{errors['direction']?.message}</ErrorStyled>
            )}
          </QuestionWrapper>

          <QuestionWrapper>
            <span>Укажите место, где вы работаете </span>
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
            {errors && errors['workPlace'] && <ErrorStyled>{errors['workPlace']?.message}</ErrorStyled>}
          </QuestionWrapper>

          <Input
            primary
            name="password"
            type="password"
            label="Пароль"
            register={register('password', Password)}
            errors={errors}
          />

          <Input
            primary
            name="password_repeat"
            type="password"
            label="Повторите пароль"
            register={register('password_repeat', {
              validate: (value) => value === password.current || 'The passwords do not match',
            })}
            errors={errors}
          />

          <ButtonBar>
            <Button type="submit" round>
              Зарегистрироваться
            </Button>
          </ButtonBar>
          {signUp.requestLoading ? (
            <Loader />
          ) : (
            signUp.requestError && <Error errorMessage={signUp.requestError} />
          )}
        </Form>
      )}
    </FormContainer>
  );
};

export default SignUpDoctor;
