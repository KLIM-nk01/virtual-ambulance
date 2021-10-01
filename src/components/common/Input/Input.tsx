import React from 'react';
import { InputGroup } from './InputStyle';

interface IInput {
  primary?: boolean;
  placeholder?: string;
  type?: string;
  checkbox?: boolean;
  name?: string;
  register?: any;
}

const Input: React.FC<IInput> = ({ primary, type, placeholder, register }) => {
  return (
    <InputGroup primary={primary} type={type}>
      <input {...register} required type={type} />
      <label>{placeholder}</label>
    </InputGroup>
  );
};

export default Input;
