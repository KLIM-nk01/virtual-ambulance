import React from 'react';
import { InputGroup } from './InputStyle';

interface IInput {
  primary?: boolean;
  placeholder?: string;
  type?: string;
  checkbox?: boolean;
}

const Input: React.FC<IInput> = (props) => {
  
  return (
    <InputGroup {...props}>
      <input required type={props.type} />
      <label>{props.placeholder}</label>
    </InputGroup>
  );
};

export default Input;
