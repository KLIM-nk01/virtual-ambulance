import React from 'react';
import { TextAreaWrapper, TextAreaLabel, TextAreaContainer } from './TextAreaStyle';

interface ITextAreaProps {
  value?: string;
  register?: any;
  label: string;
  name: string;
  onKeyUp?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextArea: React.FC<ITextAreaProps> = ({ register, label, ...props }) => {
  return (
    <TextAreaWrapper>
      <TextAreaLabel>{label}</TextAreaLabel>
      <TextAreaContainer {...props} {...register} />
    </TextAreaWrapper>
  );
};

export default TextArea;
