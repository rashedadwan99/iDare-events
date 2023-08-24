import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap/esm";
import { useTranslation } from "react-i18next";
import HomeEventsCards from "./HomeEventsCards";

function HomeEvents() {
  const { t } = useTranslation();
  return (
    <Row className="justify-content-center home-events my-5">
      <Col sm={12}>
        <Row className="justify-content-center">
          <h3>{t("upcoming_events")}</h3>
        </Row>
        <Row className="justify-content-center my-5">
          <Col xs={11} sm={11} md={9} lg={7}>
            <HomeEventsCards />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default HomeEvents;
