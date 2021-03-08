import styled from "styled-components";

const CardHeadForm = styled.form`
  display: flex;
  justify-content: center;

  input {
    border: 0;
    border-bottom: 1px solid black;
    margin-bottom: 1rem;
    transition: all 150ms ease-in-out;

    &:focus {
      outline: 0;
      border-width: 2px;
    }
  }
`;

export default CardHeadForm;
