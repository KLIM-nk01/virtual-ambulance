import React from 'react';
import { InputGroup } from './InputStyle';

interface IInput {
  primary?: boolean;
  placeholder?: string;
  type?: string;
  checkbox?: boolean;
  name: string;
  register?: any;
  errors?: {
    [key: string]: {
      type: string;
      message: string;
    };
  };
}

const Input: React.FC<IInput> = ({
  primary,
  type,
  placeholder,
  register,
  children,
  errors,
  name,
}) => {
  return (
    <InputGroup primary={primary} type={type}>
      <label>{placeholder}</label>
      <input {...register} type={type} />
      {errors && errors[name] && <p>{errors[name]?.message}</p>}

      {/* {children} */}
    </InputGroup>
  );
};

export default Input;
