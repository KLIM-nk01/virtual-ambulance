import React from 'react';
import { OptionsWrapper } from './SelectStyle';

interface IOptionsPros {
  value: string;
}

const Options: React.FC<IOptionsPros> = ({ value, children }) => {
  return <OptionsWrapper value={value}>{children}</OptionsWrapper>;
};

export default Options;
