import React from 'react';

const Input = ({ name, value, onChange, placeholder, className }) => {
  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default Input;