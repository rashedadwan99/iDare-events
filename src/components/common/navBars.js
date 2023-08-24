import React from "react";
import { Nav, NavLink } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../styles/header.css";
function NavItems({ links }) {
  const navigate = useNavigate();
  const handleClickNavLink = (n) => {
    if (n.path) {
      navigate(n.path);
    }
    window.scrollTo(0, 0);
  };

  return (
    <Nav className="me-auto">
      {links.map((n) => (
        <NavLink onClick={() => handleClickNavLink(n)} key={n.path}>
          {n.label}
        </NavLink>
      ))}
    </Nav>
  );
}

export default NavItems;
