import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { useStateValue } from "../../context/StateProvider";
import StyledTodoAddCategory from "./styles";

function TodoAddCategory({ id }) {
  const [{ allCards, todoList, todos }, dispatch] = useStateValue(); // eslint-disable-line

  const [categoryName, setCategoryName] = useState("add category"); // eslint-disable-line

  function handleCategoryChnage(e) {
    console.log(e);
    setCategoryName(e.target.value);
  }

  function addCategory(e) {
    e.preventDefault();
    dispatch({
      type: "ADD_CATEGORY",
      todos: {
        categoryId: id,
        categoryName,
      },
    });
  }

  const todosCategoryList = todos
    .filter((value) => value.categoryId === id)
    .map((value) => <li key={uuidv4()}>{value.categoryName}</li>);

  console.log("1. allCards", allCards);
  console.log("2. todos", todos);
  console.log("----------------------");

  return (
    <StyledTodoAddCategory className="flex flex-column mt-auto">
      <span className="border-top w-100 d-block border-dark my-2" />
      <form onSubmit={addCategory}>
        <input
          type="text"
          onChange={handleCategoryChnage}
          value={categoryName}
        />
        <button type="submit">add</button>
      </form>
      <ul>{todosCategoryList}</ul>
    </StyledTodoAddCategory>
  );
}

export default TodoAddCategory;
