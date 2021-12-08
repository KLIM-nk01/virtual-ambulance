import React from 'react';
import { ChangeHandler, UseFormRegisterReturn } from 'react-hook-form';
import { TextAreaWrapper, TextAreaLabel, TextAreaContainer } from './TextAreaStyle';

interface ITextAreaProps {
  value?: string;
  // register?: (
  //   name: string,
  // ) => { onChange: ChangeHandler; onBlur: ChangeHandler; name: string; ref: React.Ref<any> };
  register?: UseFormRegisterReturn;
  label: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<ITextAreaProps> = ({ register, onChange, label, ...props }) => {
  console.log(register);
  return (
    <TextAreaWrapper>
      <TextAreaLabel>{label}</TextAreaLabel>
      <textarea {...props} {...register} onChange={onChange} />
    </TextAreaWrapper>
  );
};

export default TextArea;
