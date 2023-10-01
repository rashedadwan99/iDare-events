import React from "react";
import { Row } from "react-bootstrap/esm";
import { memo } from "react";
import { useSelector } from "react-redux";
import RightHeaderSide from "./RightHeaderSide";
import LeftHeaderSide from "./LeftHeaderSide";
import { headerEventStyle } from "../styles/eventStyles";
import { useParams } from "react-router-dom";
import "../styles/header.css";

const Header = memo(function () {
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
});

export default Header;
