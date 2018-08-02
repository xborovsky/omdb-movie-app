import React from 'react';
import PropTypes from 'prop-types';

const Input = ({type, classNames, text, placeholder, onChange, inputRef}) => {
    switch (type) {
        case 'text':
            return <input type="text" className={classNames} value={text} placeholder={placeholder} onChange={onChange} ref={inputRef} />;
        default:
            throw Error('Unsupported input type!');
    }
};

Input.propTypes = {
    type : PropTypes.oneOf(['text']).isRequired,
    classNames : PropTypes.oneOfType([
        PropTypes.string, PropTypes.object
    ]),
    defaultText : PropTypes.string,
    placeholder : PropTypes.string,
    inputRef : PropTypes.func
};

export default Input;