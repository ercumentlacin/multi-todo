import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useStateValue } from "../../context/StateProvider";
import Button from "../Button";
import StyledTodoAddForm from "./styles";

function TodoAddForm({ todoHead }) {
  const [todoName, setTodoName] = useState("");
  const [{ todos }, dispatch] = useStateValue(); // eslint-disable-line

  //   todo add
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      item: {
        id: uuidv4(),
        todoName,
        todoHead,
      },
    });
    setTodoName("");
  };
  return (
    <StyledTodoAddForm onSubmit={handleSubmit}>
      <div className="my-2 d-flex align-items-center">
        <input
          className="w-100 todo__add border-0"
          type="text"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
        />

        <Button
          key={uuidv4()}
          onSubmit={handleSubmit}
          className="ms-2"
          buttonName="Add"
        />
      </div>
    </StyledTodoAddForm>
  );
}

export default TodoAddForm;
