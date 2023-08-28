import React from "react";
import { Col, Row } from "react-bootstrap";
import Logo from "../images/Logo";
import { getImageSrc } from "../services/imageServices";

function LeftHeaderSide({ event }) {
  return (
    <Col xs={6} sm={6} md={6}>
      <Row className="justify-content-start px-2">
        {event && (
          <img
            src={getImageSrc(event.image)}
            alt="event-logo"
            className="event-logo"
          />
        )}
        {!event && <Logo />}
      </Row>
    </Col>
  );
}

export default LeftHeaderSide;
