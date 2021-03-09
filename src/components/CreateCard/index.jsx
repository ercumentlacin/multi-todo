import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useStateValue } from "../../context/StateProvider";
import StyledCreateCard from "./styles";

function CreateCard() {
  const [{ allCards, todos }, dispatch] = useStateValue(); // eslint-disable-line

  const handleClick = () => {
    const id = uuidv4();
    dispatch({
      type: "ADD_CARD_ITEMS",
      cardItems: {
        id,
        title: "Click me to edit title",
        todos: todos.filter((item) => (item.categoryId === id ? item : "")),
        deneme: todos,
      },
    });
  };
  console.log({ todos });
  return (
    <StyledCreateCard className="createCard d-flex flex-column p-3">
      <h3 className="text-center">New Project</h3>
      <button
        onClick={handleClick}
        type="button"
        className="btn btn-danger w-100 mt-auto "
      >
        CREATE
      </button>
    </StyledCreateCard>
  );
}

export default CreateCard;
