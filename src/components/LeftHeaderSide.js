import React from "react";
import { useResolvedPath, useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import Logo from "../images/Logo";
import { eventPageRoute } from "../routes";
import { getImageSrc } from "../services/imageServices";

function LeftHeaderSide({ event }) {
  const { pathname } = useResolvedPath();
  const { id } = useParams();

  const isEventPage =
    pathname === eventPageRoute + `/${id}` ||
    pathname === eventPageRoute + `/${id}/speakers` ||
    pathname === eventPageRoute + `/${id}/gallery`;
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
