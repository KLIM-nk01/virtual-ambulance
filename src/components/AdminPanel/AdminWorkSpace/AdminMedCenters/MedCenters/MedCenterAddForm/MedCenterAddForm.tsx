import Input from '@components/common/Input/Input';
import { FormName } from '@components/Form/SignInUp/FormStyle';
import React from 'react';
import { useForm } from 'react-hook-form';
import { MedCenterFormWrapper } from './MedCenterAddFormStyle';

const MedCenterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <MedCenterFormWrapper>
      <FormName>Edit or create new medical center</FormName>
      <Input primary label="Email" name="email" register={register('email')} errors={errors} />
    </MedCenterFormWrapper>
  );
};

export default MedCenterForm;
