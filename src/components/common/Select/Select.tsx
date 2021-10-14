import React, { useState } from 'react';
import Select from 'react-select';
import { SelectWrapper } from './SelectStyle';

// interface ISelectProps {
//     options: {
//         value: string,
//         label: string
//     }[],

// }

const SelectComponent = (props: any) => {
  const [optionsValue, setOptionsValue] = useState(props.options[0]);

  const onChange = (selectedOption: any) => {
    setOptionsValue(selectedOption);
    props.getOptionValue(selectedOption);
  };

  return (
    <SelectWrapper>
      <Select
        options={props.options}
        onChange={onChange}
        value={optionsValue}
      />
    </SelectWrapper>
  );
};

export default SelectComponent;
