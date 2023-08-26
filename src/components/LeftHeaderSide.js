import React, { useEffect, useState } from "react";
import { useResolvedPath, useParams } from "react-router-dom";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap/esm";
import Logo from "../images/Logo";
import { eventPageRoute } from "../routes";
import { useSelector } from "react-redux/es";
import { getImageSrc } from "../services/imageServices";

function LeftHeaderSide({ event }) {
  const { pathname } = useResolvedPath();
  const { id } = useParams();

  const isEventPage = pathname === eventPageRoute + `/${id}`;

  return (
    <Col xs={4} sm={6} md={6}>
      <Row className="justify-content-start px-2">
        {isEventPage && event && (
          <img
            src={getImageSrc(event.image)}
            alt="event-logo"
            className="event-logo"
          />
        )}
        {!isEventPage && <Logo />}
      </Row>
    </Col>
  );
}

export default LeftHeaderSide;
