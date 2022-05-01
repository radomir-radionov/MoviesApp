import styled from "styled-components";

export const ButtonStyled = styled.button`
  padding: 10px;
  font-size: 20px;
  border: 1px solid white;
  border-radius: 7px;
  color: white;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    color: #7b7fda;
    border: 2px solid #7b7fda;
  }

  :disabled {
    opacity: 0;
    cursor: default;
  }
`;
