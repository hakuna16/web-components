import React from 'react';
import PropTypes from 'prop-types';

/** A super lame component that says Hello with a custom message. */
const HelloWorld = ({message}) => {
    return(
        <div>{message}</div>
    );
}

HelloWorld.propTypes = {
    /** This is a Hello world Compoent */
    message: PropTypes.string.isRequired
  };
  
  HelloWorld.defaultProps = {
    message: 'World'
  };
export default HelloWorld;
