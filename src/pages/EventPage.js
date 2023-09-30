import React from "react";
import { Navigate, useParams } from "react-router-dom/dist";
import { useSelector } from "react-redux/es";
import Header from "../components/Header";
import { headerEventStyle } from "../styles/eventStyles";
import CircleSpinner from "../components/common/CircleSpinner";
import FloatingButton from "../components/common/FloatingButton";
import EventBodyFooter from "../components/EventBodyFooter";
import "../styles/event-page.css";
import { notfoundPageRoute } from "../routes";
function EventPage() {
  const { id } = useParams();
  const allEvents = useSelector((state) => state.events.allEvents);
  const myEvents = useSelector((state) => state.events.myEvents);
  const isLoading = useSelector((state) => state.events.isLoading);
  const isInAlllEvents = allEvents.find((e) => e.id === parseInt(id));
  const isInMyEvents = myEvents.find((e) => e.id === parseInt(id));
  const event = allEvents.find((e) => e.id === parseInt(id));

  return !isLoading ? (
    <>
      {!isInAlllEvents || isInMyEvents ? (
        <Navigate to={notfoundPageRoute} />
      ) : (
        <>
          <Header event={event} style={headerEventStyle(event)} />
          <EventBodyFooter event={event} />
          <FloatingButton event={event} />
        </>
      )}
    </>
  ) : (
    <div className="event-spinner">
      <CircleSpinner />
    </div>
  );
}

export default EventPage;
