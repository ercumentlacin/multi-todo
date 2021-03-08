import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useStateValue } from "../../context/StateProvider";
import StyledCreateCard from "./styles";

function CreateCard() {
  const [{ allCards }, dispatch] = useStateValue(); // eslint-disable-line

  const handleClick = () => {
    dispatch({
      type: "ADD_CARD_ITEMS",
      cardItems: {
        id: uuidv4(),
        title: "Click me to edit title",
        todos: [],
      },
    });
  };
  console.log("allCards", allCards);
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
