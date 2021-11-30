import React from 'react';
import { TextAreaWrapper, TextAreaLabel, TextAreaContainer } from './TextAreaStyle';

interface ITextAreaProps {
  value?: string;
  register?: any;
  label: string;
  name: string;
}

const TextArea: React.FC<ITextAreaProps> = ({ value, register, label, name }) => {
  return (
    <TextAreaWrapper>
      <TextAreaLabel>{label}</TextAreaLabel>
      <TextAreaContainer name={name} value={value} {...register} />
    </TextAreaWrapper>
  );
};

export default TextArea;
