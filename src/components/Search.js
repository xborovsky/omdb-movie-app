import React from 'react';
import Input from './common/Input';

const Search = ({searchText, onSearchTextChange, inputRef}) =>
    <div className="container">
        <div className="col-sm-12">
            <Input type="text" placeholder="type movie name to search" classNames="form-control" text={searchText} onChange={onSearchTextChange} inputRef={inputRef} />
        </div>
    </div>
;

export default Search;