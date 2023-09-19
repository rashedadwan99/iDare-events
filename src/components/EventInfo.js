import React from "react";
import { getEventInfo } from "./data/eventInfo";
import { Col, Row } from "react-bootstrap";
import { headerEventStyle } from "../styles/eventStyles";
import { useSelector } from "react-redux";

function EventInfo({ event, style }) {
  const eventInfo = getEventInfo(event);
  const isArabic = useSelector((state) => state.language.isArabic);
  return eventInfo.map((e, i) => {
    return (
      <Row className="event-info mb-2" key={e.data + i} style={style}>
        <Col
          xs={2}
          sm={2}
          className={`event-info__icon ${isArabic ? "arabic-border" : ""}`}
          style={
            style ? { backgroundColor: "initial" } : headerEventStyle(event)
          }
        >
          {e.icon}
        </Col>
        <Col xs={10} sm={10} className="event-info__data">
          {e.data}
        </Col>
      </Row>
    );
  });
}

export default EventInfo;
