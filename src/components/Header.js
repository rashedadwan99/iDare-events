import React from "react";
import { Row } from "react-bootstrap/esm";
import RightHeaderSide from "./RightHeaderSide";
import LeftHeaderSide from "./LeftHeaderSide";
import { headerEventStyle } from "../styles/eventStyles";
import "../styles/header.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const allEvents = useSelector((state) => state.events.allEvents);
  const params = useParams();

  const event = allEvents.find((e) => e.id === parseInt(params.id));
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
