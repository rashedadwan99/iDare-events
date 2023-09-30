import React from "react";
import { NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";

function NavDropDownList({ nav, handleClick }) {
  const isArabic = useSelector((state) => state.language.isArabic);
  return nav.dropDownList.map((n) => {
    return (
      <NavDropdown.Item onClick={() => handleClick(n)} key={n.label}>
        {isArabic ? n.label_ar : n.label}
      </NavDropdown.Item>
    );
  });
}

export default NavDropDownList;
