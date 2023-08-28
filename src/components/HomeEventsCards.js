import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux/es";
import { storageBaseURL } from "../services/httpService";
import { isArabic, language } from "../locales/language";
import HandleTimeComponent from "./HandleTimeComponent";
import { useNavigate } from "react-router-dom/dist";
import { eventPageRoute } from "../routes";
import { getImageSrc } from "../services/imageServices";

function HomeEventsCards() {
  const allEvents = useSelector((state) => state.events.allEvents);
  const navigate = useNavigate();
  const infoStyle = isArabic() ? { textAlign: "right" } : { textAlign: "left" };
  const containerStyle = isArabic()
    ? { direction: "rtl" }
    : { direction: "ltr" };
  const handleGoToEventPage = (id) => {
    navigate(eventPageRoute + `/${id}`);
    window.scrollTo(0, 0);
  };
  return allEvents.map((e) => {
    if (e.active)
      return (
        <Row
          className="justify-content-between event-card p-3 my-4"
          style={containerStyle}
          key={e.id}
          onClick={() => handleGoToEventPage(e.id)}
        >
          <Col md={6} className="align-items-center">
            <img
              src={getImageSrc(e.events_list_image)}
              alt="event_list_img"
              className="event_list_img"
            />
          </Col>
          <Col md={6}>
            <Row className="mt-4">
              <Col>
                <h5 style={infoStyle}>{isArabic() ? e.name_ar : e.name}</h5>
              </Col>
            </Row>
            <Row>
              <Col>
                <p style={infoStyle}>
                  {isArabic()
                    ? e.short_description_ar
                    : e.short_description}
                </p>
              </Col>
            </Row>
            <Col md={12}>
              <Row
                className="justify-content-start"
                style={{ fontWeight: "bold", fontSize: "14px" }}
              >
                <HandleTimeComponent data={e} />
              </Row>
            </Col>
          </Col>
        </Row>
      );
  });
}

export default HomeEventsCards;
