import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { useStateValue } from "../../context/StateProvider";
import StyledTodoAddCategory from "./styles";

function TodoAddCategory({ id }) {
  const [{ todos }, dispatch] = useStateValue();
  const [categoryName, setCategoryName] = useState("add category");

  function handleCategoryChnage(e) {
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

  const uniqCategorys = todos.filter(
    (value, index, array) =>
      !index || value.categoryName !== array[index - 1].categoryName
  );

  const todosCategoryList = uniqCategorys
    .filter((value) => value.categoryId === id)
    .map((value) => <li key={uuidv4()}>{value.categoryName}</li>);

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
