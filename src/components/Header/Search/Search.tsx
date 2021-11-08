import React from 'react';
import Input from '@components/common/Input/Input';
import { SearchWrapper } from './SearchStyle';

const Search: React.FC = () => {

  return (
    <SearchWrapper>
      <Input placeholder="Search" name="search" type="text" />
    </SearchWrapper>
  );
};

export default Search;
