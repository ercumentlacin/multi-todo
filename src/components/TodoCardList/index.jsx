import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useStateValue } from "../../context/StateProvider";

import StyledTodoCardList from "./styles";
import CardHead from "../CardHead";
import TodoAdd from "../TodoAdd";
import TodoList from "../TodoList";
import TodoAddCategory from "../TodoAddCategory";

function TodoCardList() {
  const [{ allCards, todoList, todos }, dispatch] = useStateValue(); // eslint-disable-line

  return (
    <>
      {allCards.map(({ id, title }) => (
        <StyledTodoCardList key={id} className="card">
          <div className="card__head">
            <CardHead id={id} title={title} />
          </div>
          {/* card body */}
          <div className="card__body">
            <TodoAdd id={id} />
            {todoList.map(({ todoName, todoId, todoUniqId }) =>
              id === todoId ? (
                <TodoList
                  key={uuidv4()}
                  id={uuidv4()}
                  todoUniqId={todoUniqId}
                  todoName={todoName}
                />
              ) : null
            )}
          </div>
          <TodoAddCategory id={id} />
        </StyledTodoCardList>
      ))}
    </>
  );
}

export default TodoCardList;
