import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useStateValue } from "../../context/StateProvider";
import FormTodoAdd from "./styles";

function TodoAdd({ id }) {
  const [{ allCards, todoList }, dispatch] = useStateValue(); // eslint-disable-line

  const [todoName, setTodoName] = useState("add todo");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      todos: {
        todoId: id,
        todoUniqId: uuidv4(),
        todoName,
      },
    });
  };
  return (
    <FormTodoAdd onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
      />
      <button onSubmit={handleSubmit} type="submit">
        add
      </button>
    </FormTodoAdd>
  );
}

export default TodoAdd;
