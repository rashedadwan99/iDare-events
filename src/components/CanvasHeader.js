import React from "react";
import { Col, Row } from "react-bootstrap";
import { GrClose } from "react-icons/gr";

function CanvasHeader({ label, handleClick }) {
  return (
    <Row
      className="justify-content-around py-4"
      style={{ alignItems: "center" }}
    >
      <Col xs={2} sm={2}>
        <GrClose onClick={handleClick} />
      </Col>
      <Col xs={9} sm={9}>
        <span>{label}</span>
      </Col>
    </Row>
  );
}

export default CanvasHeader;
