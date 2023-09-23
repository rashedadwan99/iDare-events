import React from "react";
import { Col } from "react-bootstrap";
import NavDropDown from "./NavDropDown";

function BurgerMenu({ burgerData, handleClick }) {
  return burgerData.map((b, i) => {
    if (!b.isDropDown) {
      return (
        <Col sm={12} className="py-4 canvas-list" key={i + b.label}>
          <span onClick={() => handleClick(b)}>{b.label}</span>
        </Col>
      );
    } else {
      return <NavDropDown nav={b} key={i} handleClick={handleClick} />;
    }
  });
}

export default BurgerMenu;
