import React, { useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { InputGroup, InputStyled, LabelStyled, ErrorStyled } from './InputStyle';

interface IInput
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  ref?:
    | ((instance: HTMLInputElement | null) => void)
    | React.RefObject<HTMLInputElement>
    | null
    | undefined;

  primary?: boolean;
  label?: string;
  name: string;
  register?: UseFormRegisterReturn;
  errors?: {
    [key: string]: {
      type: string;
      message: string;
    };
  };
  id?: string;
  fileName?: string;
}

const Input: React.FC<IInput> = ({
  primary,
  type,
  label,
  register,
  errors,
  name,
  id,
  fileName,
  onChange,
  ...props
}) => {
  const [inputFileName, setInputFileName] = useState('Selected photo');
  const fileOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target?.files && setInputFileName(e.target.files[0].name);
  };

  return (
    <InputGroup>
      <LabelStyled htmlFor={id} primary={primary} type={type} inputFileName={inputFileName}>
        {type === 'file' ? inputFileName : label}
      </LabelStyled>
      <InputStyled
        id={id}
        name={name}
        type={type}
        primary={primary}
        {...register}
        {...props}
        onChange={type === 'file' ? fileOnChange : onChange}
      />

      {errors && errors[name] && <ErrorStyled>{errors[name]?.message}</ErrorStyled>}
    </InputGroup>
  );
};

export default Input;
