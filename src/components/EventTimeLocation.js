import React from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import HandleTimeComponent from "./HandleTimeComponent";
function EventTimeLocation({ event }) {
  const { t } = useTranslation();
  const isArabic = useSelector((state) => state.language.isArabic);
  const contactStyle = isArabic
    ? { direction: "ltr", marginRight: "6px" }
    : { direction: "rll", marginLeft: "6px" };
  return (
    <Row className="align-items-center  event-location">
      <Col sm={12} className="mb-2">
        <Row>{event.location}</Row>
      </Col>
      <Col sm={12}>
        <Row className="align-items-center justify-content-center event-time">
          <HandleTimeComponent data={event} />
        </Row>
      </Col>
      {event.contact && (
        <Col sm={12} className="mt-2">
          <Row className="align-items-center">
            {t("phone") + " : "}
            <span style={contactStyle}>{event.contact}</span>
          </Row>
        </Col>
      )}
    </Row>
  );
}

export default EventTimeLocation;
