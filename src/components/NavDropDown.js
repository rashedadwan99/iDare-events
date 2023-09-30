import React, { useEffect } from "react";
import { NavDropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function NavDropDown({ nav, handleClick }) {
  const { t } = useTranslation();
  const isArabic = useSelector((state) => state.language.isArabic);
  useEffect(function () {}, [isArabic]);
  return (
    <NavDropdown title={t("more")} renderMenuOnMount>
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
