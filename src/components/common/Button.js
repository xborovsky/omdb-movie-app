import React from 'react';
import PropTypes from 'prop-types';

const Button = ({type, value, classNames, onClick}) =>
    <button type={type} className={classNames} onClick={onClick}>{value}</button>
;

Button.propTypes = {
    type : PropTypes.string.isRequired,
    value : PropTypes.string.isRequired,
    classNames : PropTypes.string,
    onClick : PropTypes.func.isRequired
};

export default Button;