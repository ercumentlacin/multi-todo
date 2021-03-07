import styled from "styled-components";

const StyledTodoCard = styled.div`
  background-color: white;
  height: 18.75em; // 300px
  width: 18em; // 200px
  border-radius: 0.2em;
  box-shadow: 0px 0px 3px 0px #c1c1c1;

  h3 {
    font-size: 1.5em;
    text-transform: uppercase;
  }

  input[type="text"] {
    background: #ecf0f1;
    height: 2.375em;
    line-height: 2.375em;
  }
  input.todo__add,
  li.form-check,
  li.form-check > button,
  input.todo__add + button {
    font-size: 0.9em;
  }

  ul {
    height: 2.375em;
    line-height: 2.375em;
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

export default StyledTodoCard;
