import React from "react";
import { useTranslation } from "react-i18next";
import { getEventPageLinks } from "./data/eventPageLinks";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { smoothScrolling } from "./utils/smoothScrolling";
import { memo } from "react";
const EventPageLinks = memo(function ({ event }) {
  const { t } = useTranslation();
  const links = getEventPageLinks(event.id, event, t);
  const navigate = useNavigate();
  const handleNavigate = (l) => {
    navigate(l.path);
    smoothScrolling();
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
});
export default EventPageLinks;
