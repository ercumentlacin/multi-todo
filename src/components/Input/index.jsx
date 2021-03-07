import React from "react";
import PropTypes from "prop-types";
import StyledInput from "./styles";

function Input({ value, onChange, placeholder }) {
  return (
    <StyledInput
      type="text"
      className="form-control name"
      defaultValue={value}
      onChange={onChange}
      placeholder={placeholder}
      required
    />
  );
}

export default Input;

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  value: "",
  onChange: (prev) => prev,
  placeholder: "",
};
