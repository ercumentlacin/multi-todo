import styled from "styled-components";

const FormTodoList = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 0.4em;

  input[type="text"] {
    margin: 0 0.3em;
    width: 100%;
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

export default FormTodoList;
