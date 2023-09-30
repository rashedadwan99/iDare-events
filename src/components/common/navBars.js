import React from "react";
import { Nav, NavLink } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../styles/header.css";
import { scrollToTop } from "../utils/scrollToTop";
function NavItems({ links }) {
  const navigate = useNavigate();
  const handleClickNavLink = (n) => {
    if (n.path) {
      navigate(n.path);
      scrollToTop();
    }
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
