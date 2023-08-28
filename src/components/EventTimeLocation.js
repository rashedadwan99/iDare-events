import React from "react";
import { Col, Row } from "react-bootstrap";
import { GoLocation } from "react-icons/go";
import { BiTimeFive } from "react-icons/bi";
import HandleTimeComponent from "./HandleTimeComponent";
function EventTimeLocation({ event }) {
  return (
    <>
      <Col xs={12} sm={12}>
        <Row className="align-items-center justify-content-start">
          <GoLocation />
          <span className="event-location">{event.location}</span>
        </Row>
      </Col>
      <Col>
        <Row className="justify-content-start align-items-center mt-2">
          <BiTimeFive />
          <span className="event-time">
            <HandleTimeComponent data={event} />
          </span>
        </Row>
      </Col>
    </>
  );
}

export default EventTimeLocation;
