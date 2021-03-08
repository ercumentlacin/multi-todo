import styled from "styled-components";

const CardHeadForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin-bottom: 1em;

  i {
    cursor: pointer;
    margin-left: 0.4em;
    color: #e85242;
    transition: all 250ms ease-in-out;

    &:hover {
      font-size: 1.2em;
    }

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
  }
`;

export default CardHeadForm;
