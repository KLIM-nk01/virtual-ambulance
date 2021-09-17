import React, { useState } from 'react';
import { Input } from '../../Input/Input';

// interface IInputAtributs {
//   type: string;
//   value: string;
//   placeholder: string;
//   onChange: string;
//   style: {
//     width: string;
//     color: string;
//     boxShadow: boolean;
//     border: boolean;
//   };
// }

const Search: React.FC = () => {
  const [stateInput, setStateInput] = useState<string>('');
  return (
    <Input
      type="text"
      value={stateInput}
      placeholder="Search"
      onChange={(e) => setStateInput(e.target.value)}
    />
  );
};

export default Search;
