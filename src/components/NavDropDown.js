import React from "react";
import { NavDropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function NavDropDown({ nav, handleClick }) {
  const { t } = useTranslation();
  return (
    <NavDropdown title={t("more")}>
      {nav.dropDownList.map((n) => {
        return (
          <NavDropdown.Item onClick={() => handleClick(n)} key={n.label}>
            {n.label}
          </NavDropdown.Item>
        );
      })}
    </NavDropdown>
  );
}

export default NavDropDown;
