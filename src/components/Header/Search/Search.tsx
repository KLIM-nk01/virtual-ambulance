import Input from '@components/common/Input/Input';
import React from 'react';
import { SearchWrapper } from './SearchStyle';
// import { Input } from '@components/common/Input/InputStyle';

const Search: React.FC = () => {
  // const [stateInput, setStateInput] = useState<string>('');
  return (
    <SearchWrapper>
      <Input placeholder="Search" name="search" type="text" />
    </SearchWrapper>
  );
};

export default Search;
