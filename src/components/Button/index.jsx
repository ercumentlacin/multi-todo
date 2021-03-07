import React from "react";
import PropTypes from "prop-types";
import StyledButton from "./styles";

function Button({ buttonName, onClick }) {
  return (
    <StyledButton
      onClick={onClick}
      type={buttonName === "Add" ? "submit" : "button"}
      className="btn btn-danger ms-auto"
    >
      {buttonName}
    </StyledButton>
  );
}

export default Button;

Button.propTypes = {
  buttonName: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  buttonName: "",
  onClick: () => {},
};
