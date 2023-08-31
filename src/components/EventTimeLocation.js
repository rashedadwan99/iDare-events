import React from "react";
import { Col, Row } from "react-bootstrap";
import HandleTimeComponent from "./HandleTimeComponent";
function EventTimeLocation({ event }) {
  return (
    <>
      <Col xs={12} sm={12}>
        <Row className="align-items-center justify-content-start">
          <Col className="event-location px-0">{event.location}</Col>
        </Row>
      </Col>
      <Col>
        <Row className="justify-content-start align-items-center mt-2">
          <Col className="event-time px-0">
            <HandleTimeComponent data={event} />
          </Col>
        </Row>
      </Col>
    </>
  );
}

export default EventTimeLocation;
