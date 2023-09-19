import React from "react";
import { Image, Row } from "react-bootstrap";
import { Col } from "react-bootstrap/esm";
import { getImageSrc } from "../services/imageServices";
import { handleBackgroundStyle } from "../styles/eventStyles";
import EventSectionContainer from "./common/EventSectionContainer";
import SlideShow from "./common/SlideShow";
import { useSelector } from "react-redux";
import AosContainer from "./common/Aos";

function EventOrganizers({ event, isInActiveSection }) {
  const activeOrganizers = event.organizers.filter((o) => o.active !== 0);
  const isArabic = useSelector((state) => state.language.isArabic);

  return (
    !isInActiveSection(event.organizers) && (
      <EventSectionContainer name="organizers">
        <Row
          className="justify-content-center align-items-center my-3  orgnaizers"
          style={handleBackgroundStyle(event.secondary_image)}
        >
          <Col
            xs={11}
            sm={11}
            md={10}
            lg={10}
            className="m-3 py-1 px-3 organizer-container"
          >
            <SlideShow>
              {activeOrganizers.map((o) => {
                return (
                  <Col xs={11} sm={11} key={o.id} className="mx-0 py-1 px-1">
                    <Row className="align-items-center justify-content-center organizer">
                      <Col xs={12} sm={12} md={5} lg={4} className="px-0">
                        <AosContainer
                          animation_name_scroll_down="zoom-in"
                          animation_name_scroll_up="zoom-out"
                        >
                          <Image
                            src={getImageSrc(o.image)}
                            alt="organizer logo"
                          />
                        </AosContainer>
                      </Col>
                      <Col xs={12} sm={12} md={6} lg={7} className="mt-4 px-0">
                        <AosContainer
                          animation_name_scroll_down="flip-down"
                          animation_name_scroll_up="flip-up"
                        >
                          <h3 className="organizer-name">
                            {isArabic ? o.name_ar : o.name}
                          </h3>
                          <span className="organizer-description">
                            {isArabic ? o.description_ar : o.description}
                          </span>
                        </AosContainer>
                      </Col>
                    </Row>
                  </Col>
                );
              })}
            </SlideShow>
          </Col>
        </Row>
      </EventSectionContainer>
    )
  );
}

export default EventOrganizers;
