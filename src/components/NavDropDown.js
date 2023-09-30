import React from "react";
import { NavDropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import NavDropDownList from "./NavDropDownList";

function NavDropDown({ nav, handleClick }) {
  const { t } = useTranslation();

  return (
    <NavDropdown title={t("more")} renderMenuOnMount>
      <NavDropDownList {...{ nav, handleClick }} />
    </NavDropdown>
  );
}

export default NavDropDown;
