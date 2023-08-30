import React from "react";
import { Row } from "react-bootstrap/esm";
import RightHeaderSide from "./RightHeaderSide";
import LeftHeaderSide from "./LeftHeaderSide";
import "../styles/header.css";

function Header({ event, style }) {
  return (
    <Row className={`header py-2 ${event ? "event-header" : ""}`} style={style}>
      <LeftHeaderSide event={event} />
      <RightHeaderSide event={event} />
    </Row>
  );
}

export default Header;
