import React from 'react';
import { TextAreaWrapper, TextAreaLabel, TextAreaContainer } from './TextAreaStyle';

interface ITextAreaProps {
  value?: string;
  register?: any;
  label: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<ITextAreaProps> = ({ register, onChange, label, ...props }) => {
  return (
    <TextAreaWrapper>
      <TextAreaLabel>{label}</TextAreaLabel>
      <textarea {...props} {...register} onChange={onChange} />
    </TextAreaWrapper>
  );
};

export default TextArea;
