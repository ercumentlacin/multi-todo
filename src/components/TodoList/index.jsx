import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useStateValue } from "../../context/StateProvider";
import FormTodoList from "./styles";

function TodoList({ todoName, todoUniqId }) {
  const [newTodoName, setNewTodoName] = useState(todoName);
  let [{ todoList }, dispatch] = useStateValue(); // eslint-disable-line

  const handleDelete = () => {
    dispatch({
      type: "DELETE_TODO",
      id: todoUniqId,
    });
  };

  return (
    <FormTodoList id={uuidv4()} onSubmit={(e) => e.preventDefault()}>
      <>
        <input type="checkbox" />
        <input
          type="text"
          value={newTodoName}
          onChange={(e) => setNewTodoName(e.target.value)}
        />
        <button onClick={handleDelete} type="button">
          delete
        </button>
      </>
    </FormTodoList>
  );
}

export default TodoList;
