import React, { useState } from 'react';
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
  id?: string;
  for?: string;
  fileName?: string;
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
}) => {
  // const [fileName, setFileName] = useState('');
  return (
    <InputGroup fileName={fileName} primary={primary} type={type}>
      <label htmlFor={id}>{fileName ? fileName : label}</label>
      <input
        id={id}
        name={name}
        accept={accept}
        placeholder={placeholder}
        type={type}
        {...register}
        
      />
      {errors && errors[name] && <p>{errors[name]?.message}</p>}
    </InputGroup>
  );
};

export default Input;
