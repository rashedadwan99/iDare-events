import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { getImageSrc } from "../services/imageServices";
import EventSectionContainer from "./common/EventSectionContainer";
import AboutEvent from "./AboutEvent";

function EventIntro({ event }) {
  return (
    <EventSectionContainer name="about-event">
      <Row className="justify-content-center about-event-section mt-4">
        <Col xs={11} sm={11}>
          <Row className="justify-content-center">
            <Col sm={12}>
              {/* <Image
                src={getImageSrc(event.about_image)}
                alt="about"
                className="event__about-image"
              /> */}
              <AboutEvent event={event} />
            </Col>
          </Row>
        </Col>
      </Row>
    </EventSectionContainer>
  );
}

export default EventIntro;
