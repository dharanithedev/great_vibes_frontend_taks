import React from 'react';

const Button = ({ type, onClick, className, value }) => {
  return (
    <button type={type} onClick={onClick} className={`py-2 px-4 rounded-md ${className}`}>
      {value}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  className: '',
};

export default Button;
