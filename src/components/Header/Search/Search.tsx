import React, {useState} from 'react';
import {SearchInput} from "./SerchInput";

const Search: React.FC = () => {
    let [stateInput, setStateInput] = useState('')
    return (
        <SearchInput
            type={'text'}
            value={stateInput}
            placeholder={'Search'}
            onChange={(e) => setStateInput(e.target.value)}
            />

    );
};

export default Search;