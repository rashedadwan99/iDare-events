import React, { useEffect } from "react";
import { memo } from "react";
import { useParams } from "react-router-dom/dist";
import { useSelector } from "react-redux/es";
import FloatingButton from "../components/common/FloatingButton";
import EventBody from "../components/EventBody";
import "../styles/event-page.css";
const EventPage = memo(function () {
  const { id } = useParams();
  const allEvents = useSelector((state) => state.events.allEvents);

  const event = allEvents.find((e) => e.id === parseInt(id));
  useEffect(() => {
    const container = document.createElement("div");
    const style = document.createElement("style");
    style.innerHTML = `.event-page,.event-header{${event.google_fonts_code}}
    `;
    container.innerHTML = event.google_fonts_link;
    const linkElement = container.querySelector("link");
    if (linkElement) {
      document.head.appendChild(linkElement);
      document.head.appendChild(style);
    }

    return () => {
      container.innerHTML = "";
      document.head.removeChild(linkElement);
      document.head.removeChild(style);
    };
  }, [event.google_fonts_link, event.google_fonts_code]);

  return (
    <>
      <EventBody event={event} />
      <FloatingButton event={event} />
    </>
  );
});

export default EventPage;
