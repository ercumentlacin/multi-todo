import React from "react";
import PropTypes from "prop-types";
import avatarImage from "../../assets/avatarImage.jpg";

function Profile({ name, lastname }) {
  return (
    <div className="d-flex align-items-center">
      <img src={avatarImage} className="img-avatar" alt="avatar" />
      <div>
        <p className="m-0">{name.toLocaleUpperCase()}</p>
        <p className="m-0">{lastname.toLocaleUpperCase()}</p>
      </div>
    </div>
  );
}

export default Profile;

Profile.propTypes = {
  name: PropTypes.string,
  lastname: PropTypes.string,
};

Profile.defaultProps = {
  name: "John",
  lastname: "Doe",
};
