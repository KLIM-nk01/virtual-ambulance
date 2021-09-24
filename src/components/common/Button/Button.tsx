import React from 'react';
import { ButtonStyle } from './ButtonStyle';

interface IProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
 
  ref?:
    | ((instance: HTMLButtonElement | null) => void)
    | React.RefObject<HTMLButtonElement>
    | null
    | undefined;
 
  variant?: string;
  size?: string;
  
}

const Button: React.FC<IProps> = ({ children, ...props }) => {
  
  return <ButtonStyle {...props}>{children}</ButtonStyle>;
};

export default Button;
