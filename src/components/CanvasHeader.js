import React from "react";
import { Col, Row } from "react-bootstrap";
import { GrClose } from "react-icons/gr";

function CanvasHeader({ label, handleClick }) {
  return (
    <Row
      className="justify-content-around canvas-header py-4 px-2"
      style={{ alignItems: "center" }}
    >
      <Col xs={2} sm={2}>
        <Row className="justify-content-start px-2">
          <GrClose onClick={handleClick} />
        </Row>
      </Col>
      <Col xs={9} sm={9}>
        <Row className="justify-content-end px-3">{label}</Row>
      </Col>
    </Row>
  );
}

export default CanvasHeader;
