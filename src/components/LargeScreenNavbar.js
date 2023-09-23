import React from "react";
import { NavLink, Navbar } from "react-bootstrap";
import NavDropDown from "./NavDropDown";

function LargeScreenNavbar({ navLinks, handleClick, event }) {
  const style = event
    ? {
        color: event.header_text_color ?? "var(--header_text_color)",
      }
    : {
        color: "var(--background-color)",
      };
  return (
    <Navbar className="nav-links">
      {navLinks.map((nav, i) => {
        if (!nav.isDropDown) {
          return (
            <NavLink onClick={() => handleClick(nav)} key={i} style={style}>
              <span>{nav.label}</span>
            </NavLink>
          );
        } else
          return <NavDropDown nav={nav} key={i} handleClick={handleClick} />;
      })}
    </Navbar>
  );
}

export default LargeScreenNavbar;
