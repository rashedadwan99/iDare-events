import React from "react";
import { Outlet, useParams } from "react-router-dom/dist";
import { useSelector } from "react-redux/es";
import { Row } from "react-bootstrap";
import { isArabic } from "../locales/language";
import EventFooter from "../components/EventFooter";
import Header from "../components/Header";
import { headerEventStyle } from "../styles/eventStyles";
import CircleSpinner from "../components/common/CircleSpinner";
import "../styles/single-event-page.css";
import FloatingButton from "../components/common/FloatingButton";
function SingleEventPage() {
  const { id } = useParams();
  const allEvents = useSelector((state) => state.events.allEvents);
  const isLoading = useSelector((state) => state.events.isLoading);
  const event = allEvents.find((e) => e.id === parseInt(id));

  return !isLoading ? (
    <>
      <Header event={event} style={headerEventStyle(event)} />
      <Row className={`event-page ${isArabic() ? "arabic" : ""}`}>
        <Outlet />
        <FloatingButton />
        <EventFooter event={event} />
      </Row>
    </>
  ) : (
    <div className="event-spinner">
      <CircleSpinner />
    </div>
  );
}

export default SingleEventPage;
