import React, { useState } from 'react';

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div>
      <label>{label}</label>
      <input
        className="w-100 mb-3"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span className="text-danger">{errorMessage}</span>
    </div>
  );
};

export default FormInput;
