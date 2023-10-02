import React, { useEffect, useRef, memo } from "react";
import { useParams } from "react-router-dom/dist";
import { useSelector } from "react-redux/es";
import FloatingButton from "../components/common/FloatingButton";
import EventBody from "../components/EventBody";
const EventPage = memo(function () {
  const { id } = useParams();
  const styleRef = useRef(null);
  const linkRef = useRef(null);
  const allEvents = useSelector((state) => state.events.allEvents);

  const event = allEvents.find((e) => e.id === parseInt(id));
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `.event-page, .event-header { ${event.google_fonts_code} }`;
    styleRef.current = style;

    const container = document.createElement("div");
    container.innerHTML = event.google_fonts_link;
    const linkElement = container.querySelector("link");
    linkRef.current = linkElement;

    if (linkElement) {
      document.head.appendChild(linkElement);
      document.head.appendChild(style);
    }

    return () => {
      container.innerHTML = "";
      if (linkRef.current) {
        document.head.removeChild(linkRef.current);
      }
      if (styleRef.current) {
        document.head.removeChild(styleRef.current);
      }
    };
  }, [event.google_fonts_link, event.google_fonts_code]);

  if (event.id)
    return (
      <>
        <EventBody event={event} />
        <FloatingButton event={event} />
      </>
    );
});

export default EventPage;
