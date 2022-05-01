import styled from "styled-components";

export const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  margin-top: 70px;
  margin-bottom: 70px;
`;

export const PaginationContainer = styled.ul`
  display: inline-block;
  padding: 0;
  margin: 0;
`;

export const PageItem = styled.li`
  display: inline;
`;

export const PageLink = styled.a`
  color: white;
  float: left;
  padding: 8px 16px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  text-decoration: none;
  border: 1px solid white;
  border-radius: 10px;
  font-weight: bolder;
  cursor: pointer;

  &:hover {
    color: black;
    border: 1px solid black;
    outline: 2px solid black;
  }
`;
