import React from "react";
import { NavLink, Navbar } from "react-bootstrap";

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
        return (
          <NavLink
            onClick={() => handleClick(nav)}
            key={i + nav.label}
            style={style}
          >
            <span>{nav.label}</span>
          </NavLink>
        );
      })}
    </Navbar>
  );
}

export default LargeScreenNavbar;
