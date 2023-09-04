import React from "react";
import { Col, Row } from "react-bootstrap";
import HandleTimeComponent from "./HandleTimeComponent";
import EventFormBtn from "./common/EventFormBtn";
function EventTimeLocation({ event }) {
  return (
    <Col sm={12}>
      <Row className="align-items-center justify-content-center event-location">
        <Col sm={12} className="mb-2">
          <Row>{event.location}</Row>
        </Col>
        <Col sm={12}>
          <Row className="align-items-center justify-content-center event-time">
            <HandleTimeComponent data={event} />
          </Row>
        </Col>
      </Row>
    </Col>
  );
}

export default EventTimeLocation;
