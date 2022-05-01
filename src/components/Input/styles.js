import styled from "styled-components";

export const InputStyled = styled.input`
  width: 80%;
  border-radius: 5px;
  background: #fff;
  border: 1px solid #ccc;
  outline: none;
  padding: 6px;
  font-size: 1.2rem;
  color: black;

  &:focus {
    border: 1px solid #7b7fda;
    box-shadow: 0px 0px 3px 1px #7b7fda;
  }
`;
