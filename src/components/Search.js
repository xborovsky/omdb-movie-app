import React from 'react';
import Input from './common/Input';
import { translate } from 'react-i18next';

const Search = ({searchText, onSearchTextChange, inputRef, t}) =>
    <div className="container">
        <div className="col-sm-12">
            <Input type="text" placeholder={t('search.placeholder')} classNames="form-control" text={searchText} onChange={onSearchTextChange} inputRef={inputRef} />
        </div>
    </div>
;

export default translate('translations')(Search);