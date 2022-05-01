import { pageRoutes } from "constants/pageRoutes";
import { useState } from "react";
import { Nav, Logo, Hamburger, Menu, MenuLink } from "./styles";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickOpenHumbirgerMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Logo to={pageRoutes.HOME_ROUTE}>
        Movies<span>Manager</span>
      </Logo>
      <Hamburger onClick={onClickOpenHumbirgerMenu}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink to={pageRoutes.PORTFOLIO_ROUTE}>Portfolio</MenuLink>
      </Menu>
    </Nav>
  );
};

export default NavBar;
