import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { getImageSrc } from "../services/imageServices";
import EventSectionContainer from "./common/EventSectionContainer";

function EventIntro({ event }) {
  return (
    <EventSectionContainer name="about-event">
      <Row className="justify-content-center about-event-section">
        <Col xs={12} sm={11}>
          <Row className="justify-content-center align-items-start ">
            <Col xs={12} sm={6}>
              <Image
                src={getImageSrc(event.about_image)}
                alt="about"
                className="event__about-image"
              />
            </Col>
            {/* <Col xs={12} sm={6}>
              <AboutEvent event={event} />
            </Col> */}
          </Row>
        </Col>
      </Row>
    </EventSectionContainer>
  );
}

export default EventIntro;
