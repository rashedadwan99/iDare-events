import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import DomParser from "../components/common/DomParser";
import { notfoundPageRoute } from "../routes";
import { sortData } from "../components/utils/sort";
import "../styles/extra-page.css";
function EventExtraPage() {
  const { id, page_id } = useParams();
  const isArabic = useSelector((state) => state.language.isArabic);
  const allEvents = useSelector((state) => state.events.allEvents);
  const event = allEvents.find((e) => e.id === parseInt(id));
  const sortedExtraPages = sortData(event.extra_pages, "sort", "asc");
  const extraPage = sortedExtraPages.find((ep) => ep.id === parseInt(page_id));
  if (!extraPage || !extraPage.active)
    return <Navigate to={notfoundPageRoute} />;
  return (
    <Col xs={12} sm={12} className={`extra-page my-5 ${isArabic ? "ar" : ""}`}>
      <Row className="justify-content-center">
        <h3 className="event-section-name">
          {isArabic ? extraPage.title_ar : extraPage.title}
        </h3>
      </Row>
      <Row className="justify-content-center">
        <DomParser
          htmlResponse={isArabic ? extraPage.content_ar : extraPage.content}
        />
      </Row>
    </Col>
  );
}

export default EventExtraPage;
