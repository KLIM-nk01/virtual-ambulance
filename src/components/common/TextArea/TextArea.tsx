import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { TextAreaWrapper, TextAreaLabel, TextAreaStyled } from './TextAreaStyle';

interface ITextAreaProps {
  value?: string;
  register?: UseFormRegisterReturn;
  label: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<ITextAreaProps> = ({ register, onChange, label, ...props }) => {
  return (
    <TextAreaWrapper>
      <TextAreaLabel>{label}</TextAreaLabel>
      <TextAreaStyled {...props} {...register} onChange={onChange} />
    </TextAreaWrapper>
  );
};

export default TextArea;
