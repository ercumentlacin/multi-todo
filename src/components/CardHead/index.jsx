import React, { useState } from "react";
import CardHeadForm from "./styles";
import { useStateValue } from "../../context/StateProvider";

function CardHead({ id, title }) {
  const [{ allCards, todoList }, dispatch] = useStateValue(); // eslint-disable-line

  const [cardTitle, setCardTitle] = useState(title);
  function cardTitleChnage(e) {
    if (id === e.target.id) {
      setCardTitle(e.target.value);
    }
  }

  const handleDeleteCard = () => {
    dispatch({
      type: "DELETE_LIST",
      id,
    });
  };

  return (
    <CardHeadForm onSubmit={(e) => e.preventDefault()}>
      <input id={id} onChange={cardTitleChnage} type="text" value={cardTitle} />

      <i
        onClick={handleDeleteCard}
        className="fa fa-trash"
        aria-hidden="true"
      />
    </CardHeadForm>
  );
}

export default CardHead;
