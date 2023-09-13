import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap/esm";
import { useTranslation } from "react-i18next";
import HomeEventsCards from "./HomeEventsCards";
import AosContainer from "./common/Aos";

function AllEvents({ title, events }) {
  const { t } = useTranslation();

  return (
    <Row className="justify-content-center home-events my-5">
      <AosContainer>
        <Row className="justify-content-center">
          <h3>{t(title)}</h3>
        </Row>
        <Row className="justify-content-center my-2">
          <Col xs={11} sm={11} md={11} lg={8}>
            <HomeEventsCards title={title} events={events} />
          </Col>
        </Row>
      </AosContainer>
    </Row>
  );
}

export default AllEvents;
