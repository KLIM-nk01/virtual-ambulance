import React, { useState } from 'react';
import { Input } from '@components/common/Input/Input';


const Search: React.FC = () => {
  const [stateInput, setStateInput] = useState<string>('');
  return <Input type="text" value={stateInput} placeholder="Search" onChange={(e) => setStateInput(e.target.value)} />;
};

export default Search;
