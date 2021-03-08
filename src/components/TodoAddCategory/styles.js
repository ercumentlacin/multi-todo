import styled from "styled-components";

const StyledTodoAddCategory = styled.div`
  ul {
    margin-top: 0.6em;
    list-style: none;
    padding: 0;

    li {
      padding: 0.1em 0.5em;
      display: inline-block;
      margin: 0.4em;
      background: #e74c3c;
      color: white;
      font-size: 0.85em;
      border-radius: 0.2em;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  form {
    display: flex;

    input {
      width: 100%;
      margin-right: 0.4em;
    }
  }

  button {
    outline: 0;
    border: 1px solid transparent;
    background: #e74c3c;
    color: white !important;
    padding: 0 0.6em;
    height: 30px;
    transition: all 250ms ease;

    &:hover,
    &:focus {
      color: #e74c3c !important;
      background: white;
      border: 1px solid #e74c3c;
    }
  }
`;

export default StyledTodoAddCategory;
