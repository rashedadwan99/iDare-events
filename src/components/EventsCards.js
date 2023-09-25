import React from "react";
import { Col, Image, Row } from "react-bootstrap";

import { useNavigate } from "react-router-dom/dist";
import { eventPageRoute } from "../routes";
import { getImageSrc } from "../services/imageServices";
import EventTimeLocation from "./EventTimeLocation";
import { useSelector } from "react-redux";
import Premium from "./Premium";
import AosContainer from "./common/Aos";
function EventsCard({ events }) {
  const navigate = useNavigate();
  const isArabic = useSelector((state) => state.language.isArabic);
  const infoStyle = isArabic ? { textAlign: "right" } : { textAlign: "left" };
  const containerStyle = isArabic ? { direction: "rtl" } : { direction: "ltr" };
  const handleGoToEventPage = (id) => {
    navigate(eventPageRoute + `/${id}`);
    window.scrollTo(0, 0);
  };

  return events.map((e) => {
    if (e.active)
      return (
        <Row
          className="justify-content-between event-card py-3 my-4"
          style={containerStyle}
          key={e.id}
          onClick={() => handleGoToEventPage(e.id)}
        >
          <Col md={6}>
            <AosContainer
              animation_name_scroll_down="zoom_in"
              animation_name_scroll_up="zoom-out"
            >
              <Image
                fluid
                src={getImageSrc(e.events_list_image)}
                alt="event_list_img"
                className="event_list_img"
              />
            </AosContainer>
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

              <Col md={12}>
                <Row
                  className="justify-content-start"
                  style={{ fontWeight: "bold", fontSize: "12px" }}
                >
                  <EventTimeLocation event={e} />
                </Row>
              </Col>
            </AosContainer>
          </Col>
        </Row>
      );
    return <></>;
  });
}

export default EventsCard;
