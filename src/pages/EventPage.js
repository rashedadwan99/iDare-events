import React from "react";
import { useParams } from "react-router-dom/dist";
import { useSelector } from "react-redux/es";
import FloatingButton from "../components/common/FloatingButton";
import EventBody from "../components/EventBody";
import "../styles/event-page.css";
function EventPage() {
  const { id } = useParams();
  const allEvents = useSelector((state) => state.events.allEvents);

  const event = allEvents.find((e) => e.id === parseInt(id));
  const isLoading = useSelector((state) => state.events.isLoading);
  return (
    <>
      <EventBody event={event} />
      <FloatingButton event={event} />
    </>
  );
}

export default EventPage;
