import React from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import AosContainer from "./Aos";

function EventSectionContainer({ name, children }) {
  const { t } = useTranslation();
  return (
    <AosContainer>
      <Row className="justify-content-center mt-4 pt-5">
        <Col sm={12}>
          <Row className="justify-content-center">
            <h3 className="event-section-name">{t(name)}</h3>
          </Row>
          <Row className="justify-content-center my-3">
            <Col>{children}</Col>
          </Row>
        </Col>
      </Row>
    </AosContainer>
  );
}

export default EventSectionContainer;
