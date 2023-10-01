import React, { memo } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Logo from "../images/Logo";
import { getImageSrc } from "../services/imageServices";
import logo from "../images/logo.jpg";

const LeftHeaderSide = memo(function () {
  const { id } = useParams();
  const allEvents = useSelector((state) => state.events.allEvents);
  const event = allEvents.find((e) => e.id === parseInt(id));

  return (
    <Col xs={6} sm={3} md={2}>
      <Row className="justify-content-start px-2">
        <Logo
          src={id ? getImageSrc(event && event.image) : logo}
          alt="logo"
          event={event}
        />
      </Row>
    </Col>
  );
});

export default LeftHeaderSide;
