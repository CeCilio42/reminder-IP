import React from 'react';
import PropTypes from 'prop-types';

const Button = React.memo(({ 
  children, 
  variant = 'primary', 
  onClick, 
  disabled = false 
}) => {
  return (
    <button
      className={`btn btn-${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
});

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'error']),
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

export default Button; 