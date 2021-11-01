import React from 'react';
import { InputGroup } from './InputStyle';

interface IInput {
  primary?: boolean;
  label?: string;
  placeholder?: string;
  type?: string;
  checkbox?: boolean;
  name: string;
  register?: any;
  accept?: string;
  errors?: {
    [key: string]: {
      type: string;
      message: string;
    };
  };
  ref?: any;
}

const Input: React.FC<IInput> = ({
  primary,
  type,
  label,
  register,
  errors,
  name,
  placeholder,
  accept,
  ref,
}) => {
  return (
    <InputGroup primary={primary} type={type}>
      <label>{label}</label>
      <input
        name={name}
        accept={accept}
        placeholder={placeholder}
        {...register}
        type={type}
      />
      {errors && errors[name] && <p>{errors[name]?.message}</p>}
    </InputGroup>
  );
};

export default Input;
