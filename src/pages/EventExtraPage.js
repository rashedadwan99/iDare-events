import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Col } from "react-bootstrap";
import DomParser from "../components/common/DomParser";
import { notfoundPageRoute } from "../routes";
import { sortData } from "../components/utils/sort";
import "../styles/extra-page.css";
import { memo } from "react";
const EventExtraPage = memo(function () {
  const { id, page_id } = useParams();
  const isArabic = useSelector((state) => state.language.isArabic);
  const allEvents = useSelector((state) => state.events.allEvents);
  const event = allEvents.find((e) => e.id === parseInt(id));
  const sortedExtraPages = sortData(event.extra_pages, "sort", "asc");
  const extraPage = sortedExtraPages.find((ep) => ep.id === parseInt(page_id));
  if (!extraPage || !extraPage.active)
    return <Navigate to={notfoundPageRoute} />;
  return (
    <Col
      xs={12}
      sm={12}
      className={`extra-page px-4 my-5 ${isArabic ? "ar" : ""}`}
    >
      <DomParser
        htmlResponse={isArabic ? extraPage.content_ar : extraPage.content}
      />
    </Col>
  );
});

export default EventExtraPage;
