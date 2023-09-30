import React from "react";
import { Navigate, useParams } from "react-router-dom/dist";
import { useSelector } from "react-redux/es";
import CircleSpinner from "../components/common/CircleSpinner";
import FloatingButton from "../components/common/FloatingButton";
import EventBody from "../components/EventBody";
import { notfoundPageRoute } from "../routes";
import "../styles/event-page.css";
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
          <EventBody event={event} />
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
