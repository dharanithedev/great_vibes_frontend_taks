import React from 'react';

const RadioButton = ({ name, value, label, checked, onChange, className }) => {
  return (
    <label className={className.radio_button_lable}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className={className.radio_button}
      />
      <span className={className.radio_button_span}>{label}</span>
    </label>
  );
};

export default RadioButton;
