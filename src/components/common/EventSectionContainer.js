import React from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function EventSectionContainer({ name, children }) {
  const { t } = useTranslation();
  return (
    <Row className="justify-content-center mt-4 pt-5">
      <Col sm={12}>
        <Row className="justify-content-center">
          <h3 className="event-section-name">{t(name)}</h3>
        </Row>
        <Row className="justify-content-center my-2">
          <Col>{children}</Col>
        </Row>
      </Col>
    </Row>
  );
}

export default EventSectionContainer;
