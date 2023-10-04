import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap/esm";
import { useTranslation } from "react-i18next";
import EventsCards from "./EventsCards";
import AosContainer from "./common/Aos";
import Footer from "./Footer";

function AllEvents({ title, events }) {
  const { t } = useTranslation();

  return (
    <>
      <Row className="justify-content-center home-events my-5">
        <AosContainer
          animation_name_scroll_down="fade-up"
          animation_name_scroll_up="fade-down"
        >
          <Row className="justify-content-center">
            <h3>{t(title)}</h3>
          </Row>
          <Row className="justify-content-center my-2">
            <Col xs={11} sm={11} md={11} lg={9}>
              <EventsCards title={title} events={events} />
            </Col>
          </Row>
        </AosContainer>
      </Row>
      <Footer />
    </>
  );
}

export default AllEvents;
