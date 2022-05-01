import styled from "styled-components";
import { Link } from "react-router-dom";

export const MenuLink = styled(Link)`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #67bc98;
  transition: all 0.3s ease-in;
  font-size: 1.5rem;
  &:hover {
    color: #7b7fda;
  }
`;

export const Nav = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: white;

  background-color: #000d1a;
`;

export const Logo = styled(Link)`
  padding: 1rem 0;
  color: #7b7fda;
  text-decoration: none;
  font-weight: 800;
  font-size: 2.2rem;
  transition: all 0.5s ease;
  span {
    font-weight: 300;
    font-size: 1.8rem;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const Menu = styled.div.attrs(({ isOpen }) => isOpen)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;

  cursor: pointer;
  span {
    height: 3px;
    width: 35px;
    background: #7b7fda;
    margin-bottom: 6px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;
