import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap/esm";
import RightHeaderSide from "./RightHeaderSide";
import LeftHeaderSide from "./LeftHeaderSide";
import "../styles/header.css";

function Header({ event, style }) {
  return (
    <Row className="header py-3" style={style}>
      <Col xs={12} sm={12} md={12}>
        <Row className="justify-content-around align-items-center">
          <LeftHeaderSide event={event} />
          <RightHeaderSide event={event} />
        </Row>
      </Col>
    </Row>
  );
}

export default Header;
