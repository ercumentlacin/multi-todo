import styled from "styled-components";

const GlobalStyle = styled.div`
  /* global */
  font-family: "Montserrat", sans-serif;
  min-height: 100vh;
  background-color: #f7f8f9;
  color: #070607;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  button {
    color: #e74c3c;
    font-family: "Oswald", sans-serif;
  }

  .btn-danger {
    background-color: #e74c3c;
    color: white;
    border-color: #e74c3c;
    transition: all 400ms ease-in-out;

    &:hover {
      background-color: white;
      color: #e74c3c;
      border-color: #e74c3c;
    }
  }
`;

export default GlobalStyle;
