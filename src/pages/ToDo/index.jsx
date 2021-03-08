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

function ToDo() {
  const name = localStorage.getItem("name");
  const lastname = localStorage.getItem("lastname");
  // eslint-disable-next-line
  const [{ allCards }] = useStateValue();

  const categoryIems = [
    { id: uuidv4(), categoryName: "Everything" },
    { id: uuidv4(), categoryName: "Work" },
    { id: uuidv4(), categoryName: "Personal" },
    { id: uuidv4(), categoryName: "School" },
  ].map(({ categoryName, id }) => (
    <Categorys key={id} categoryName={categoryName} />
  ));

  // eslint-disable-next-line
  // const todoCardItemsList = todoCardItems.map(() => (
  //   <TodoCard id={uuidv4()} key={uuidv4()} />
  // ));

  const cardList = allCards.map(({ id, title, todos }) => (
    <div key={id} className="card">
      <div className="card__head">
        <CardHead id={id} title={title} />
      </div>
      {/* card body */}
      <div className="card__body">
        <form>
          <input type="text" defaultValue="add todo" />
          <button type="submit">add</button>
        </form>
        {todos.map((v) => (
          <form v={v} key={uuidv4()}>
            <input type="checkbox" name="" id="" />
            <input type="text" value="add todo" />
            <button type="submit">add</button>
          </form>
        ))}
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
