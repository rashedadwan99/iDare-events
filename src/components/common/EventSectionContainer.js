import React from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import AosContainer from "./Aos";

function EventSectionContainer({ name, children }) {
  const { t } = useTranslation();
  return (
    <AosContainer
      animation_name_scroll_down="fade-up"
      animation_name_scroll_up="fade-down"
    >
      <Row className="justify-content-center mt-5 pt-1">
        <Col xs={12} sm={12}>
          <Row className="justify-content-center">
            <h3 className="event-section-name">{t(name)}</h3>
          </Row>
          <Row className="justify-content-center mb-3">
            <Col>{children}</Col>
          </Row>
        </Col>
      </Row>
    </AosContainer>
  );
}

export default EventSectionContainer;
