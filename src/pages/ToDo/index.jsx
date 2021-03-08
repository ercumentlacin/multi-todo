import React from "react";
import { v4 as uuidv4 } from "uuid";
import TodoStyle from "./styles";
import Profile from "../../components/Profile";
import Categorys from "../../components/Categorys";
import CreateCard from "../../components/CreateCard";
// eslint-disable-next-line
import TodoCard from "../../components/TodoCard";
import { useStateValue } from "../../context/StateProvider";
import CardHead from "../../components/CardHead";
import TodoAdd from "../../components/TodoAdd";
import TodoList from "../../components/TodoList";

function ToDo() {
  const name = localStorage.getItem("name");
  const lastname = localStorage.getItem("lastname");
  // eslint-disable-next-line
  const [{ allCards, todoList }, dispatch] = useStateValue(); // eslint-disable-line

  const categoryIems = [
    { id: uuidv4(), categoryName: "Everything" },
    { id: uuidv4(), categoryName: "Work" },
    { id: uuidv4(), categoryName: "Personal" },
    { id: uuidv4(), categoryName: "School" },
  ].map(({ categoryName, id }) => (
    <Categorys key={id} categoryName={categoryName} />
  ));

  const cardList = allCards.map(({ id, title }) => (
    <div key={id} className="card">
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
    </div>
  ));

  return (
    <TodoStyle className="container">
      <div className="row">
        <div className="col-lg-10 offset-lg-1 pt-5">
          <div className="row">
            {/* profile & categorys area */}
            <div className="col-lg-3 ">
              <Profile name={name} lastname={lastname} />
              <div className="my-2">{categoryIems}</div>
            </div>
            {/* todo cards */}
            <div className="col-lg-9 ps-lg-5">
              <div className="grid-card">
                <CreateCard />
                {/* {todoCardItemsList} */}
                {cardList}
              </div>
            </div>
          </div>
        </div>
      </div>
    </TodoStyle>
  );
}

export default ToDo;
