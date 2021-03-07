import styled from "styled-components";

const TodoStyle = styled.div`
  .row {
    min-height: 100vh;
  }
  .img-avatar {
    height: 6.25em; // 100px
  }

  .grid-card {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18em, 18.5em));
    grid-gap: 1em;
  }
`;

export default TodoStyle;
