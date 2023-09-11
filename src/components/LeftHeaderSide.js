import React from "react";
import { Col, Row } from "react-bootstrap";
import Logo from "../images/Logo";
import { getImageSrc } from "../services/imageServices";
import logo from "../images/logo.jpg";

function LeftHeaderSide({ event }) {
  const image = {
    className: event ? "event-logo" : "",
    src: event ? getImageSrc(event.image) : logo,
    alt: event ? "event-logo" : "logo",
  };
  return (
    <Col xs={6} sm={3} md={3}>
      <Row className="justify-content-start px-2">
        <Logo
          src={image.src}
          alt={image.alt}
          className={image.className}
          event={event ?? event}
        />
      </Row>
    </Col>
  );
}

export default LeftHeaderSide;
