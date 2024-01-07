import React, { useEffect, useRef, memo } from "react";
import { useParams } from "react-router-dom/dist";
import { useSelector } from "react-redux/es";
import FloatingButton from "../components/common/FloatingButton";
import EventBody from "../components/EventBody";
import Header from "../components/Header";
import NotFound from "./NotFound";
const EventPage = memo(function () {
  const { id } = useParams();
  const linkRef = useRef(null);
  const allEvents = useSelector((state) => state.events.allEvents);

  const event = allEvents.find((e) => e.id === parseInt(id));
  useEffect(() => {
    if (event) {
      const style = document.createElement("style");
      style.innerHTML = `.event-page, .event-header{ ${event.google_fonts_code} }`;

      const container = document.createElement("div");
      container.innerHTML = event.google_fonts_link;
      const linkElement = container.querySelector("link");
      linkRef.current = event.google_fonts_link;

      if (linkElement) {
        document.head.appendChild(linkElement);
        document.head.appendChild(style);
      }

      return () => {
        container.innerHTML = "";
        if (linkElement) {
          document.head.removeChild(linkElement);
          document.head.removeChild(style);
        }
      };
    }
  }, []);

  if (event && event.id)
    return (
      <>
        <Header />

        <EventBody event={event} />
        <FloatingButton event={event} />
      </>
    );
  return <NotFound />;
});

export default EventPage;
