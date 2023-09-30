import React from "react";
import { useTranslation } from "react-i18next";
import { animateScroll as scroll } from "react-scroll";
import { getEventPageLinks } from "./data/eventPageLinks";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function EventPageLinks({ event }) {
  const isArabic = useSelector((state) => state.language.isArabic);
  const { t } = useTranslation();
  const links = getEventPageLinks(event.id, event, t, isArabic);
  const navigate = useNavigate();
  const handleNavigate = (l) => {
    scroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuad",
    });
    navigate(l.path);
  };
  return links
    .filter((l) => !l.isDropDown)
    .map((l) => {
      return (
        <Col key={l.path} sm={12}>
          <Row key={l.path}>
            <span
              className="event-page-link mb-3"
              onClick={() => handleNavigate(l)}
            >
              {l.label}
            </span>
          </Row>
        </Col>
      );
    });
}

export default EventPageLinks;
