import React from 'react';

const Button = ({ type, onClick, className, value }) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {value}
    </button>
  );
};

export default Button;
