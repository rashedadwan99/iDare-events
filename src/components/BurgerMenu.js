import React from "react";
import { Col } from "react-bootstrap";

function BurgerMenu({ burgerData, handleClick }) {
  return burgerData.map((b, i) => {
    return (
      <Col sm={12} className="py-4 canvas-list" key={i + b.label}>
        <span onClick={() => handleClick(b)}>{b.label}</span>
      </Col>
    );
  });
}

export default BurgerMenu;
