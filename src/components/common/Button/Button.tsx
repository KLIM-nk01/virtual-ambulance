import React from 'react';
import { ButtonStyle } from './ButtonStyle';

interface IProps {
  styleButton?: {};
}

const Button: React.FC<IProps> = ({ styleButton, children }) => {
  return <ButtonStyle {...styleButton}>{children}</ButtonStyle>;
};

export default Button;
