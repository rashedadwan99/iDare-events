import React from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function EventFooterSection({ title, children }) {
  const { t } = useTranslation();

  return (
    <Col xs={11} sm={11} md={4} lg={4} className="event-footer-section">
      <Row>
        {title && (
          <Col sm={12} className="mb-3">
            <Row>
              <span>{t(title)}</span>
            </Row>
          </Col>
        )}
        <Col sm={12}>
          <Row>{children}</Row>
        </Col>
      </Row>
    </Col>
  );
}

export default EventFooterSection;
