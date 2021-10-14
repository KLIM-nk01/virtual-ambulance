import React from 'react';
import Options from './Options';
import { SelectWrapper } from './SelectStyle';
interface ISelectProps {
    name: string
}
const Select: React.FC<ISelectProps> = ({name, children}) => {
  return (
    <SelectWrapper name={name}>
      {children}
    </SelectWrapper>
  );
};

export default Select;
