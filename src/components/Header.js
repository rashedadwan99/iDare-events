import React from "react";
import { Row } from "react-bootstrap/esm";
import RightHeaderSide from "./RightHeaderSide";
import LeftHeaderSide from "./LeftHeaderSide";
import { headerEventStyle } from "../styles/eventStyles";
import "../styles/header.css";

function Header({ event }) {
  return (
    <Row
      className={`header py-2 ${event ? "event-header" : ""}`}
      style={event && headerEventStyle(event)}
    >
      <LeftHeaderSide />
      <RightHeaderSide />
    </Row>
  );
}

export default Header;
