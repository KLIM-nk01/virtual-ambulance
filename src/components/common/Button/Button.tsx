import React from 'react';
import { ButtonStyle } from './ButtonStyle';

interface IProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  backgroundColor?: string;
  primary?: boolean;
  width?: string;
  secondary?: boolean;
  ref?:
    | ((instance: HTMLButtonElement | null) => void)
    | React.RefObject<HTMLButtonElement>
    | null
    | undefined;
}

const Button: React.FC<IProps> = ({ children, ...rest }) => {
  return <ButtonStyle {...rest}>{children}</ButtonStyle>;
};

export default Button;
