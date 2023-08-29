import React from "react";
import { Col, Row } from "react-bootstrap";
import { GrClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { closeCanvasAction } from "../redux/actions/canvasActions";

function CanvasHeader() {
  const title = useSelector((state) => state.canvas.title);
  const dispatch = useDispatch();
  return (
    <Row
      className="justify-content-around canvas-header py-4 px-2"
      style={{ alignItems: "center" }}
    >
      <Col xs={2} sm={2}>
        <Row className="justify-content-start px-2">
          <GrClose onClick={() => dispatch(closeCanvasAction())} />
        </Row>
      </Col>
      <Col xs={9} sm={9}>
        <Row className="justify-content-end px-3">{title}</Row>
      </Col>
    </Row>
  );
}

export default CanvasHeader;
