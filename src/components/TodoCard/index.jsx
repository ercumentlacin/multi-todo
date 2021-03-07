import React, { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import Input from "../Input";
import TodoItem from "../TodoItem";
import StyledTodoCard from "./styles";
import { useStateValue } from "../../context/StateProvider";
import TodoAddForm from "../TodoAddForm";

function TodoCard({ id }) {
  console.log(id);
  const [todoHead, setTodoHead] = useState("Untitled Todo");
  const [{ todos }, dispatch] = useStateValue(); // eslint-disable-line

  const todoHeading = (e) => {
    e.preventDefault();
    setTodoHead(e.target.value);
  };

  console.log(todos);
  const todoList = todos?.map((todoField) => (
    <TodoItem key={todoField.id} id={todoField.id} todo={todoField.todoName} />
  ));

  return (
    <StyledTodoCard id={id} className="p-3">
      {/* todo head */}
      <h3 className="text-center">{todoHead}</h3>
      <Input
        value={todoHead}
        onChange={todoHeading}
        placeholder="Todo Heading"
      />
      <div className="border-bottom  mt-2" />
      {/* todo body */}
      <TodoAddForm todoHead={todoHead} id={uuidv4()} key={uuidv4()} />
      <ul>{todoList}</ul>
    </StyledTodoCard>
  );
}

export default TodoCard;

/* eslint-disable */
TodoCard.propTypes = {
  id: PropTypes.string.isRequired,
};

TodoCard.defaultProps = {
  id: "idd",
};
