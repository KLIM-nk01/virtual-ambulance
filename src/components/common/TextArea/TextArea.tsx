import React from 'react';
import { TextAreaWrapper, TextAreaLabel, TextAreaContainer } from './TextAreaStyle';

interface ITextAreaProps {
  value?: string;
  register?: any;
  label: string;
  name: string;
  onKeyUp: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextArea: React.FC<ITextAreaProps> = ({ value, register, label, name, onKeyUp }) => {
  return (
    <TextAreaWrapper>
      <TextAreaLabel>{label}</TextAreaLabel>
      <TextAreaContainer onKeyUp={onKeyUp} name={name} value={value} {...register} />
    </TextAreaWrapper>
  );
};

export default TextArea;
