import React from "react";
import { v4 as uuidv4 } from "uuid";

import TodoStyle from "./styles";
import Profile from "../../components/Profile";
import Categorys from "../../components/Categorys";
import CreateCard from "../../components/CreateCard";

import TodoCardList from "../../components/TodoCardList";
import { useStateValue } from "../../context/StateProvider";

function ToDo() {
  const [{ todos }] = useStateValue();
  const name = localStorage.getItem("name");
  const lastname = localStorage.getItem("lastname");

  const uniqCategorys = todos.filter(
    (value, index, array) =>
      !index || value.categoryName !== array[index - 1].categoryName
  );
  const categoryItems = uniqCategorys.map(({ categoryName }) => (
    <Categorys key={uuidv4()} categoryName={categoryName} />
  ));

  return (
    <TodoStyle className="container">
      <div className="row">
        <div className="col-lg-10 offset-lg-1 pt-5">
          <div className="row">
            {/* profile & categorys area */}
            <div className="col-lg-3 py-3">
              <Profile name={name} lastname={lastname} />
              <div className="my-2">{categoryItems}</div>
            </div>
            {/* todo cards */}
            <div className="col-lg-9 ps-lg-5 py-3">
              <div className="grid-card">
                <CreateCard />
                <TodoCardList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </TodoStyle>
  );
}

export default ToDo;
