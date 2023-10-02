import React from "react";
import { Col, Image, Row } from "react-bootstrap";

import { useNavigate } from "react-router-dom/dist";
import { eventPageRoute } from "../routes";
import { getImageSrc } from "../services/imageServices";
import EventTimeLocation from "./EventTimeLocation";
import { useSelector } from "react-redux";
import Premium from "./Premium";
import AosContainer from "./common/Aos";
import { scrollToTop } from "./utils/scrollToTop";
function EventsCards({ events }) {
  const navigate = useNavigate();
  const isArabic = useSelector((state) => state.language.isArabic);
  const infoStyle = isArabic ? { textAlign: "right" } : { textAlign: "left" };
  const containerStyle = isArabic ? { direction: "rtl" } : { direction: "ltr" };
  const handleGoToEventPage = (id) => {
    navigate(eventPageRoute + `/${id}`);
    scrollToTop();
  };

  return events.map((e, i) => {
    if (e.active)
      return (
        <Row
          className="justify-content-between event-card py-3 my-4"
          style={containerStyle}
          key={i}
          onClick={() => handleGoToEventPage(e.id)}
        >
          <Col md={6}>
            <Image
              fluid
              src={getImageSrc(e.events_list_image)}
              alt="event_list_img"
              className="event_list_img"
            />
          </Col>
          <Col md={6}>
            <AosContainer
              animation_name_scroll_down="zoom_in"
              animation_name_scroll_up="zoom-out"
            >
              <Row className="justify-content-between align-items-center event-name mt-2 mb-2">
                <Col xs={8} sm={8}>
                  <h6 style={infoStyle}>{isArabic ? e.name_ar : e.name}</h6>
                </Col>
                <Col xs={4} sm={4}>
                  {e.is_premium ? <Premium event={e} /> : <></>}
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <p style={infoStyle} className="event_desc">
                    {isArabic ? e.short_description_ar : e.short_description}
                  </p>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <EventTimeLocation event={e} />
                </Col>
              </Row>
            </AosContainer>
          </Col>
        </Row>
      );
    return <></>;
  });
}

export default EventsCards;
