import React from "react";
import { v4 as uuidv4 } from "uuid";
import TodoStyle from "./styles";
import Profile from "../../components/Profile";
import Categorys from "../../components/Categorys";
import CreateCard from "../../components/CreateCard";

import TodoCardList from "../../components/TodoCardList";

function ToDo() {
  const name = localStorage.getItem("name");
  const lastname = localStorage.getItem("lastname");

  const categoryIems = [
    { id: uuidv4(), categoryName: "Everything" },
    { id: uuidv4(), categoryName: "Work" },
    { id: uuidv4(), categoryName: "Personal" },
    { id: uuidv4(), categoryName: "School" },
  ].map(({ categoryName, id }) => (
    <Categorys key={id} categoryName={categoryName} />
  ));

  return (
    <TodoStyle className="container">
      <div className="row">
        <div className="col-lg-10 offset-lg-1 pt-5">
          <div className="row">
            {/* profile & categorys area */}
            <div className="col-lg-3 py-3">
              <Profile name={name} lastname={lastname} />
              <div className="my-2">{categoryIems}</div>
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
