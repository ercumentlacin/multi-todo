import React, { useState } from "react";
import CardHeadForm from "./styles";

function CardHead({ id, title }) {
  const [cardTitle, setCardTitle] = useState(title);
  function cardTitleChnage(e) {
    console.log("target", e.target.id);
    if (id === e.target.id) {
      setCardTitle(e.target.value);
    }
  }
  return (
    <CardHeadForm onSubmit={(e) => e.preventDefault()}>
      <input id={id} onChange={cardTitleChnage} type="text" value={cardTitle} />
    </CardHeadForm>
  );
}

export default CardHead;
