import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({type, heading, message}) =>
    <div className="row">
        <div className="col-12 col-md-6 offset-md-3">
            <div className={`alert alert-${type}`} role="alert">
                <h4 className="alert-heading">{heading}</h4>
                <p>{message}</p>
            </div>
        </div>
    </div>
;

Alert.propTypes = {
    type : PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']).isRequired,
    heading : PropTypes.string.isRequired,
    message : PropTypes.string.isRequired
};

export default Alert;