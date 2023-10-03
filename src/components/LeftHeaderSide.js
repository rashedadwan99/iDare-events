import React, { memo } from "react";
import { Col, Row } from "react-bootstrap";
import Logo from "../images/Logo";

const LeftHeaderSide = memo(function () {
  return (
    <Col xs={6} sm={3} md={2}>
      <Row className="justify-content-start px-2">
        <Logo />
      </Row>
    </Col>
  );
});

export default LeftHeaderSide;
