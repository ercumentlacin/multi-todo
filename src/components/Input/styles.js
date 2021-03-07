import styled from "styled-components";

const StyledInput = styled.input`
  background: #f3f4f5;
  color: #dde9ec;
  border-color: #dde9ec;
  transition: all 0.3s ease-in-out;
  &:focus {
    border-color: #dde9ec;
    color: #212529;
    background-color: #fff;
    border-color: #dde9ec;
    outline: 0;
    box-shadow: 2px 2px 0px 0.05rem rgb(0 0 0 / 25%);
  }
`;

export default StyledInput;
