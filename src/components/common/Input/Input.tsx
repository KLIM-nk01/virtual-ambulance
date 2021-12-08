import React, { useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { FileName, InputGroup } from './InputStyle';

interface IInput {
  primary?: boolean;
  label?: string;
  placeholder?: string;
  type?: string;
  checkbox?: boolean;
  name: string;
  register?: UseFormRegisterReturn;
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
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IInput> = ({
  primary,
  type,
  label,
  register,
  errors,
  name,
  accept,
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
    <InputGroup inputFileName={inputFileName} fileName={fileName} primary={primary} type={type}>
      <label htmlFor={id}>{type === 'file' ? inputFileName : label}</label>
      <input
        id={id}
        name={name}
        type={type}
        {...register}
        {...props}
        onChange={type === 'file' ? fileOnChange : onChange}
      />

      {errors && errors[name] && <p>{errors[name]?.message}</p>}
    </InputGroup>
  );
};

export default Input;
