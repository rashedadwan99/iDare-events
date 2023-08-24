import React from "react";
import { Row } from "react-bootstrap";

function CanvasBody({ Component }) {
  return (
    <Row className="justify-content-center py-3 px-4 canvas-body">
      {Component}
    </Row>
  );
}

export default CanvasBody;
