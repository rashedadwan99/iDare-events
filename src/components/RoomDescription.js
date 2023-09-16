import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

function RoomDescription({ r: room }) {
  const isArabic = useSelector((state) => state.language.isArabic);

  return (
    <Row className="event-room__description align-items-center justify-content-center">
      <Col xs={12} sm={12}>
        <p className="event-room__name">
          {isArabic ? room.name_ar : room.name}
        </p>
        <p className="event-room__description-text">
          {isArabic ? room.description_ar : room.description}
        </p>
      </Col>
    </Row>
  );
}

export default RoomDescription;
