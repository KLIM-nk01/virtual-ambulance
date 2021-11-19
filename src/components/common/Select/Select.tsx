import React, { useState } from 'react';
import Select from 'react-select';
import { SelectWrapper } from './SelectStyle';

const SelectComponent = (props: { options: string[]; getOptionValue: (value: string) => void }) => {
  const [optionsValue, setOptionsValue] = useState(props.options[0]);

  const onChange = (selectedOption: any) => {
    setOptionsValue(selectedOption);
    props.getOptionValue(selectedOption);
  };

  return (
    <SelectWrapper>
      <Select options={props.options} onChange={onChange} value={optionsValue} />
    </SelectWrapper>
  );
};

export default SelectComponent;
