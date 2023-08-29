import React from "react";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";

function CanvasBody() {
  const Component = useSelector((state) => state.canvas.Component);
  return (
    <Row className="justify-content-center py-3 px-4 canvas-body">
      {Component}
    </Row>
  );
}

export default CanvasBody;
