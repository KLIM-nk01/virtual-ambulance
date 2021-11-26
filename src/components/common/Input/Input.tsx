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
  id?: string;
  for?: string;
  fileName?: string;
  value?: string;
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
  id,
  fileName,
  value,
  ...props
}) => {
  return (
    <InputGroup fileName={fileName} primary={primary} type={type}>
      <label htmlFor={id}>{fileName ? fileName : label}</label>
      <input id={id} name={name} type={type} value={value} {...register} {...props} />
      {errors && errors[name] && <p>{errors[name]?.message}</p>}
    </InputGroup>
  );
};

export default Input;
