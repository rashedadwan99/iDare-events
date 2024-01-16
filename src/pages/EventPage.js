import React, { useEffect, useRef, memo } from "react";
import { useParams } from "react-router-dom/dist";
import { useSelector } from "react-redux/es";
import FloatingButton from "../components/common/FloatingButton";
import EventBody from "../components/EventBody";
import Header from "../components/Header";
import NotFound from "./NotFound";
import { fontCode, fontLink } from "../styles/eventStyles";
const EventPage = memo(function () {
  const { id } = useParams();
  const linkRef = useRef(null);
  const allEvents = useSelector((state) => state.events.allEvents);

  const event = allEvents.find((e) => e.id === parseInt(id));
  useEffect(() => {
    if (event) {
      const style = document.createElement("style");
      const eventFontLink = event.google_fonts_link ?? fontLink;
      style.innerHTML = `.event-page, .event-header{ ${
        event.google_font_code ?? fontCode
      } }`;

      const container = document.createElement("div");
      container.innerHTML = eventFontLink;

      if (eventFontLink) {
        document.head.appendChild(container);
        document.head.appendChild(style);
      }

      return () => {
        container.innerHTML = "";
        if (eventFontLink) {
          document.head.removeChild(container);
        }
      };
    }
  }, [event]);

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
