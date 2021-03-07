import React from "react";
import PropTypes from "prop-types";

function Categorys({ categoryName }) {
  return (
    <div className="form-check">
      <label className="form-check-label" htmlFor="flexCheckDefault">
        {categoryName.toUpperCase()}
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
      </label>
    </div>
  );
}

export default Categorys;

Categorys.propTypes = {
  categoryName: PropTypes.string,
};

Categorys.defaultProps = {
  categoryName: "Everything",
};
