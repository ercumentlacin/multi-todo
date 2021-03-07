import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { useStateValue } from "../../context/StateProvider";
import Button from "../Button";

function TodoItem({ todo, id }) {
  const [{ todos }, dispatch] = useStateValue(); // eslint-disable-line

  const handleDelete = () => {
    dispatch({
      type: "DELETE_TODO",
      id,
    });
  };

  return (
    <li className="form-check d-flex align-items-center">
      <input className="form-check-input me-2" type="checkbox" value="" />
      <input className="w-100 border-0" type="text" defaultValue={todo} />
      <Button key={uuidv4()} buttonName="Delete" onClick={handleDelete} />
    </li>
  );
}

export default TodoItem;

TodoItem.propTypes = {
  todo: PropTypes.string,
  id: PropTypes.string,
};

TodoItem.defaultProps = {
  todo: "",
  id: "",
};
