import React from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function EventFooterSection({ title, children }) {
  const { t } = useTranslation();

  return (
    <Col xs={11} sm={11} md={4} lg={3} className="event-footer-section">
      <Row className="my-4">
        {title && (
          <Col sm={12} className="mb-3">
            <Row className="align-items-center">
              <h6>{t(title)}</h6>
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
