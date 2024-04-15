import React from "react";
import { NavDropdown } from "react-bootstrap";
import NavDropDownList from "./NavDropDownList";

function NavDropDown({ nav, handleClick }) {
  return (
    <NavDropdown title={nav.label} renderMenuOnMount>
      <NavDropDownList {...{ nav, handleClick }} />
    </NavDropdown>
  );
}

export default NavDropDown;
