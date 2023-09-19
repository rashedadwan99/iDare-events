import React from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function EventFooterSection({ title, children, ...rest }) {
  const { t } = useTranslation();

  return (
    <Col xs={12} sm={11} md={4} {...rest} className="event-footer-section my-4">
      {title && (
        <Col sm={12} className="mb-3">
          <Row className="align-items-center">
            <span className="event-footer_title">{t(title)}</span>
          </Row>
        </Col>
      )}
      <Col sm={12}>
        <Row className="align-items-center">{children}</Row>
      </Col>
    </Col>
  );
}

export default EventFooterSection;
