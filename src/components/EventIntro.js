import React, { Suspense, lazy } from "react";
import { Row, Col, Image } from "react-bootstrap";
import { getImageSrc } from "../services/imageServices";
import AosContainer from "./common/Aos";
import AboutEvent from "./AboutEvent";

function EventIntro({ event }) {
  const EventSectionContainer = lazy(() =>
    import("./common/EventSectionContainer")
  );
  return (
    <Suspense fallback={<></>}>
      <EventSectionContainer name="about-event">
        <Row className="justify-content-center about-event-section">
          <Col xs={12} sm={11}>
            <Row className="justify-content-center align-items-start mt-3">
              {event.about_image && (
                <Col xs={12} sm={12} lg={6}>
                  <AosContainer
                    animation_name_scroll_down="zoom-in"
                    animation_name_scroll_up="zoom-out"
                  >
                    <Row>
                      <Image
                        src={getImageSrc(event.about_image)}
                        alt="about"
                        className="event__about-image"
                        loading="lazy"
                      />
                    </Row>
                  </AosContainer>
                </Col>
              )}
              <Col xs={12} sm={12} lg={event.about_image ? 6 : 12}>
                <AosContainer
                  animation_name_scroll_down="zoom-in"
                  animation_name_scroll_up="zoom-out"
                >
                  <Row>
                    <AboutEvent event={event} />
                  </Row>
                </AosContainer>
              </Col>
            </Row>
          </Col>
        </Row>
      </EventSectionContainer>
    </Suspense>
  );
}

export default EventIntro;
